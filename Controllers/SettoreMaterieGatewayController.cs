using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class SettoreMaterieGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public SettoreMaterieGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        // GET: Ottiene tutti i settori materie
        [HttpGet("getAllSettoriMaterie")]
        public async Task<IActionResult> GetAllSettoriMaterie()
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/SettoreMaterie/getAllSettoriMaterie");
            return await ProcessResponse(response);
        }

        // GET: Ottiene un settore materia per ID
        [HttpGet("getSettoriMaterieById/{id}")]
        public async Task<IActionResult> GetSettoriMaterieById(long id)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/SettoreMaterie/getSettoriMaterieById/{id}");
            return await ProcessResponse(response);
        }

        // POST: Inserisce un nuovo settore materia
        [HttpPost("InsertSettoreMateria")]
        public async Task<IActionResult> InsertSettoreMateria([FromBody] object settoreMaterie)
        {
            var content = new StringContent(JsonSerializer.Serialize(settoreMaterie), Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/SettoreMaterie/InsertSettoreMateria", content);
            return await ProcessResponse(response);
        }

        // POST: Aggiorna un settore materia
        [HttpPost("aggiornaSettoriMaterie")]
        public async Task<IActionResult> UpdateSettoriMaterie([FromBody] object settoreMaterie)
        {
            var content = new StringContent(JsonSerializer.Serialize(settoreMaterie), Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/SettoreMaterie/aggiornaSettoriMaterie", content);
            return await ProcessResponse(response);
        }

        // DELETE: Elimina un settore materia
        [HttpDelete("eliminaSettoriMaterie/{id}")]
        public async Task<IActionResult> DeleteSettoriMaterie(long id)
        {
            var response = await _httpClient.DeleteAsync($"{_microserviceBaseUrl}/api/SettoreMaterie/eliminaSettoriMaterie/{id}");
            return await ProcessResponse(response);
        }

        // GET: Conta i settori materie con eventuale filtro
        [HttpGet("countSettoriMaterie")]
        public async Task<IActionResult> CountSettoriMaterie([FromQuery] string? searchText)
        {
            var url = string.IsNullOrEmpty(searchText)
                ? $"{_microserviceBaseUrl}/api/SettoreMaterie/countSettoriMaterie"
                : $"{_microserviceBaseUrl}/api/SettoreMaterie/countSettoriMaterie?searchText={searchText}";

            var response = await _httpClient.GetAsync(url);
            return await ProcessResponse(response);
        }

        // GET: Ottiene settori con paginazione
        [HttpGet("GetSettoriMateriePaginazione")]
        public async Task<IActionResult> GetSettoriMateriePaginazione([FromQuery] int dimensione, [FromQuery] string? ordine, [FromQuery] int pagina, [FromQuery] string? searchText)
        {
            var url = $"{_microserviceBaseUrl}/api/SettoreMaterie/GetSettoriMateriePaginazione?dimensione={dimensione}&pagina={pagina}";
            if (!string.IsNullOrEmpty(ordine)) url += $"&ordine={ordine}";
            if (!string.IsNullOrEmpty(searchText)) url += $"&searchText={searchText}";

            var response = await _httpClient.GetAsync(url);
            return await ProcessResponse(response);
        }

        // GET: Ottiene settori con area collegata
        [HttpGet("getSettoriConAreaCollegata")]
        public async Task<IActionResult> GetSettoriConAreeProdotti()
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/SettoreMaterie/getSettoriConAreaCollegata");
            return await ProcessResponse(response);
        }

        // POST: Verifica se è possibile rimuovere un settore materia
        [HttpPost("VerificaRimuoviSettoreMateria/{id}")]
        public async Task<IActionResult> VerificaRimuoviSettoreMateria(long id)
        {
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/SettoreMaterie/VerificaRimuoviSettoreMateria/{id}", null);
            return await ProcessResponse(response);
        }

        // Metodo helper per gestire le risposte
        private async Task<IActionResult> ProcessResponse(HttpResponseMessage response)
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
