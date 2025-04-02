using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class TipiComunicazioniGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public TipiComunicazioniGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        [HttpGet("GetAllTipoComunicazioni")]
        public async Task<IActionResult> GetAllTipoComunicazioni()
        {
            try
            {
                var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/TipiComunicazioni/GetAllTipoComunicazioni");

                if (!response.IsSuccessStatusCode)
                {
                    return StatusCode((int)response.StatusCode, "Errore nella chiamata al microservizio");
                }

                var jsonString = await response.Content.ReadAsStringAsync();
                var tipiComunicazioni = JsonSerializer.Deserialize<IEnumerable<TipiComunicazioniDTO>>(jsonString, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                return Ok(tipiComunicazioni);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Errore interno: {ex.Message}");
            }
        }
    }

    public class TipiComunicazioniDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descrizione { get; set; }
    }
}
