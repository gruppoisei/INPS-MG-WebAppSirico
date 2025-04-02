using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class SegnalazioniEAspettiProdottiGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public SegnalazioniEAspettiProdottiGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        /// <summary>
        /// Salva una segnalazione prodotto
        /// </summary>
        [HttpPost("salvaSegnalazioneProdotto")]
        public async Task<IActionResult> SalvaSegnalazioneProdotto([FromForm] SalvaSegnalazioneDTO segnalazioneProdotto, [FromForm] List<IFormFile> fileSegnalazione,
            [FromForm] List<IFormFile> filesAspetti, [FromForm] List<string> idAspetti)
        {
            using var formData = new MultipartFormDataContent();

            // Aggiunta delle proprietà semplici del DTO
            var properties = typeof(SalvaSegnalazioneDTO).GetProperties();
            foreach (var property in properties)
            {
                var value = property.GetValue(segnalazioneProdotto);
                if (value != null && property.Name != nameof(segnalazioneProdotto.AspettiSegnalazione)) // Escludiamo AspettiSegnalazione
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
            if (segnalazioneProdotto.AspettiSegnalazione != null && segnalazioneProdotto.AspettiSegnalazione.Any())
            {
                for (int i = 0; i < segnalazioneProdotto.AspettiSegnalazione.Count; i++)
                {
                    var aspetto = segnalazioneProdotto.AspettiSegnalazione[i];

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
                $"{_microserviceBaseUrl}/api/SegnalazioniEAspettiProdotti/salvaSegnalazioneProdotto",
                formData);

            return await HandleResponse(response);
        }



        [HttpGet("getDettagliSegnalazioneById")]
        public async Task<IActionResult> GetDettagliSegnalazioneById([FromQuery] long id)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/SegnalazioniEAspettiProdotti/getDettagliSegnalazioneById?id={id}");
            return await HandleResponse(response);
        }

        [HttpGet("getAspettoSegnalazioneById/{id}")]
        public async Task<IActionResult> GetAspettoSegnalazioneById(long id)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/SegnalazioniEAspettiProdotti/getAspettoSegnalazioneById/{id}");
            return await HandleResponse(response);
        }

        [HttpPost("aggiornaDettagliSegnalazione")]
        public async Task<IActionResult> AggiornaDettagliSegnalazione([FromBody] object aggiornamento)
        {
            var jsonContent = new StringContent(JsonSerializer.Serialize(aggiornamento), Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/SegnalazioniEAspettiProdotti/aggiornaDettagliSegnalazione", jsonContent);

            return await HandleResponse(response);
        }

        [HttpDelete("eliminaSegnalazioneEDettagli/{id}")]
        public async Task<IActionResult> EliminaSegnalazioneProdotto(long id)
        {
            var response = await _httpClient.DeleteAsync($"{_microserviceBaseUrl}/api/SegnalazioniEAspettiProdotti/eliminaSegnalazioneEDettagli/{id}");
            return await HandleResponse(response);
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
