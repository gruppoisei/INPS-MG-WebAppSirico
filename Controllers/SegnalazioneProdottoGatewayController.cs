using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class SegnalazioneProdottoGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public SegnalazioneProdottoGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        [HttpGet("getRicerca")]
        public async Task<IActionResult> GetRicercaProdotto([FromQuery] int quantita, [FromQuery] int pagina, [FromQuery] long? settore, [FromQuery] long? area, 
            [FromQuery] List<string>? sedi, [FromQuery] DateTime? dataInizio, [FromQuery] DateTime? dataFine, [FromQuery] int? idStatoSegnalazione, [FromQuery] string? ruolo, 
            [FromQuery] string? utenteLoggato, [FromQuery] string? ordineColonna, [FromQuery] string sourceCall, [FromQuery] bool? sedeVuoto)
        {
            var queryParams = new List<string> 
            {
                $"quantita={quantita}",
                $"pagina={pagina}"
            };

            if (settore.HasValue) queryParams.Add($"settore={settore.Value}");
            if (area.HasValue) queryParams.Add($"area={area.Value}");
            if (dataInizio.HasValue) queryParams.Add($"dataInizio={dataInizio.Value:yyyy-MM-dd}");
            if (dataFine.HasValue) queryParams.Add($"dataFine={dataFine.Value:yyyy-MM-dd}");
            if (idStatoSegnalazione.HasValue) queryParams.Add($"idStatoSegnalazione={idStatoSegnalazione.Value}");
            if (!string.IsNullOrEmpty(ruolo)) queryParams.Add($"ruolo={ruolo}");
            if (!string.IsNullOrEmpty(utenteLoggato)) queryParams.Add($"utenteLoggato={utenteLoggato}");
            if (!string.IsNullOrEmpty(ordineColonna)) queryParams.Add($"ordineColonna={ordineColonna}");
            if (!string.IsNullOrEmpty(sourceCall)) queryParams.Add($"sourceCall={sourceCall}");
            if (sedeVuoto.HasValue) queryParams.Add($"sedeVuoto={sedeVuoto.Value.ToString().ToLower()}");

            if (sedi != null && sedi.Count > 0)
            {
                foreach (var sede in sedi)
                {
                    queryParams.Add($"sedi={Uri.EscapeDataString(sede)}");
                }
            }

            string queryString = string.Join("&", queryParams);
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/SegnalazioneProdotto/getRicerca?{queryString}");

            var content = await response.Content.ReadAsStringAsync();
            return Content(content, response.Content.Headers.ContentType?.ToString());
        }

        [HttpGet("contaRicerca")]
        public async Task<IActionResult> ContaRicercaProdotto([FromQuery] long? settore, [FromQuery] long? area, [FromQuery] List<string>? sedi, [FromQuery] DateTime? dataInizio,
            [FromQuery] DateTime? dataFine, [FromQuery] int? idStatoSegnalazione, [FromQuery] string? ruolo, [FromQuery] string? utenteLoggato, [FromQuery] string? sourceCall,
            [FromQuery] bool? sedeVuoto)
        {
            var queryParams = new List<string>();

            if (settore.HasValue) queryParams.Add($"settore={settore}");
            if (area.HasValue) queryParams.Add($"area={area}");
            if (dataInizio.HasValue) queryParams.Add($"dataInizio={dataInizio.Value:yyyy-MM-dd}");
            if (dataFine.HasValue) queryParams.Add($"dataFine={dataFine.Value:yyyy-MM-dd}");
            if (idStatoSegnalazione.HasValue) queryParams.Add($"idStatoSegnalazione={idStatoSegnalazione}");
            if (!string.IsNullOrEmpty(ruolo)) queryParams.Add($"ruolo={Uri.EscapeDataString(ruolo)}");
            if (!string.IsNullOrEmpty(utenteLoggato)) queryParams.Add($"utenteLoggato={Uri.EscapeDataString(utenteLoggato)}");
            if (!string.IsNullOrEmpty(sourceCall)) queryParams.Add($"sourceCall={Uri.EscapeDataString(sourceCall)}");
            if (sedeVuoto.HasValue) queryParams.Add($"sedeVuoto={sedeVuoto.Value.ToString().ToLower()}");

            if (sedi != null && sedi.Count > 0)
            {
                foreach (var sede in sedi)
                {
                    queryParams.Add($"sedi={Uri.EscapeDataString(sede)}");
                }
            }

            string queryString = string.Join("&", queryParams);
            string fullUrl = $"{_microserviceBaseUrl}/api/SegnalazioneProdotto/contaRicerca?{queryString}";

            var response = await _httpClient.GetAsync(fullUrl);
            var content = await response.Content.ReadAsStringAsync();

            return Content(content, response.Content.Headers.ContentType?.ToString());
        }

        [HttpPost("aggiorna-stato-segnalazione")]
        public async Task<IActionResult> AggiornaStatoSegnalazioneAsync([FromQuery] int idSegnalazione, [FromQuery] int idStatoSegnalazione)
        {
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/SegnalazioneProdotto/aggiorna-stato-segnalazione?idSegnalazione={idSegnalazione}&idStatoSegnalazione={idStatoSegnalazione + 1}", null);

            var content = await response.Content.ReadAsStringAsync();
            return Content(content, response.Content.Headers.ContentType?.ToString());
        }
    }
}
