using Microsoft.AspNetCore.Mvc;
using INPS_MVC_WebAppSirico.Services;

namespace INPS_MVC_WebAppSirico.Controllers
{
    [Route("microgateway/[controller]")]
    [ApiController]
    public class DocumentiController : ControllerBase
    {

        private readonly DocumentiService documentiService;

        public DocumentiController(DocumentiService documentiService)
        {
            this.documentiService = documentiService;
        }

        [HttpGet("GetFileSegnalazioneById")]
        public async Task<IActionResult> GetFileSegnalazioneProdottiById(long id, string tipoSegnalazione, string? ruolo)
        {
            try
            {
                if (tipoSegnalazione == "Prodotto")
                {
                    var (fileBytes, fileName) = await documentiService.GetFileSegnalazioneByIdAsync(id, "CARTELLA_PRODOTTI_DATI_GENERALI", ruolo);
                    return File(new MemoryStream(fileBytes), "application/octet-stream", fileName);
                }
                else if (tipoSegnalazione == "Contenzioso")
                {
                    var (fileBytes, fileName) = await documentiService.GetFileSegnalazioneByIdAsync(id, "CARTELLA_CONTENZIOSI_DATI_GENERALI", ruolo);
                    return File(new MemoryStream(fileBytes), "application/octet-stream", fileName);
                }
                return NoContent();
            }
            catch (FileNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (DirectoryNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Errore interno del server: {ex.Message}");
            }
        }

        [HttpGet("GetFileAspettoById")]
        public async Task<IActionResult> GetFileAspettoProdottoById(long idSegnalazione, long idAspetto, string tipoSegnalazione, string? ruolo)
        {
            try
            {
                if (tipoSegnalazione == "Prodotto")
                {
                    var (fileBytes, fileName) = await documentiService.GetFileAspettoByIdAsync(idSegnalazione, idAspetto, "CARTELLA_PRODOTTI_CRITICITA", ruolo);
                    return File(new MemoryStream(fileBytes), "application/octet-stream", fileName);
                }
                else if (tipoSegnalazione == "Contenzioso")
                {
                    var (fileBytes, fileName) = await documentiService.GetFileAspettoByIdAsync(idSegnalazione, idAspetto, "CARTELLA_CONTENZIOSI_CRITICITA", ruolo);
                    return File(new MemoryStream(fileBytes), "application/octet-stream", fileName);
                }
                return NoContent();
            }
            catch (FileNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (DirectoryNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Errore interno del server: {ex.Message}");
            }
        }

        [HttpGet("FindAllegatoSegnalazione/{idSegnalazione}")]
        public async Task<IActionResult> FindAllegatoSegnalazione(long idSegnalazione, string? ruolo, string tipoSegnalazione)
        {
            try
            {
                if (tipoSegnalazione == "Prodotto")
                {
                    bool fileExist = await documentiService.FindAllegatoSegnalazioneAsync(idSegnalazione, ruolo, "CARTELLA_PRODOTTI_DATI_GENERALI");
                    return Ok(new { esito = fileExist });
                }
                else if (tipoSegnalazione == "Contenzioso")
                {
                    bool fileExist = await documentiService.FindAllegatoSegnalazioneAsync(idSegnalazione, ruolo, "CARTELLA_CONTENZIOSI_DATI_GENERALI");
                    return Ok(new { esito = fileExist });
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        [HttpGet("FindAllegatoAspetto")]
        public async Task<IActionResult> FindAllegatoSegnalazione(long idSegnalazione, long idAspetto, string ruolo, string tipoSegnalazione)
        {
            try
            {
                if (tipoSegnalazione == "Prodotto")
                {
                    bool fileExist = await documentiService.FindAllegatoAspettoAsync(idSegnalazione, idAspetto, ruolo, "CARTELLA_PRODOTTI_CRITICITA");
                    return Ok(new { esito = fileExist });
                }
                else if (tipoSegnalazione == "Contenzioso")
                {
                    bool fileExist = await documentiService.FindAllegatoAspettoAsync(idSegnalazione, idAspetto, ruolo, "CARTELLA_CONTENZIOSI_CRITICITA");
                    return Ok(new { esito = fileExist });
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        [HttpGet("FindAllegatoAspetti")]
        public async Task<IActionResult> FindAllegatoAspetti(long idSegnalazione, [FromQuery] List<long> idAspetti, string? ruolo, string tipoSegnalazione)
        {
            try
            {
                if (tipoSegnalazione == "Prodotto")
                {
                    var risultati = await documentiService.FindAllegatoAspettiAsync(idSegnalazione, idAspetti, ruolo, "CARTELLA_PRODOTTI_CRITICITA");
                    return Ok(risultati);
                }
                else if (tipoSegnalazione == "Contenzioso")
                {
                    var risultati = await documentiService.FindAllegatoAspettiAsync(idSegnalazione, idAspetti, ruolo, "CARTELLA_CONTENZIOSI_CRITICITA");
                    return Ok(risultati);
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        [HttpPost("VerificaAggiungiAllegato")]
        public async Task<IActionResult> VerificaAggiungiAllegato(IFormFile file)
        {
            try
            {
                VerificaAllegatoDTO res = documentiService.VerificaAggiungiAllegato(file);
                if (res.TipoAllegatoValido is false)
                {
                    return BadRequest(new
                    {
                        Message = "Il formato del file non è supportato.<br> " + 
                        "Tipo Estensione: " + res.tipoEstensione + "<br> " + 
                        " Assicurati che il file sia in uno dei seguenti formati: .doc, .docx, .xls, .xlsx, .pdf, .jpeg, .jpg, .bmp, .png."
                    });
                }
                if (res.DimensioneAllegatoValida is false)
                {
                    return BadRequest(new
                    {
                        Message = "Le dimensioni del file superano il limite massimo di 5MB.<br>" +
                        "Carica un file con dimensioni inferiori o pari a 5MB e riprova."
                    });
                }
                if (res.FormatoAllegatoValido is false)
                {
                    return BadRequest(new
                    {
                        Message = "Il formato del file non è valido.<br>" +
                        "Assicurati che sia un file genuino nei formati supportati: .doc, .docx, .xls, .xlsx, .pdf, .jpeg, .jpg, .bmp, .png."
                    });
                }

                return Ok(new { valido = true });

            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        [HttpDelete("DeleteFileSegnalazione")]
        public async Task<IActionResult> DeleteFileSegnalazione(long idSegnalazione, string fileName, string tipoSegnalazione, string ruolo)
        {
            try
            {
                if (tipoSegnalazione == "Prodotto")
                {
                    bool fileExist = await documentiService.DeleteFileSegnalazioneAsync(idSegnalazione, fileName, "CARTELLA_PRODOTTI_DATI_GENERALI", ruolo);
                    return Ok(new { esito = fileExist });
                }
                else if (tipoSegnalazione == "Contenzioso")
                {
                    bool fileExist = await documentiService.DeleteFileSegnalazioneAsync(idSegnalazione, fileName, "CARTELLA_CONTENZIOSI_DATI_GENERALI", ruolo);
                    return Ok(new { esito = fileExist });
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        [HttpDelete("DeleteAllFileSegnalazione")]
        public async Task<IActionResult> DeleteAllFileSegnalazione(long idSegnalazione, string tipoSegnalazione)
        {
            bool isDeleted = false;
            try
            {
                if (tipoSegnalazione == "Prodotto")
                {
                    isDeleted = await documentiService.DeleteAllFilesSegnalazioneAsync(idSegnalazione, "CARTELLA_PRODOTTI_DATI_GENERALI", "CARTELLA_PRODOTTI_CRITICITA");
                    return Ok(new { esito = isDeleted });
                }
                else if (tipoSegnalazione == "Contenzioso")
                {
                    isDeleted = await documentiService.DeleteAllFilesSegnalazioneAsync(idSegnalazione, "CARTELLA_CONTENZIOSI_DATI_GENERALI", "CARTELLA_CONTENZIOSI_CRITICITA");
                    return Ok(new { esito = isDeleted });
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        [HttpDelete("DeleteFileAspetto")]
        public async Task<IActionResult> DeleteFileAspetto(long idSegnalazione, long idAspetto, string fileName, string tipoSegnalazione, string ruolo)
        {
            try
            {
                if (tipoSegnalazione == "Prodotto")
                {
                    var fileDeleted = await documentiService.DeleteFileAspettoAsync(idSegnalazione, idAspetto, fileName, "CARTELLA_PRODOTTI_CRITICITA", ruolo);
                    return Ok(new { esito = fileDeleted });
                }
                else if (tipoSegnalazione == "Contenzioso")
                {
                    var fileDeleted = await documentiService.DeleteFileAspettoAsync(idSegnalazione, idAspetto, fileName, "CARTELLA_CONTENZIOSI_CRITICITA", ruolo);
                    return Ok(new { esito = fileDeleted });
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        [HttpPost("AllegaFileSegnalazione/{id}/{ruolo}/{tipoSegnalazione}")]
        public async Task<IActionResult> AllegaFileSegnalazione(long id, string ruolo, string tipoSegnalazione, IFormFile file)
        {
            try
            {
                if (tipoSegnalazione == "Prodotto")
                {
                    bool risultato = await documentiService.AllegaFileSegnalazioneAsync(id, ruolo, "CARTELLA_PRODOTTI_DATI_GENERALI", file);
                    return Ok(new { risultato });

                }
                else if (tipoSegnalazione == "Contenzioso")
                {
                    bool risultato = await documentiService.AllegaFileSegnalazioneAsync(id, ruolo, "CARTELLA_CONTENZIOSI_DATI_GENERALI", file);
                    return Ok(new { risultato });
                }

                return BadRequest(new { risultato = false });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Errore durante l'allegato del file", error = ex.Message });
            }
        }

        [HttpPost("AleggaFileAspetto/{idSegnalazione}/{idAspetto}/{tipoSegnalazione}/{ruolo}")]
        public async Task<IActionResult> AllegaFileAspetto(long idSegnalazione, long idAspetto, string ruolo, string tipoSegnalazione, IFormFile file)
        {
            try
            {
                if (tipoSegnalazione == "Prodotto")
                {
                    bool risultato = await documentiService.AllegaFileAspettoAsync(idSegnalazione, idAspetto, ruolo, "CARTELLA_PRODOTTI_CRITICITA", file);
                    return Ok(new { risultato });
                }
                else if (tipoSegnalazione == "Contenzioso")
                {
                    bool risultato = await documentiService.AllegaFileAspettoAsync(idSegnalazione, idAspetto, ruolo, "CARTELLA_CONTENZIOSI_CRITICITA", file);
                    return Ok(new { risultato });
                }
                return BadRequest(new { risultato = false });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Errore durante l'inserimento del file", error = ex.Message });
            }
        }



        [HttpPost("salvaAllegatiSegnalazioneProdotto")]
        public async Task<IActionResult> SalvaAllegatiSegnalazioneProdotto(
            [FromForm] int idSegnalazione,
            [FromForm] int idNuovoAspetto,
            [FromForm] SalvaSegnalazioneDTO segnalazioneCompletaDto,
            [FromForm] List<IFormFile> fileSegnalazione,
            [FromForm] List<IFormFile> filesAspetti,
            [FromForm] List<string> idAspetti
            )
        {
            try
            {
                bool result = false;
                bool isProvinciale = segnalazioneCompletaDto.RuoloIns == "P12801";
                bool isRegionale = segnalazioneCompletaDto.RuoloIns == "P12799";
                bool isAmministrativo = segnalazioneCompletaDto.RuoloIns == "P12690";
                bool isAmministratore = segnalazioneCompletaDto.RuoloIns == "P12689";

                if (fileSegnalazione.Count > 0)
                {
                    result = await documentiService.SalvaFileAllegati(idSegnalazione, fileSegnalazione, "CARTELLA_PRODOTTI_DATI_GENERALI", null, isProvinciale, isRegionale, isAmministrativo, isAmministratore);
                }

                if (filesAspetti.Count > 0)
                {
                    string[] arrayAspetti = idAspetti[0].Trim('[', ']').Split(',').Select(s => s.Trim()).ToArray();
                    if (idNuovoAspetto != -1)
                    {
                        arrayAspetti = arrayAspetti.Select(s => s == "-1" ? idNuovoAspetto.ToString() : s).ToArray();
                    }

                    // Salva i file allegati
                    result = await documentiService.SalvaFileAllegati(idSegnalazione, filesAspetti, "CARTELLA_PRODOTTI_CRITICITA", arrayAspetti, isProvinciale, isRegionale, isAmministrativo, isAmministratore);
                }

                return Ok(new { message = result });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("salvaAllegatiSegnalazioneContenzioso")]
        public async Task<IActionResult> SalvaAllegatiSegnalazioneContenzioso(
            [FromForm] int idSegnalazione,
            [FromForm] int idNuovoAspetto,
            [FromForm] SalvaSegnalazioneDTO segnalazioneCompletaDto,
            [FromForm] List<IFormFile> fileSegnalazione,
            [FromForm] List<IFormFile> filesAspetti,
            [FromForm] List<string> idAspetti
            )
        {
            try
            {
                bool result = false;
                bool isProvinciale = segnalazioneCompletaDto.RuoloIns == "P12801";
                bool isRegionale = segnalazioneCompletaDto.RuoloIns == "P12799";
                bool isAmministrativo = segnalazioneCompletaDto.RuoloIns == "P12690";
                bool isAmministratore = segnalazioneCompletaDto.RuoloIns == "P12689";

                if (fileSegnalazione.Count > 0)
                {
                    result = await documentiService.SalvaFileAllegati(idSegnalazione, fileSegnalazione, "CARTELLA_CONTENZIOSI_DATI_GENERALI", null, isProvinciale, isRegionale, isAmministrativo, isAmministratore);
                }

                if (filesAspetti.Count > 0)
                {
                    string[] arrayAspetti = idAspetti[0].Trim('[', ']').Split(',').Select(s => s.Trim()).ToArray();
                    if (idNuovoAspetto != -1)
                    {
                        arrayAspetti = arrayAspetti.Select(s => s == "-1" ? idNuovoAspetto.ToString() : s).ToArray();
                    }

                    // Salva i file allegati
                    result = await documentiService.SalvaFileAllegati(idSegnalazione, filesAspetti, "CARTELLA_CONTENZIOSI_CRITICITA", arrayAspetti, isProvinciale, isRegionale, isAmministrativo, isAmministratore);
                }

                return Ok(new { message = result });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

    }
}



public class VerificaAllegatoDTO
{
    public bool TipoAllegatoValido { get; set; }
    public bool DimensioneAllegatoValida { get; set; }
    public bool FormatoAllegatoValido { get; set; }

    public string? tipoEstensione { get; set; }
}

public class SalvaSegnalazioneDTO
{
    public long? Id { get; set; }
    public DateTime? Creato { get; set; }
    public DateTime? Aggiornato { get; set; }
    public string? MatricolaIns { get; set; }
    public string? MatricolaIncarico { get; set; }
    public string? Sede { get; set; }
    public int? IdStatoSalvataggioRilevazione { get; set; }
    public string? RuoloIns { get; set; }
    public long? IdArea { get; set; }
    public List<AspettiSegnalazioniProdottiDTO>? AspettiSegnalazione { get; set; } = new List<AspettiSegnalazioniProdottiDTO>();

    public long? ContenziosoId { get; set; }
}

public class AspettiSegnalazioniProdottiDTO
{
    public long? Id { get; set; }
    public DateTime? Creato { get; set; }
    public DateTime? Aggiornato { get; set; }
    public long? IdAspetto { get; set; }
    public string? Nome { get; set; }
    public long? IdSegnalazioneProdotto { get; set; }
    public string? Criticita { get; set; }
    public string? Suggerimento { get; set; }
}