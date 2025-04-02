using Microsoft.AspNetCore.Mvc;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class NotificationHubGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public NotificationHubGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"]; // URL del microservizio NotificationHub
        }

        [HttpPost("SendNotificationCount")]
        public async Task<IActionResult> SendNotificationCount()
        {
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/Notification/SendNotificationCount", null);
            if (response.IsSuccessStatusCode)
                return Ok();

            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }

        [HttpPost("SendSegnalazioniLess30Days")]
        public async Task<IActionResult> SendSegnalazioniLess30Days()
        {
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/Notification/SendSegnalazioniLess30Days", null);
            if (response.IsSuccessStatusCode)
                return Ok();

            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }

        [HttpPost("SendSegnalazioniFrom30To45")]
        public async Task<IActionResult> SendSegnalazioniFrom30To45()
        {
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/Notification/SendSegnalazioniFrom30To45", null);
            if (response.IsSuccessStatusCode)
                return Ok();

            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }

        [HttpPost("SendSegnalazioniFrom45To60")]
        public async Task<IActionResult> SendSegnalazioniFrom45To60()
        {
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/Notification/SendSegnalazioniFrom45To60", null);
            if (response.IsSuccessStatusCode)
                return Ok();

            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }
    }
}