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

    [HttpPost]
    [HttpPut]
    [HttpDelete]
    [HttpPatch]
    public async Task<IActionResult> HandleOtherRequests(string path)
    {
        var backendUrl = $"http://localhost:5250/api/{path}";

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

        // Se la richiesta contiene un body, lo copiamo
        if (Request.ContentLength > 0)
        {
            try
            {
                // Rileggi il corpo della richiesta in modo sicuro
                var body = await new StreamReader(Request.Body).ReadToEndAsync();

                // Usa il contenuto letto per impostare il body della nuova richiesta
                requestMessage.Content = new StringContent(body, Encoding.UTF8, Request.ContentType ?? "application/json");

            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error reading or copying request body: {ex.Message}");
            }
        }

        try
        {
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
        catch (HttpRequestException ex)
        {
            return StatusCode(500, $"Error sending request: {ex.Message}");
        }
    }
}
