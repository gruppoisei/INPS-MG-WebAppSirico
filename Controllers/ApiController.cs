using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [ApiController]
    [Route("api/{*path}")]
    public class ApiGatewayController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public ApiGatewayController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        // Endpoint per richieste GET
        [HttpGet]
        public async Task<IActionResult> HandleGetRequest(string path)
        {
            var msurl = Environment.GetEnvironmentVariable("MS_SIRICOAPI");
            var backendUrl = $"{msurl}{path}{Request.QueryString}";

            var client = _httpClientFactory.CreateClient();

            var requestMessage = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri(backendUrl)
            };

            foreach (var header in Request.Headers)
            {
                requestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());
            }

            var response = await client.SendAsync(requestMessage);
            if(response.Content.Headers.ContentType?.MediaType == "application/octet-stream" || response.Content.Headers.ContentDisposition != null)
            {
                var fileBytes = await response.Content.ReadAsByteArrayAsync();
                var fileName = response.Content.Headers.ContentDisposition?.FileName?.Trim('"') ?? "file.bin";
                return File(fileBytes, response.Content.Headers.ContentType?.ToString() ?? "application/octet-stream", fileName);
            }
            else
            {
                var content = await response.Content.ReadAsStringAsync();

                return new ContentResult
                {
                    StatusCode = (int)response.StatusCode,
                    Content = content,
                    ContentType = response.Content.Headers.ContentType?.ToString()
                };
            }
        }

        [HttpPost]
        [HttpPut]
        [HttpDelete]
        [HttpPatch]
        public async Task<IActionResult> HandleOtherRequests(string path)
        {

            var msurl = Environment.GetEnvironmentVariable("MS_SIRICOAPI");
            var backendUrl = $"{msurl}{path}";

            var client = _httpClientFactory.CreateClient();

            // Creazione della richiesta da inoltrare
            var requestMessage = new HttpRequestMessage
            {
                Method = new HttpMethod(Request.Method),
                RequestUri = new Uri(backendUrl)
            };

            // Copia degli header dalla richiesta originale
            foreach (var header in Request.Headers)
            {
                if (!header.Key.Equals("Host", StringComparison.OrdinalIgnoreCase))
                {
                    requestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());
                }
            }

            // Copia del body della richiesta originale
            if (Request.ContentLength > 0 && Request.HasFormContentType)
            {
                var form = await Request.ReadFormAsync();
                var multipartContent = new MultipartFormDataContent();

                foreach (var file in form.Files)
                {
                    var streamContent = new StreamContent(file.OpenReadStream());
                    streamContent.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue(file.ContentType);
                    multipartContent.Add(streamContent, file.Name, file.FileName);
                }

                foreach (var key in form.Keys)
                {
                    multipartContent.Add(new StringContent(form[key]), key);
                }

                requestMessage.Content = multipartContent;
            }
            else if (Request.ContentLength > 0)
            {
                // Altri tipi di contenuto (JSON, text/plain, etc.)
                var body = await new StreamReader(Request.Body).ReadToEndAsync();
                requestMessage.Content = new StringContent(body, Encoding.UTF8, Request.ContentType ?? "application/json");
            }


            try
            {
                // Invio della richiesta al backend
                var response = await client.SendAsync(requestMessage);

                // Creazione della risposta per il client
                var responseContent = await response.Content.ReadAsStringAsync();
                return new ContentResult
                {
                    StatusCode = (int)response.StatusCode,
                    Content = responseContent,
                    ContentType = response.Content.Headers.ContentType?.ToString()
                };
            }
            catch (HttpRequestException ex)
            {
                return StatusCode(500, $"Error sending request: {ex.Message}");
            }
        }
    }
}