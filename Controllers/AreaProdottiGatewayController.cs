using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using System.Text;
using Newtonsoft.Json;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class AreaProdottiGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public AreaProdottiGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"]; // Leggiamo l'URL del microservizio da appsettings.json
        }

        // GET: GetAllAreeProdotti
        [HttpGet("GetAllAreeProdotti")]
        public async Task<IActionResult> GetAllAreeProdotti()
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/AreaProdotti/GetAllAreeProdotti");
            return await HandleResponse(response);
        }

        // GET: GetAreeProdottiById/{id}
        [HttpGet("GetAreeProdottiById/{id}")]
        public async Task<IActionResult> GetAreeProdottiById(long id)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/AreaProdotti/GetAreeProdottiById/{id}");
            return await HandleResponse(response);
        }

        // POST: InsertAreeProdotti
        [HttpPost("InsertAreeProdotti")]
        public async Task<IActionResult> InsertAreeProdotti([FromBody] AreeProdottiDTO areaProdotti)
        {

            Console.WriteLine($"Gateway sta inviando: {JsonConvert.SerializeObject(areaProdotti)}"); // <-- Debug

            if (string.IsNullOrWhiteSpace(areaProdotti.Nome))
            {
                return BadRequest(new { Message = "Errore: il campo Nome è obbligatorio." });
            }

            var content = new StringContent(JsonConvert.SerializeObject(areaProdotti), Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/AreaProdotti/InsertAreeProdotti", content);
            return await HandleResponse(response);
        }

        // POST: UpdateAreeProdotti
        [HttpPost("UpdateAreeProdotto")]
        public async Task<IActionResult> UpdateAreeProdotti([FromBody] AreeProdottiDTO areaProdotti)
        {
            var content = new StringContent(JsonConvert.SerializeObject(areaProdotti), Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/AreaProdotti/UpdateAreeProdotto", content);
            return await HandleResponse(response);
        }

        // DELETE: EliminaAreeProdotti/{id}
        [HttpDelete("EliminaAreeProdotti/{id}")]
        public async Task<IActionResult> EliminaAreeProdotti(long id)
        {
            var response = await _httpClient.DeleteAsync($"{_microserviceBaseUrl}/api/AreaProdotti/EliminaAreeProdotti/{id}");
            return await HandleResponse(response);
        }

        // GET: GetCountVistaAreeProdotti
        [HttpGet("GetCountVistaAreeProdotti")]
        public async Task<IActionResult> GetCountVistaAreeProdotti([FromQuery] string? searchText)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/AreaProdotti/GetCountVistaAreeProdotti?searchText={searchText}");
            return await HandleResponse(response);
        }

        // GET: GetAreeProdottiPaginazione
        [HttpGet("GetAreeProdottiPaginazione")]
        public async Task<IActionResult> GetAreeProdottiPaginazione([FromQuery] int dimensione, [FromQuery] string? ordine, [FromQuery] int pagina, [FromQuery] string? searchText)
        {
            var url = $"{_microserviceBaseUrl}/api/AreaProdotti/GetAreeProdottiPaginazione?dimensione={dimensione}&pagina={pagina}";
            if (!string.IsNullOrEmpty(ordine)) url += $"&ordine={ordine}";
            if (!string.IsNullOrEmpty(searchText)) url += $"&searchText={searchText}";

            var response = await _httpClient.GetAsync(url);
            return await HandleResponse(response);
        }

        [HttpGet("VerificaRimuovi/{id}")]
        public async Task<IActionResult> VerificaRimuovi(long id)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/AreaProdotti/VerificaRimuovi/{id}");
            return await HandleResponse(response);
        }

        [HttpGet("getAllByIdSettore/{idSettore}")]
        public async Task<IActionResult> GetAllByIdSettore(long idSettore)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/AreaProdotti/getAllByIdSettore/{idSettore}");
            return await HandleResponse(response);
        }

        // Funzione per gestire le risposte HTTP
        private async Task<IActionResult> HandleResponse(HttpResponseMessage response)
        {
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                return Content(content, "application/json");
            }
            else
            {
                return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
            }
        }
    }
}

public class AreeProdottiDTO
{
    public long Id { get; set; }

    public DateTime Creato { get; set; }

    public DateTime? Aggiornato { get; set; }

    public string Nome { get; set; } = null!;

    public long IdSettore { get; set; }
}