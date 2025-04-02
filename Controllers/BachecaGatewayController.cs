using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text;
using System.Text.Json;

namespace INPS_MVC_WebAppSirico.Controllers
{

    [Route("microgateway/[controller]")]
    [ApiController]
    public class BachecaGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public BachecaGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        [HttpGet("contaMessaggi")]
        public async Task<IActionResult> ContaMessaggi([FromQuery] bool visibilita)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Bacheca/contaMessaggi?visibilita={visibilita}");
            return await HandleResponse(response);
        }

        [HttpGet("getAllMessaggi")]
        public async Task<IActionResult> GetAllMessaggi([FromQuery] int? quantita, [FromQuery] int? pagina, [FromQuery] string? ordinamentoColonna, [FromQuery] bool? visibilita)
        {
            var url = $"{_microserviceBaseUrl}/api/Bacheca/getAllMessaggi?quantita={quantita}&pagina={pagina}&ordinamentoColonna={ordinamentoColonna}&visibilita={visibilita}";
            var response = await _httpClient.GetAsync(url);
            return await HandleResponse(response);
        }

        [HttpPost("insertMessaggio")]
        public async Task<IActionResult> InsertMessaggio([FromBody] object data)
        {
            var content = new StringContent(JsonSerializer.Serialize(data), Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/Bacheca/insertMessaggio", content);
            return await HandleResponse(response);
        }

        [HttpPut("updateMessaggioAttivo")]
        public async Task<IActionResult> UpdateMessaggioAttivo([FromBody] object data)
        {
            var content = new StringContent(JsonSerializer.Serialize(data), Encoding.UTF8, "application/json");
            var response = await _httpClient.PutAsync($"{_microserviceBaseUrl}/api/Bacheca/updateMessaggioAttivo", content);
            return await HandleResponse(response);
        }

        [HttpGet("disattivaMessaggio")]
        public async Task<IActionResult> DisattivaMessaggio([FromQuery] int idMessaggio)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Bacheca/disattivaMessaggio?idMessaggio={idMessaggio}");
            return await HandleResponse(response);
        }

        [HttpGet("riattivaMessaggio")]
        public async Task<IActionResult> RiattivaMessaggio([FromQuery] int idMessaggio)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Bacheca/riattivaMessaggio?idMessaggio={idMessaggio}");
            return await HandleResponse(response);
        }

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
