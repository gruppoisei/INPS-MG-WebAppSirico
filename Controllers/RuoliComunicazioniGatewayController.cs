using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class RuoliComunicazioniGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public RuoliComunicazioniGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        /// <summary>
        /// Inoltra la richiesta al microservizio per inserire ruoli comunicazioni
        /// </summary>
        [HttpPost("InsertRuoliComunicazioni")]
        public async Task<IActionResult> InsertRuoliComunicazioni([FromBody] List<RuoliComunicazioniDTO> ruoliComunicazioni)
        {
            var json = JsonSerializer.Serialize(ruoliComunicazioni);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/RuoliComunicazioni/InsertRuoliComunicazioni", content);
            return await HandleResponse(response);
        }

        /// <summary>
        /// Inoltra la richiesta per eliminare ruoli comunicazioni
        /// </summary>
        [HttpDelete("EliminaRuoliComunicazione")]
        public async Task<IActionResult> DeleteRuoliComunicazioni([FromBody] List<RuoliComunicazioniDTO> ruoliComunicazioni)
        {
            var json = JsonSerializer.Serialize(ruoliComunicazioni);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var request = new HttpRequestMessage(HttpMethod.Delete, $"{_microserviceBaseUrl}/api/RuoliComunicazioni/EliminaRuoliComunicazione")
            {
                Content = content
            };

            var response = await _httpClient.SendAsync(request);
            return await HandleResponse(response);
        }

        /// <summary>
        /// Ottiene i ruoli associati a una comunicazione tramite ID
        /// </summary>
        [HttpGet("GetRuoliByComunicazioneId/{id}")]
        public async Task<IActionResult> GetRuoliByComunicazioneId(long id)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/RuoliComunicazioni/GetRuoliByComunicazioneId/{id}");
            return await HandleResponse(response);
        }

        /// <summary>
        /// Ottiene le comunicazioni filtrate per ruolo e matricola
        /// </summary>
        [HttpGet("GetComunicazioniNonLetteByRuoloAndMatricola")]
        public async Task<IActionResult> GetComunicazioniFilterByRuoloAndMatricola([FromQuery] string ruoli, [FromQuery] string matricola)
        {
            var url = $"{_microserviceBaseUrl}/api/RuoliComunicazioni/GetComunicazioniNonLetteByRuoloAndMatricola?ruoli={ruoli}&matricola={matricola}";
            Console.WriteLine("url: " + url);
            var response = await _httpClient.GetAsync(url);
            return await HandleResponse(response);
        }

        //private async Task<IActionResult> HandleResponse(HttpResponseMessage response)
        //{
        //    var responseContent = await response.Content.ReadAsStringAsync();

        //    if (response.IsSuccessStatusCode)
        //    {
        //        return Ok(JsonSerializer.Deserialize<object>(responseContent));
        //    }

        //    return StatusCode((int)response.StatusCode, responseContent);
        //}

        private async Task<IActionResult> HandleResponse(HttpResponseMessage response)
        {
            if (response.IsSuccessStatusCode)
            {
                var responseData = await response.Content.ReadAsStringAsync();
                return Content(responseData, "application/json");
            }
            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }


    }    
}

public class RuoliComunicazioniDTO
{
    public long Id { get; set; }
    public DateTime Creato { get; set; }
    public DateTime Aggiornato { get; set; }
    public long IdComunicazione { get; set; }
    public string Ruolo { get; set; } = null!;
}
