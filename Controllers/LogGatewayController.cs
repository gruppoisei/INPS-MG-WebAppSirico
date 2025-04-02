using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class LogGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _logServiceUrl;

        public LogGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _logServiceUrl = configuration["MS_SiricoGatewayClient"]; // Preso dal file appsettings.json
        }

        private async Task<IActionResult> ForwardGetRequest(string endpoint)
        {
            try
            {
                string url = $"{_logServiceUrl}/api/Log/{endpoint}";
                var response = await _httpClient.GetAsync(url);
                response.EnsureSuccessStatusCode();
                var result = await response.Content.ReadAsStringAsync();
                return Content(result, "application/json");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Errore nel gateway: {ex.Message}");
            }
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetLogs([FromQuery] int pagina = 0, [FromQuery] int? dimensione = 20, [FromQuery] string[] ordine = null)
        {
            string query = $"getAll/?pagina={pagina}&dimensione={dimensione}&ordine={string.Join(",", ordine ?? new string[0])}";
            return await ForwardGetRequest(query);
        }

        [HttpGet("filtra")]
        public async Task<IActionResult> FilterLogs([FromQuery] int pagina = 0, [FromQuery] int dimensione = 20, [FromQuery] string[] ordine = null,
            [FromQuery] string? stacktrace = null, [FromQuery] int? tipo = null, [FromQuery] string? messaggio = null, [FromQuery] string? evento = null,
            [FromQuery] string? dataInizio = null, [FromQuery] string? dataFine = null, [FromQuery] string? account = null, [FromQuery] string? matricola = null, [FromQuery] string? ordinaColonna = null)
        {
            string query = $"filtra?pagina={pagina}&dimensione={dimensione}&stacktrace={stacktrace}&tipo={tipo}&messaggio={messaggio}&evento={evento}&dataInizio={dataInizio}&dataFine={dataFine}&account={account}&matricola={matricola}&ordinaColonna={ordinaColonna}";
            return await ForwardGetRequest(query);
        }

        [HttpGet("cercaSoloLogEventi")]
        public async Task<IActionResult> CercaSoloLogEventi([FromQuery] string? account, [FromQuery] string? matricola, [FromQuery] int? tipo,
            [FromQuery] string? messaggio, [FromQuery] string? evento, [FromQuery] string? dataInizio, [FromQuery] string? dataFine,
            [FromQuery] int pagina = 0, [FromQuery] int dimensione = 10, [FromQuery] string? ordine = null)
        {
            string query = $"cercaSoloLogEventi?account={account}&matricola={matricola}&tipo={tipo}&messaggio={messaggio}&evento={evento}&dataInizio={dataInizio}&dataFine={dataFine}&pagina={pagina}&dimensione={dimensione}&ordine={ordine}";
            return await ForwardGetRequest(query);
        }

        [HttpGet("filtraPerLogError")]
        public async Task<IActionResult> FiltraPerLogError([FromQuery] string? account, [FromQuery] string? matricola, [FromQuery] int? tipo,
            [FromQuery] string? messaggio, [FromQuery] string? evento, [FromQuery] string? dataInizio, [FromQuery] string? dataFine,
            [FromQuery] int pagina = 0, [FromQuery] int dimensione = 10, [FromQuery] string? ordine = null)
        {
            string query = $"filtraPerLogError?account={account}&matricola={matricola}&tipo={tipo}&messaggio={messaggio}&evento={evento}&dataInizio={dataInizio}&dataFine={dataFine}&pagina={pagina}&dimensione={dimensione}&ordine={ordine}";
            return await ForwardGetRequest(query);
        }

        [HttpGet("getById/{id}")]
        public async Task<IActionResult> GetLogById(long id) => await ForwardGetRequest($"getById/{id}");

        [HttpGet("conta")]
        public async Task<IActionResult> ContaLogs() => await ForwardGetRequest("conta");

        [HttpGet("tipi-log-usati")]
        public async Task<IActionResult> GetTipiLogUsati() => await ForwardGetRequest("tipi-log-usati");

        [HttpGet("contaPerLogError")]
        public async Task<IActionResult> ContaPerLogError([FromQuery] string? account, [FromQuery] string? matricola, [FromQuery] int? tipo,
            [FromQuery] string? messaggio, [FromQuery] string? evento, [FromQuery] string? dataInizio, [FromQuery] string? dataFine)
        {
            string query = $"contaPerLogError?account={account}&matricola={matricola}&tipo={tipo}&messaggio={messaggio}&evento={evento}&dataInizio={dataInizio}&dataFine={dataFine}";
            return await ForwardGetRequest(query);
        }

        [HttpGet("contaPerLogEventi")]
        public async Task<IActionResult> ContaPerLogEventi([FromQuery] string? account, [FromQuery] string? matricola, [FromQuery] int? tipo,
            [FromQuery] string? messaggio, [FromQuery] string? evento, [FromQuery] string? dataInizio, [FromQuery] string? dataFine)
        {
            string query = $"contaPerLogEventi?account={account}&matricola={matricola}&tipo={tipo}&messaggio={messaggio}&evento={evento}&dataInizio={dataInizio}&dataFine={dataFine}";
            return await ForwardGetRequest(query);
        }

        [HttpPost("")]
        public async Task<IActionResult> SaveLog([FromBody] object log)
        {
            try
            {
                string url = $"{_logServiceUrl}/api/Log";
                var response = await _httpClient.PostAsJsonAsync(url, log);
                response.EnsureSuccessStatusCode();
                var result = await response.Content.ReadAsStringAsync();
                return Content(result, "application/json");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Errore nel gateway: {ex.Message}");
            }
        }

        [HttpPost("aggiorna")]
        public async Task<IActionResult> UpdateLog([FromBody] object log)
        {
            try
            {
                string url = $"{_logServiceUrl}/api/Log/aggiorna";
                var response = await _httpClient.PostAsJsonAsync(url, log);
                response.EnsureSuccessStatusCode();
                var result = await response.Content.ReadAsStringAsync();
                return Content(result, "application/json");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Errore nel gateway: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLog(long id)
        {
            try
            {
                string url = $"{_logServiceUrl}/api/Log/{id}";
                var response = await _httpClient.DeleteAsync(url);
                response.EnsureSuccessStatusCode();
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Errore nel gateway: {ex.Message}");
            }
        }
    }
}
