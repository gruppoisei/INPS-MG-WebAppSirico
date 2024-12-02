using Microsoft.AspNetCore.Mvc;
namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateaway/[controller]")]
    [ApiController]
    public class HeadersController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public HeadersController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet("ForwardHeaders")]
        public async Task<IActionResult> ForwardHeaders()
        {
            string microservice_sirico = Environment.GetEnvironmentVariable("MS_SIRICOAPI");
            try
            {

                //Estraggo gli headers dalla richiesta che mi arriva dal frontend (browser)
                var firstName = Request.Headers["INPS-NOME"].ToString();
                var lastName = Request.Headers["INPS-COGNOME"].ToString();
                var windowsAccount = Request.Headers["INPS-ACCOUNT-WINDOWS"].ToString();
                var matricola = Request.Headers["INPS-MATRICOLA"].ToString();
                var emailAddress = Request.Headers["INPS-EMAIL"].ToString();
                var inpsRuoli = Request.Headers["INPS-RUOLI"].ToString();

                //Preparo la richiesta da mandare al microservizio
                var client = _httpClientFactory.CreateClient();
                var requestMessage = new HttpRequestMessage(HttpMethod.Get, $"{ microservice_sirico }Account/GetUtenteLoggato");

                //Aggiungere gli stessi headers alla richiesta al microservizio
                requestMessage.Headers.Add("INPS-NOME", firstName);
                requestMessage.Headers.Add("INPS-COGNOME", lastName);
                requestMessage.Headers.Add("INPS-ACCOUNT-WINDOWS", windowsAccount);
                requestMessage.Headers.Add("INPS-MATRICOLA", matricola);
                requestMessage.Headers.Add("INPS-EMAIL", emailAddress);
                requestMessage.Headers.Add("INPS-RUOLI", inpsRuoli);

                var response = await client.SendAsync(requestMessage);

                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadAsStringAsync();
                    return Ok(result);
                }
                else
                {
                    // Gestisci eventuali errori
                    return StatusCode((int)response.StatusCode, "Errore nel microservizio.");
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }

        }
    }
}
