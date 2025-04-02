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
    public class TerritorioGatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _microserviceBaseUrl;

        public TerritorioGatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _microserviceBaseUrl = configuration["MS_SiricoGatewayClient"];
        }

        [HttpGet("getAllSediSorted")]
        public async Task<IActionResult> GetAllSedi()
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Territorio/getAllSediSorted");
            return await HandleResponse(response);
        }

        [HttpGet("getSediSortedRegione/{regCodSede}")]
        public async Task<IActionResult> GetSediByRegCodSede(string regCodSede)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Territorio/getSediSortedRegione/{regCodSede}");
            return await HandleResponse(response);
        }

        [HttpGet("getSediSortedProvincia/{provCodSede}")]
        public async Task<IActionResult> GetSediByProvCodSede(string provCodSede)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Territorio/getSediSortedProvincia/{provCodSede}");
            return await HandleResponse(response);
        }

        [HttpGet("getAllRegioniSorted")]
        public async Task<IActionResult> GetAllRegioniSorted()
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Territorio/getAllRegioniSorted");
            return await HandleResponse(response);
        }

        [HttpGet("getAllProvinceSorted")]
        public async Task<IActionResult> GetAllProvinceSorted()
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Territorio/getAllProvinceSorted");
            return await HandleResponse(response);
        }

        [HttpGet("getRegioneByCodSede/{codSede}")]
        public async Task<IActionResult> GetRegioneByCodSede(string codSede)
        {
            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Territorio/getRegioneByCodSede/{codSede}");
            return await HandleResponse(response);
        }

        [HttpGet("VerificaSediIntegrazioneRegionale")]
        public async Task<IActionResult> VerificaSediIntegrazioneRegionale([FromQuery] string descSedeSegnalazione, [FromQuery] List<string> sediUtente)
        {
            var queryString = $"descSedeSegnalazione={descSedeSegnalazione}";
            foreach (var sede in sediUtente)
            {
                queryString += $"&sediUtente={sede}";
            }

            var response = await _httpClient.GetAsync($"{_microserviceBaseUrl}/api/Territorio/VerificaSediIntegrazioneRegionale?{queryString}");
            return await HandleResponse(response);
        }

        [HttpPost("GetSedeDescriptions")]
        public async Task<IActionResult> GetSedeDescriptions([FromBody] string[] codiciSede)
        {
            var content = new StringContent(JsonSerializer.Serialize(codiciSede), System.Text.Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync($"{_microserviceBaseUrl}/api/Territorio/GetSedeDescriptions", content);
            return await HandleResponse(response);
        }

        private async Task<IActionResult> HandleResponse(HttpResponseMessage response)
        {
            var responseContent = await response.Content.ReadAsStringAsync();

            if (response.IsSuccessStatusCode)
            {
                return Ok(JsonSerializer.Deserialize<object>(responseContent));
            }

            return StatusCode((int)response.StatusCode, responseContent);
        }
    }
}
