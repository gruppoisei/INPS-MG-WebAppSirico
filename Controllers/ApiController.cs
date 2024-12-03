using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

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
        var backendUrl = $"http://localhost:5250/api/{path}{Request.QueryString}";

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
        var content = await response.Content.ReadAsStringAsync();

        return new ContentResult
        {
            StatusCode = (int)response.StatusCode,
            Content = content,
            ContentType = response.Content.Headers.ContentType?.ToString()
        };
    }

    // Endpoint per POST, PUT, DELETE, PATCH
    [HttpPost]
    [HttpPut]
    [HttpDelete]
    [HttpPatch]
    public async Task<IActionResult> HandleOtherRequests(string path)
    {
        var backendUrl = $"http://192.0.2.147:5000/api/{path}";

        var client = _httpClientFactory.CreateClient();

        var requestMessage = new HttpRequestMessage
        {
            Method = new HttpMethod(Request.Method),
            RequestUri = new Uri(backendUrl)
        };

        // Copia degli header dalla richiesta originale
        foreach (var header in Request.Headers)
        {
            requestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());
        }

        // Se la richiesta contiene un body, lo copiamo
        if (Request.ContentLength > 0)
        {
            using var memoryStream = new MemoryStream();
            await Request.Body.CopyToAsync(memoryStream);
            memoryStream.Seek(0, SeekOrigin.Begin);

            // Determina se il Content-Type è FormBody
            if (Request.ContentType == "application/x-www-form-urlencoded")
            {
                var formBody = Encoding.UTF8.GetString(memoryStream.ToArray());
                requestMessage.Content = new StringContent(formBody, Encoding.UTF8, "application/x-www-form-urlencoded");
            }
            else
            {
                // Per altri tipi di contenuto, usa lo StreamContent
                var streamContent = new StreamContent(memoryStream);

                foreach (var header in Request.Headers)
                {
                    if (header.Key.StartsWith("Content-", StringComparison.OrdinalIgnoreCase))
                    {
                        streamContent.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());
                    }
                }

                requestMessage.Content = streamContent;
            }
        }

        // Invio della richiesta al backend
        var response = await client.SendAsync(requestMessage);

        // Costruzione della risposta da ritornare al client
        var content = await response.Content.ReadAsStringAsync();
        return new ContentResult
        {
            StatusCode = (int)response.StatusCode,
            Content = content,
            ContentType = response.Content.Headers.ContentType?.ToString()
        };
    }
}
