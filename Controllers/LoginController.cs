using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using System.Text.RegularExpressions;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [ApiController]
    [Route("microgateway/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly IHttpContextAccessor httpContextAccessor;

        public LoginController(IHttpContextAccessor httpContextAccessor)
        {
            this.httpContextAccessor = httpContextAccessor;
        }

        /// <summary>
        /// Recupera le informazioni dell'utente loggato dagli header HTTP.
        /// </summary>
        /// <returns>Informazioni utente o errore in caso di dati mancanti.</returns>
        [HttpGet("WhoAmI")]
        public IActionResult WhoAmI()
        {
            try
            {
                var http = httpContextAccessor.HttpContext;

                // Recupero gli header HTTP
                var headers = http.Request.Headers;

                string firstName, lastName, account, matricula, fiscalCode, inpsRuoli;

                // Verifica se l'header 'INPS-NOME' è presente
                if (!StringValues.IsNullOrEmpty(headers["INPS-NOME"]))
                {
                    // Recupera tutti i valori dagli header HTTP
                    firstName = headers["INPS-NOME"];
                    lastName = headers["INPS-COGNOME"];
                    account = headers["INPS-ACCOUNT-WINDOWS"];
                    matricula = headers["INPS-MATRICOLA"];
                    fiscalCode = headers["INPS-CODICE-FISCALE"];
                    inpsRuoli = headers["INPS-RUOLI"];
                }
                else
                {
                    // Assegna valori di default
                    firstName = "DefaultNome";
                    lastName = "DefaultCognome";
                    account = "Username";
                    matricula = "E000-123";
                    fiscalCode = "DefaultFiscalCode";
                    inpsRuoli = "cn=A8006:P12689,dc=inps,dc=it|cn=A8006:P12801:050000,dc=inps,dc=it|cn=A8006:P12801:500000,dc=inps,dc=it|cn=A8006:P12801:040000,dc=inps,dc=it|cn=A8006:P12801:700000,dc=inps,dc=it|cn=A8006:P12799:818000,dc=inps,dc=it|cn=A8006:P12800,dc=inps,dc=it|";
                }

                // Validazione header
                if (string.IsNullOrEmpty(account))
                {
                    return BadRequest(new { Message = "Header 'INPS-ACCOUNT-WINDOWS' mancante." });
                }

                if (string.IsNullOrEmpty(inpsRuoli))
                {
                    return BadRequest(new { Message = "Nessun ruolo trovato nei dati dell'utente." });
                }

                // Dizionario per descrizioni dei ruoli
                var roleDescriptions = new Dictionary<string, string>
                {
                    { "P12689", "Amministratore" },
                    { "P12690", "Referente Centrale" },
                    // { "P12690", "Operatore Centrale Amministrativo" },
                    { "P12800", "Operatore Centrale" },
                    // { "P12800", "Operatore Centrale Informatico" },
                    { "P12801", "Referente Territoriale" },
                    // { "P12801", "Operatore Territoriale di Provincia" },
                    { "P12799", "Referente Regionale" }
                    // { "P12799", "Operatore Territoriale Regionale" }
                };

                // Costruisco l'oggetto utente
                var user = new IdmId
                {
                    FirstName = firstName,
                    LastName = lastName,
                    WindowsAccount = account,
                    Matricula = matricula,
                    FiscalCode = fiscalCode,
                    appRoles = new List<string>(),
                    CodiceSede = new List<string>()
                };

                // Elaboro i ruoli
                string[] ruoli = inpsRuoli.TrimEnd('|').Split('|');
                foreach (string ruolo in ruoli)
                {
                    if (ruolo.Contains("A8006"))
                    {
                        Regex roleRegex = new Regex(@"cn=A8006:(?<role>[^:,]+)(:(?<sede>[^,]+))?", RegexOptions.Compiled);
                        Match match = roleRegex.Match(ruolo);

                        if (match.Success)
                        {
                            string role = match.Groups["role"].Value;
                            string description = roleDescriptions.ContainsKey(role) ? roleDescriptions[role] : "";

                            if (!string.IsNullOrEmpty(role))
                            {
                                string roleWithDescription = $"{role} : {description}";
                                if (!user.appRoles.Contains(roleWithDescription))
                                {
                                    user.appRoles.Add(roleWithDescription);
                                }
                            }

                            string sede = match.Groups["sede"].Value;
                            if (!string.IsNullOrEmpty(sede))
                            {
                                // Formatta la sede come "sedecodice : ruoloAssociato"
                                string sedeFormatted = $"{sede} : {role}";
                                if (!user.CodiceSede.Contains(sedeFormatted))
                                {
                                    user.CodiceSede.Add(sedeFormatted);
                                }
                            }
                        }
                    }
                }

                if (!user.appRoles.Any())
                {
                    return BadRequest(new { Message = "Nessun ruolo valido trovato per l'utente." });
                }

                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Errore interno del server: " + ex.Message);
            }
        }

        /// <summary>
        /// Modello per l'oggetto IdmId.
        /// </summary>
        public class IdmId
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string WindowsAccount { get; set; }
            public string Matricula { get; set; }
            public string FiscalCode { get; set; }
            public List<string> appRoles { get; set; }
            public List<string> CodiceSede { get; set; }
            public string OfficeSapCode { get; set; }
        }
    }
}