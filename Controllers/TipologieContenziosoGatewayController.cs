using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class TipologieContenziosoGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public TipologieContenziosoGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetAllTipologieContenzioso()
        {
            try
            {
                // Inoltriamo la richiesta al microservizio
                var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/TipologieContenzioso/getAll");

                // Verifica se la risposta è OK
                if (response.IsSuccessStatusCode)
                {
                    var data = await response.Content.ReadAsStringAsync();
                    return Content(data, "application/json");
                }
                else
                {
                    return StatusCode((int)response.StatusCode, "Errore dal microservizio");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Errore interno: {ex.Message}");
            }
        }
    }
}
