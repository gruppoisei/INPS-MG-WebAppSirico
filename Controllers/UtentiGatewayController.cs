using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class UtentiGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public UtentiGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        // GET: contaRicercaFiltrataUtenti
        [HttpGet("contaRicercaFiltrataUtenti")]
        public async Task<IActionResult> ContaRicercaFiltrataUtenti([FromQuery] string? matricola, [FromQuery] string? codiceRuolo, [FromQuery] string? codiceRegione, [FromQuery] string? codiceSede)
        {
            var url = $"{_microserviceBaseUrl}/api/Utenti/contaRicercaFiltrataUtenti?matricola={matricola}&codiceRuolo={codiceRuolo}&codiceRegione={codiceRegione}&codiceSede={codiceSede}";
            var response = await _httpClient.GetAsync(url);

            return await ConvertResponse(response);
        }

        // GET: ricercaFiltrataUtenti
        [HttpGet("ricercaFiltrataUtenti")]
        public async Task<IActionResult> RicercaFiltrataUtenti([FromQuery] int? quantita, [FromQuery] int? pagina, [FromQuery] string? ordinamentoColonna, [FromQuery] string? matricola, [FromQuery] string? codiceRuolo, [FromQuery] string? codiceRegione, [FromQuery] string? codiceSede)
        {
            var url = $"{_microserviceBaseUrl}/api/Utenti/ricercaFiltrataUtenti?quantita={quantita}&pagina={pagina}&ordinamentoColonna={ordinamentoColonna}&matricola={matricola}&codiceRuolo={codiceRuolo}&codiceRegione={codiceRegione}&codiceSede={codiceSede}";
            var response = await _httpClient.GetAsync(url);

            return await ConvertResponse(response);
        }

        // GET: getAllRuoli
        [HttpGet("getAllRuoli")]
        public async Task<IActionResult> GetAllRuoli()
        {
            var url = $"{_microserviceBaseUrl}/api/Utenti/getAllRuoli";
            var response = await _httpClient.GetAsync(url);

            return await ConvertResponse(response);
        }

        // Metodo di supporto per gestire le risposte
        private async Task<IActionResult> ConvertResponse(HttpResponseMessage response)
        {
            var content = await response.Content.ReadAsStringAsync();
            return response.IsSuccessStatusCode ? Ok(content) : StatusCode((int)response.StatusCode, content);
        }
    }
}
