using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
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

    [HttpGet]
    [HttpPost]
    [HttpPut]
    [HttpDelete]
    [HttpPatch]
    public async Task<IActionResult> HandleRequest(string path)
    {
        // Costruisci l'URL del backend
        var backendUrl = $"http://192.0.2.147:5000/api/{path}{Request.QueryString}";

        // Crea un client HTTP
        var client = _httpClientFactory.CreateClient();

        // Crea una richiesta HTTP basata sulla richiesta originale
        var requestMessage = new HttpRequestMessage
        {
            Method = new HttpMethod(Request.Method),
            RequestUri = new Uri(backendUrl)
        };

        // Copia gli header dalla richiesta originale
        foreach (var header in Request.Headers)
        {
            requestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());
        }

        // Copia il contenuto se presente
        if (Request.ContentLength > 0 && (Request.Method == HttpMethod.Post.Method || Request.Method == HttpMethod.Put.Method || Request.Method == HttpMethod.Patch.Method))
        {
            using var stream = new MemoryStream();
            await Request.Body.CopyToAsync(stream);
            stream.Seek(0, SeekOrigin.Begin);
            requestMessage.Content = new StreamContent(stream);
            foreach (var header in Request.Headers)
            {
                if (!header.Key.StartsWith("Content-", StringComparison.OrdinalIgnoreCase)) continue;
                requestMessage.Content.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());
            }
        }

        // Invia la richiesta al backend
        var response = await client.SendAsync(requestMessage);

        // Costruisci la risposta per il client
        var content = await response.Content.ReadAsStringAsync();
        return new ContentResult
        {
            StatusCode = (int)response.StatusCode,
            Content = content,
            ContentType = response.Content.Headers.ContentType?.ToString()
        };
    }
}
