using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class SegnalazioniContenziosiGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public SegnalazioniContenziosiGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        // GET: contaRicercaContenziosi
        [HttpGet("contaRicercaContenziosi")]
        public async Task<IActionResult> ContaSegnalazioniContenziosi([FromQuery] long? settore, [FromQuery] long? area, [FromQuery] List<string>? sedi, [FromQuery] DateTime? dataInizio, [FromQuery] DateTime? dataFine, [FromQuery] int? idStatoSegnalazione, [FromQuery] int? idTipologiaContenzioso, [FromQuery] string? ruolo, [FromQuery] string? utenteLoggato, [FromQuery] string? sourceCall, [FromQuery] bool? sedeVuoto)
        {
            var queryString = HttpContext.Request.QueryString.Value; // Ottieni i parametri della query
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/SegnalazioniContenziosi/contaRicercaContenziosi{queryString}");

            return await HandleResponse(response);
        }

        // GET: getRicercaContenziosi
        [HttpGet("getRicercaContenziosi")]
        public async Task<IActionResult> GetSegnalazioniContenziosi([FromQuery] int quantita, [FromQuery] int pagina, [FromQuery] long? settore, [FromQuery] long? area, [FromQuery] List<string>? sedi, [FromQuery] DateTime? dataInizio, [FromQuery] DateTime? dataFine, [FromQuery] int? idStatoSegnalazione, [FromQuery] string? ruolo, [FromQuery] string? utenteLoggato, [FromQuery] string? ordineColonna, [FromQuery] int? idTipologiaContenzioso, [FromQuery] string sourceCall, [FromQuery] bool? sedeVuoto)
        {
            var queryString = HttpContext.Request.QueryString.Value;
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/SegnalazioniContenziosi/getRicercaContenziosi{queryString}");

            return await HandleResponse(response);
        }

        // POST: aggiorna-stato-segnalazione
        [HttpPost("aggiorna-stato-segnalazione")]
        public async Task<IActionResult> AggiornaStatoSegnalazione([FromQuery] int idSegnalazione, [FromQuery] int idStatoSegnalazione)
        {
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/SegnalazioniContenziosi/aggiorna-stato-segnalazione?idSegnalazione={idSegnalazione}&idStatoSegnalazione={idStatoSegnalazione}", null);

            return await HandleResponse(response);
        }

        // Metodo per gestire le risposte HTTP
        private async Task<IActionResult> HandleResponse(HttpResponseMessage response)
        {
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                return Content(content, response.Content.Headers.ContentType?.ToString() ?? "application/json");
            }
            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }
    }
}
