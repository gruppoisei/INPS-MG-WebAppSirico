using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Text;
using Newtonsoft.Json;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class ComunicazioniGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public ComunicazioniGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        [HttpGet("GetComunicazioniById/{id}")]
        public async Task<IActionResult> GetComunicazioneById(long id)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Comunicazioni/GetComunicazioniById/{id}");
            return await HandleResponse(response);
        }

        [HttpGet("GetTipoComunicazioneById/{id}")]
        public async Task<IActionResult> GetTipoComunicazioneById(long id)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Comunicazioni/GetTipoComunicazioneById/{id}");
            return await HandleResponse(response);
        }

        [HttpPost("InsertComunicazione")]
        public async Task<IActionResult> InsertComunicazione([FromBody] ComunicazioniDTO comunicazione)
        {
            var jsonContent = new StringContent(JsonConvert.SerializeObject(comunicazione), Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/Comunicazioni/InsertComunicazione", jsonContent);
            return await HandleResponse(response);
        }

        [HttpGet("GetCountVistaComunicazioniTipoComunicazioni")]
        public async Task<IActionResult> GetCountVistaComunicazioniTipoComunicazioni([FromQuery] string? searchText)
        {
            var url = $"{_microserviceBaseUrl}/api/Comunicazioni/GetCountVistaComunicazioniTipoComunicazioni";
            if (!string.IsNullOrEmpty(searchText))
            {
                url += $"?searchText={searchText}";
            }

            var response = await _httpClient.GetAsync(url);
            return await HandleResponse(response);
        }

        [HttpGet("GetComunicazioniPaginazione")]
        public async Task<IActionResult> GetComunicazioniPaginazione([FromQuery] int dimensione, [FromQuery] string? ordine, [FromQuery] int pagina, [FromQuery] string? searchText)
        {
            var url = $"{_microserviceBaseUrl}/api/Comunicazioni/GetComunicazioniPaginazione?dimensione={dimensione}&pagina={pagina}";
            if (!string.IsNullOrEmpty(ordine)) url += $"&ordine={ordine}";
            if (!string.IsNullOrEmpty(searchText)) url += $"&searchText={searchText}";

            var response = await _httpClient.GetAsync(url);
            return await HandleResponse(response);
        }

        [HttpDelete("EliminaComunicazione/{id}")]
        public async Task<IActionResult> DeleteComunicazione(long id)
        {
            var response = await _httpClient.DeleteAsync($"{_microserviceBaseUrl}/api/Comunicazioni/EliminaComunicazione/{id}");
            return await HandleResponse(response);
        }

        [HttpPut("UpdateComunicazione")]
        public async Task<IActionResult> UpdateComunicazione([FromBody] ComunicazioniDTO comunicazione)
        {
            var jsonContent = new StringContent(JsonConvert.SerializeObject(comunicazione), Encoding.UTF8, "application/json");
            var response = await _httpClient.PutAsync($"{_microserviceBaseUrl}/api/Comunicazioni/UpdateComunicazione", jsonContent);
            return await HandleResponse(response);
        }

        [HttpPost("InsertComunicazioneLetta")]
        public async Task<IActionResult> InsertComunicazioneLetta([FromBody] ComunicazioniLetteDTO comunicazioneLetta)
        {
            var jsonContent = new StringContent(JsonConvert.SerializeObject(comunicazioneLetta), Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/Comunicazioni/InsertComunicazioneLetta", jsonContent);
            return await HandleResponse(response);
        }

        [HttpGet("GetComunicazioniLetteByMatricola/{matricola}")]
        public async Task<IActionResult> GetComunicazioniLetteByMatricola(string matricola)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Comunicazioni/GetComunicazioniLetteByMatricola/{matricola}");
            return await HandleResponse(response);
        }

        private async Task<IActionResult> HandleResponse(HttpResponseMessage response)
        {
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                return Content(content, "application/json");
            }

            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }
    }
}

public class ComunicazioniDTO
{
    public long Id { get; set; }
    public DateTime Creato { get; set; }
    public DateTime Aggiornato { get; set; }
    public string Oggetto { get; set; } = null!;
    public string Messaggio { get; set; } = null!;
    public DateTime? DataInizio { get; set; }
    public DateTime? DataFine { get; set; }
    public long IdTipoComunicazione { get; set; }
}

public class ComunicazioniLetteDTO
{
    public long Id { get; set; }
    public DateTime Creato { get; set; }
    public DateTime Aggiornato { get; set; }
    public long IdComunicazione { get; set; }
    public string Matricola { get; set; } = null!;
}