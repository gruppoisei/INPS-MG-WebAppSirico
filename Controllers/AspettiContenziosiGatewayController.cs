using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace INPS_MVC_WebAppSirico.Controllers
{

    [Route("microgateway/[controller]")]
    [ApiController]
    public class AspettiContenziosiGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public AspettiContenziosiGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetAll()
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/AspettiContenziosi/getAll");
            //return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
            return await HandleResponse(response);
        }

        [HttpGet("getByNome/{nome}")]
        public async Task<IActionResult> GetByNome(string nome)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/AspettiContenziosi/getByNome/{nome}");
            //return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
            return await HandleResponse(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteById(long id)
        {
            var response = await _httpClient.DeleteAsync($"{_microserviceBaseUrl}/api/AspettiContenziosi/{id}");
            //return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
            return await HandleResponse(response);
        }

        [HttpPut("ConfermaAspetto")]
        public async Task<IActionResult> ConfermaAspetto([FromBody] long idAspetto)
        {
            var content = new StringContent(idAspetto.ToString(), Encoding.UTF8, "application/json");
            var response = await _httpClient.PutAsync($"{_microserviceBaseUrl}/api/AspettiContenziosi/ConfermaAspetto", content);
            //return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
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