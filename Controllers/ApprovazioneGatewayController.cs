using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Microgateway.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class ApprovazioneGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public ApprovazioneGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        /// <summary>
        /// Endpoint per ottenere le segnalazioni da confermare
        /// </summary>
        [HttpGet("getSegnalazioniDaConfermare")]
        public async Task<IActionResult> GetSegnalazioniDaConfermare([FromQuery] int quantita = 20, [FromQuery] int pagina = 1, [FromQuery] string? ordineColonna = null)
        {
            try
            {
                var queryString = $"?quantita={quantita}&pagina={pagina}";
                if (!string.IsNullOrEmpty(ordineColonna))
                {
                    queryString += $"&ordineColonna={ordineColonna}";
                }

                var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Approvazione/getSegnalazioniDaConfermare{queryString}");

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    return Ok(content);
                }
                return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Errore interno: {ex.Message}");
            }
        }

        /// <summary>
        /// Endpoint per confermare le segnalazioni
        /// </summary>
        [HttpPost("confermaSegnalazioni")]
        public async Task<IActionResult> ConfermaSegnalazioni([FromBody] object segnalazioni)
        {
            try
            {
                var response = await _httpClient.PostAsJsonAsync($"{_microserviceBaseUrl}/api/Approvazione/confermaSegnalazioni", segnalazioni);

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    return Ok(content);
                }
                return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Errore interno: {ex.Message}");
            }
        }

        /// <summary>
        /// Ottiene il numero totale delle segnalazioni
        /// </summary>
        [HttpGet("count")]
        public async Task<IActionResult> GetSegnalazioniCount()
        {
            try
            {
                var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Approvazione/count");

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    return Ok(content);
                }
                return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Errore interno: {ex.Message}");
            }
        }
    }
}
