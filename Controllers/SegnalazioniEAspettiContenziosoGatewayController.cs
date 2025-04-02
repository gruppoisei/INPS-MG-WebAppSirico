using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class SegnalazioniEAspettiContenziosoGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public SegnalazioniEAspettiContenziosoGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        /// <summary>
        /// Salva una segnalazione contenzioso
        /// </summary>
        [HttpPost("salvaSegnalazione")]
        public async Task<IActionResult> SalvaSegnalazioneContenzioso([FromForm] SalvaSegnalazioneDTO segnalazioneContenzioso, [FromForm] List<IFormFile> fileSegnalazione,
            [FromForm] List<IFormFile> filesAspetti, [FromForm] List<string> idAspetti)
        {
            using var formData = new MultipartFormDataContent();

            // Aggiunta delle proprietà semplici del DTO
            var properties = typeof(SalvaSegnalazioneDTO).GetProperties();
            foreach (var property in properties)
            {
                var value = property.GetValue(segnalazioneContenzioso);
                if (value != null && property.Name != nameof(segnalazioneContenzioso.AspettiSegnalazione)) // Escludiamo AspettiSegnalazione
                {
                    if (property.PropertyType == typeof(DateTime) || property.PropertyType == typeof(DateTime?))
                    {
                        var dateValue = (DateTime?)value;
                        if (dateValue.HasValue)
                        {
                            formData.Add(new StringContent(dateValue.Value.ToString("o")), property.Name); // Formato ISO 8601
                        }
                    }
                    else
                    {
                        formData.Add(new StringContent(value.ToString()), property.Name);
                    }
                }
            }

            // Aggiungiamo AspettiSegnalazione come più parametri separati
            if (segnalazioneContenzioso.AspettiSegnalazione != null && segnalazioneContenzioso.AspettiSegnalazione.Any())
            {
                for (int i = 0; i < segnalazioneContenzioso.AspettiSegnalazione.Count; i++)
                {
                    var aspetto = segnalazioneContenzioso.AspettiSegnalazione[i];

                    // Convertiamo ogni proprietà in un parametro separato
                    var aspettoProperties = typeof(AspettiSegnalazioniProdottiDTO).GetProperties();
                    foreach (var aspettoProperty in aspettoProperties)
                    {
                        var aspettoValue = aspettoProperty.GetValue(aspetto);
                        if (aspettoValue != null)
                        {
                            if (aspettoProperty.PropertyType == typeof(DateTime) || aspettoProperty.PropertyType == typeof(DateTime?))
                            {
                                var dateValue = (DateTime?)aspettoValue;
                                if (dateValue.HasValue)
                                {
                                    formData.Add(new StringContent(dateValue.Value.ToString("o")), $"AspettiSegnalazione[{i}].{aspettoProperty.Name}"); // Formato ISO 8601
                                }
                            }
                            else
                            {
                                formData.Add(new StringContent(aspettoValue.ToString()), $"AspettiSegnalazione[{i}].{aspettoProperty.Name}");
                            }
                        }
                    }
                }
            }

            // Aggiunta dei file di segnalazione
            if (fileSegnalazione?.Count > 0)
            {
                foreach (var file in fileSegnalazione)
                {
                    formData.Add(new StreamContent(file.OpenReadStream()), "fileSegnalazione", file.FileName);
                }
            }

            // Aggiunta dei file degli aspetti
            if (filesAspetti?.Count > 0)
            {
                foreach (var file in filesAspetti)
                {
                    formData.Add(new StreamContent(file.OpenReadStream()), "filesAspetti", file.FileName);
                }
            }

            // Aggiunta degli ID aspetti
            if (idAspetti?.Count > 0)
            {
                foreach (var id in idAspetti)
                {
                    formData.Add(new StringContent(id), "idAspetti");
                }
            }

            // Inoltriamo la richiesta al microservizio
            var response = await _httpClient.PostAsync(
                $"{_microserviceBaseUrl}/api/SegnalazioniEAspettiContenzioso/salvaSegnalazione",
                formData);

            return await HandleResponse(response);
        }



        /// <summary>
        /// Ottiene i dettagli di un Aspetto Segnalazione Contenzioso per ID
        /// </summary>
        [HttpGet("getAspettoSegnalazioneById/{id}")]
        public async Task<IActionResult> GetAspettoSegnalazioneById(long id)
        {
            var url = $"{_microserviceBaseUrl}/api/SegnalazioniEAspettiContenzioso/getAspettoSegnalazioneById/{id}";
            var response = await _httpClient.GetAsync(url);
            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }

        /// <summary>
        /// Ottiene i dettagli di una segnalazione contenzioso per ID
        /// </summary>
        [HttpGet("getDettagliSegnalazioneContenziosoById")]
        public async Task<IActionResult> GetDettagliSegnalazioneContenziosoById([FromQuery] long id)
        {
            var url = $"{_microserviceBaseUrl}/api/SegnalazioniEAspettiContenzioso/getDettagliSegnalazioneContenziosoById?id={id}";
            var response = await _httpClient.GetAsync(url);
            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }

        /// <summary>
        /// Aggiorna i dettagli di una segnalazione contenzioso
        /// </summary>
        [HttpPost("aggiornaDettagliSegnalazione")]
        public async Task<IActionResult> AggiornaDettagliSegnalazione([FromBody] object segnalazioneUpdate)
        {
            //var url = $"{_microserviceBaseUrl}/api/SegnalazioniEAspettiContenzioso/aggiornaDettagliSegnalazione";
            //var content = new StringContent(JsonConvert.SerializeObject(segnalazioneUpdate), Encoding.UTF8, "application/json");
            //var response = await _httpClient.PostAsync(url, content);
            //return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());

            var jsonContent = new StringContent(JsonSerializer.Serialize(segnalazioneUpdate), Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/SegnalazioniEAspettiContenzioso/aggiornaDettagliSegnalazione", jsonContent);

            return await HandleResponse(response);
        }

        /// <summary>
        /// Elimina una segnalazione e i suoi dettagli
        /// </summary>
        [HttpDelete("eliminaSegnalazioneEDettagli/{id}")]
        public async Task<IActionResult> EliminaSegnalazioneContenzioso(long id)
        {
            var url = $"{_microserviceBaseUrl}/api/SegnalazioniEAspettiContenzioso/eliminaSegnalazioneEDettagli/{id}";
            var response = await _httpClient.DeleteAsync(url);
            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }

        private async Task<IActionResult> HandleResponse(HttpResponseMessage response)
        {
            if (response.IsSuccessStatusCode)
            {
                var result = await response.Content.ReadAsStringAsync();
                return Content(result, "application/json");
            }
            else
            {
                var error = await response.Content.ReadAsStringAsync();
                return StatusCode((int)response.StatusCode, new { message = error });
            }
        }
    }
}
