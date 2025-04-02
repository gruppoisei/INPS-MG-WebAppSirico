using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace INPS_MVC_WebAppSirico.Controllers
{

    [Route("microgateway/[controller]")]
    [ApiController]
    public class AspettiProdottiGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public AspettiProdottiGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetAllAspettiProdotti()
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/AspettiProdotti/getAll");
            return await HandleResponse(response);
        }

        [HttpGet("getByNome/{nome}")]
        public async Task<IActionResult> GetByNomeAspetto(string nome)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/AspettiProdotti/getByNome/{nome}");
            return await HandleResponse(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAspetto(long id)
        {
            var response = await _httpClient.DeleteAsync($"{_microserviceBaseUrl}/api/AspettiProdotti/{id}");
            return await HandleResponse(response);
        }

        [HttpPut("ConfermaAspetto")]
        public async Task<IActionResult> ConfermaAspetto([FromBody] long idAspetto)
        {
            var content = new StringContent(idAspetto.ToString(), System.Text.Encoding.UTF8, "application/json");
            var response = await _httpClient.PutAsync($"{_microserviceBaseUrl}/api/AspettiProdotti/ConfermaAspetto", content);
            return await HandleResponse(response);
        }

        // Funzione di gestione delle risposte HTTP
        private async Task<IActionResult> HandleResponse(HttpResponseMessage response)
        {
            if (response.IsSuccessStatusCode)
            {
                var result = await response.Content.ReadAsStringAsync();
                return Ok(result);
            }
            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }
    }
}