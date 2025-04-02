using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class AccountGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public AccountGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        private void ForwardHeaders(HttpRequest request, HttpRequestMessage httpRequestMessage)
        {
            foreach (var header in request.Headers)
            {
                if (!httpRequestMessage.Headers.Contains(header.Key))
                {
                    httpRequestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());
                }
            }
        }

        private async Task<IActionResult> ForwardRequest(string endpoint)
        {
            try
            {
                var requestMessage = new HttpRequestMessage(HttpMethod.Get, endpoint);
                ForwardHeaders(Request, requestMessage);

                var response = await _httpClient.SendAsync(requestMessage);

                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadAsStringAsync();
                    return Content(result, response.Content.Headers.ContentType?.ToString());
                }

                return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("GetUtenteLoggatoByUsername/{loginUsername}")]
        public Task<IActionResult> GetUtenteLoggatoByUsername(string loginUsername)
        {
            string targetUrl = $"https://{_microserviceBaseUrl}/api/Account/GetUtenteLoggatoByUsername/{loginUsername}";
            return ForwardRequest(targetUrl);
        }

        [HttpGet("GetStringaIDM")]
        public Task<IActionResult> GetStringaIDM([FromQuery] string username)
        {
            string targetUrl = $"https://{_microserviceBaseUrl}/api/Account/GetStringaIDM?username={username}";
            return ForwardRequest(targetUrl);
        }

        [HttpGet("ControlloLoginIDM")]
        public Task<IActionResult> ControlloLoginIDM([FromQuery] string stringaUtenteIDM, [FromQuery] string username)
        {
            string targetUrl = $"https://{_microserviceBaseUrl}/api/Account/ControlloLoginIDM?stringaUtenteIDM={stringaUtenteIDM}&username={username}";
            return ForwardRequest(targetUrl);
        }
    }
}
