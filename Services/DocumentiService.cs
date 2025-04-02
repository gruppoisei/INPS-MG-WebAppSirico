using System.Text.RegularExpressions;
using System.IO.Compression;

namespace INPS_MVC_WebAppSirico.Services
{
    public class DocumentiService
    {
        private readonly IConfiguration _configuration;

        public DocumentiService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public VerificaAllegatoDTO VerificaAggiungiAllegato(IFormFile file)
        {
            try
            {
                VerificaAllegatoDTO response = new VerificaAllegatoDTO();

                string? tipo = _configuration["TIPOESTENSIONE"] ?? "VARIABILE NON TROVATA";
                int dimensioneMax = Convert.ToInt32(_configuration["DIMENSIONEMB"] ?? "0");

                response.TipoAllegatoValido = VerificaTipoAllegato(file.FileName, tipo);
                response.DimensioneAllegatoValida = VerificaDimensioneAllegato((int)file.Length, dimensioneMax);
                response.FormatoAllegatoValido = VerificaFormatoAllegato(file);

                response.tipoEstensione = tipo;

                return response;
            }
            catch (Exception ex)
            {
                throw new Exception("Errore allegato non valido : " + ex.Message);
            }
        }

        private string GetRuoloFolder(string baseFolder, string ruolo)
        {
            switch (ruolo)
            {
                case "P12689":
                    return Path.Combine(baseFolder, _configuration["FILEAMMINISTRATORE"] ?? "VARIABILE NON TROVATA");
                case "P12690":
                    return Path.Combine(baseFolder, _configuration["FILEAMMINISTRATIVO"] ?? "VARIABILE NON TROVATA");
                case "P12799":
                    return Path.Combine(baseFolder, _configuration["FILEREGIONALE"] ?? "VARIABILE NON TROVATA");
                case "P12801":
                    return Path.Combine(baseFolder, _configuration["FILEPROVINCIALE"] ?? "VARIABILE NON TROVATA");
                default:
                    return baseFolder;
            }
        }

        private bool VerificaTipoAllegato(string fileName, string tipo)
        {
            try
            {
                string estensioneFileName = Path.GetExtension(fileName);

                bool trovato = tipo.Contains(estensioneFileName);

                return trovato;
            }
            catch (Exception ex)
            {
                throw new Exception("Errore tipo non valido : " + ex.Message);
            }
        }

        private bool VerificaDimensioneAllegato(int dimensioneFile, int dimensioneMax)
        {
            try
            {
                int maxFileSize = dimensioneMax * 1024 * 1024;

                bool dimensioneValida = dimensioneFile <= maxFileSize;

                return dimensioneValida;
            }
            catch (Exception ex)
            {
                throw new Exception("Errore dimensione file : " + ex.Message);
            }
        }
        
        private bool VerificaFormatoAllegato(IFormFile fileAllegato)
        {
            try
            {
                byte[] binData;
                bool trovato = false;
                Regex re = new Regex("[;\\/:*?\"<>|&']");

                if (fileAllegato.Length < 0 || re.IsMatch(fileAllegato.FileName))
                {
                    return trovato;
                }

                using (var stream = new MemoryStream())
                {
                    fileAllegato.CopyTo(stream);
                    binData = stream.ToArray();
                    stream.Dispose();
                    stream.Close();
                }

                switch (Path.GetExtension(fileAllegato.FileName).ToLower())
                {
                    case ".doc":
                    case ".xls":
                        if (binData.Length > 4 && binData[0] == 208 && binData[1] == 207 && binData[2] == 17 && binData[3] == 224)
                        {
                            trovato = true;
                        }
                        break;
                    case ".docx":
                    case ".xlsx":
                        if (binData.Length > 4 && binData[0] == 80 && binData[1] == 75 && binData[2] == 3 && binData[3] == 4)
                        {
                            trovato = true;
                        }
                        break;
                    case ".pdf":
                        if (binData.Length > 4 && binData[0] == 37 && binData[1] == 80 && binData[2] == 68 && binData[3] == 70)
                        {
                            trovato = true;
                        }
                        break;
                    case ".jpeg":
                    case ".jpg":
                        if (binData.Length > 2 && binData[0] == 0xFF && binData[1] == 0xD8)
                        {
                            trovato = true;
                        }
                        break;
                    case ".bmp":
                        if (binData.Length > 2 && binData[0] == 0x42 && binData[1] == 0x4D)
                        {
                            trovato = true;
                        }
                        break;
                    case ".png":
                        if (binData.Length > 8 && binData[0] == 0x89 && binData[1] == 0x50 && binData[2] == 0x4E && binData[3] == 0x47 &&
                            binData[4] == 0x0D && binData[5] == 0x0A && binData[6] == 0x1A && binData[7] == 0x0A)
                        {
                            trovato = true;
                        }
                        break;
                }

                return trovato;
            }
            catch (Exception ex)
            {
                throw new Exception("Errore dimensione file : " + ex.Message);
            }
        }

        private async Task<string> GetFilePath(string folderName)
        {
            try
            {
                string? filePath = "";

                filePath = _configuration["PATHGENERICO"] ?? "VARIABILE NON TROVATA"; //"\\\\filesrvs.ser-test.inps\\root\\Applicazioni\\Web\\Sirico";

                string ? subDir = "";

                if (folderName == "CARTELLA_PRODOTTI_DATI_GENERALI")
                {
                    subDir = _configuration["CARTELLA_PRODOTTI_DATI_GENERALI"] ?? "VARIABILE NON TROVATA";
                }

                if (folderName == "CARTELLA_CONTENZIOSI_DATI_GENERALI")
                {
                    subDir = _configuration["CARTELLA_CONTENZIOSI_DATI_GENERALI"] ?? "VARIABILE NON TROVATA";
                }


                if (folderName == "CARTELLA_PRODOTTI_CRITICITA")
                {
                    subDir = _configuration["CARTELLA_PRODOTTI_CRITICITA"] ?? "VARIABILE NON TROVATA";
                }

                if (folderName == "CARTELLA_CONTENZIOSI_CRITICITA")
                {
                    subDir = _configuration["CARTELLA_CONTENZIOSI_CRITICITA"] ?? "VARIABILE NON TROVATA";
                }

                string? fullPath = Path.Combine(filePath, subDir);

                return fullPath;

            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Errore percorso non trovato" + ex);
            }
        }       

        private async Task<string> CreateDirectory(long? id, string folderName)
        {
            string fullPath = "";
            string lsFolderPath = "";
            bool contiene3slah = false;
            try
            {
                fullPath = await GetFilePath(folderName);
                lsFolderPath = (id != null) ? Path.Combine(fullPath, id.ToString()) : fullPath;

                if (lsFolderPath.Contains(@"\\\"))
                {
                    lsFolderPath = lsFolderPath.Replace(@"\\\", @"\");
                    contiene3slah = true;
                }


                if (!Directory.Exists(lsFolderPath))
                {
                    Directory.CreateDirectory(lsFolderPath);
                }
                return lsFolderPath;
            }
            catch (Exception ex)
            {
                string msg = ex.Message + " " + "fullpath: " + fullPath + " lsFolderPath: " + lsFolderPath + "contiene 3 slash: " + contiene3slah + " utente applicativo: " + Environment.UserName;
                throw new InvalidOperationException("Impossibile creare la cartella " + msg);
            }
        }

        public async Task<bool> SalvaFileAllegati(long? id, List<IFormFile> fileAllegati, string folderName, string[]? risultato, bool isProvinciale = false, bool isRegionale = false, bool isAmministrativo = false, bool isAmministratore = false)
        {
            string GetRuoloFolder(string baseFolder)
            {
                if (isAmministratore)
                {
                    return Path.Combine(baseFolder, _configuration["FILEAMMINISTRATORE"] ?? "VARIABILE NON TROVATA");
                }
                else if (isAmministrativo)
                {
                    return Path.Combine(baseFolder, _configuration["FILEAMMINISTRATIVO"] ?? "VARIABILE NON TROVATA");
                }
                else if (isRegionale)
                {
                    return Path.Combine(baseFolder, _configuration["FILEREGIONALE"] ?? "VARIABILE NON TROVATA");
                }
                else if (isProvinciale)
                {
                    return Path.Combine(baseFolder, _configuration["FILEPROVINCIALE"] ?? "VARIABILE NON TROVATA");
                }
                return baseFolder;
            }            

            if (risultato == null)
            {
                string allegatiFolder = await CreateDirectory(id, folderName);
                allegatiFolder = GetRuoloFolder(allegatiFolder);

                if (!Directory.Exists(allegatiFolder))
                {
                    Directory.CreateDirectory(allegatiFolder);
                }

                foreach (IFormFile file in fileAllegati)
                {
                    try
                    {
                        string filePath = Path.Combine(allegatiFolder, file.FileName);

                        if (File.Exists(filePath))
                        {
                            continue;
                        }

                        using (var fileStream = new FileStream(filePath, FileMode.Create))
                        {
                            await file.CopyToAsync(fileStream);
                        }
                    }
                    catch (Exception ex)
                    {
                        string msg = ex.Message + " " + "utente applicativo: " + Environment.UserName;
                        throw new Exception($"Errore durante il salvataggio del file: {msg}");
                    }
                }
            }
            else
            {
                string baseFolder = await CreateDirectory(id, folderName);

                for (int i = 0; i < risultato.Length; i++)
                {
                    string aspettoFolder = Path.Combine(baseFolder, risultato[i]);

                    if (aspettoFolder.Contains(@"\\\"))
                    {
                        aspettoFolder = aspettoFolder.Replace(@"\\\", @"\");
                    }

                    if (!Directory.Exists(aspettoFolder))
                    {
                        Directory.CreateDirectory(aspettoFolder);
                    }

                    string ruoloFolder = GetRuoloFolder(aspettoFolder); // Aggiunge la cartella del ruolo, se presente.

                    if (!Directory.Exists(ruoloFolder))
                    {
                        Directory.CreateDirectory(ruoloFolder);  // Crea la cartella del ruolo se non esiste.
                    }

                    IFormFile fileAllegato = fileAllegati[i];
                    string filePath = Path.Combine(ruoloFolder, fileAllegato.FileName);

                    using (var fileStream = new FileStream(filePath, FileMode.Create, FileAccess.Write, FileShare.None))
                    {
                        await fileAllegato.CopyToAsync(fileStream);
                    }
                }
            }

            return true;
        }

        public async Task<bool> DeleteFileSegnalazioneAsync(long id, string filename, string folderName, string? ruolo)
        {
            string filePath = await GetFilePath(folderName);

            string datiGeneraliPath = Path.Combine(filePath, id.ToString());

            if (datiGeneraliPath.Contains(@"\\\"))
            {
                datiGeneraliPath = datiGeneraliPath.Replace(@"\\\", @"\");
            }

            if (!Directory.Exists(datiGeneraliPath))
            {
                throw new DirectoryNotFoundException("Directory non trovata.");
            }

            if (!string.IsNullOrEmpty(ruolo))
            {
                string roleFolderPath = GetRuoloFolder(datiGeneraliPath, ruolo);

                if (!Directory.Exists(roleFolderPath))
                {
                    throw new DirectoryNotFoundException($"Directory per il ruolo {ruolo} non trovata.");
                }

                var files = Directory.GetFiles(roleFolderPath);
                if (files.Length == 0)
                {
                    return false;
                }

                string fileToDelete = files[0];
                try
                {
                    File.Delete(fileToDelete);
                    Directory.Delete(roleFolderPath);
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
            else
            {
                var directories = Directory.GetDirectories(datiGeneraliPath);

                if (directories.Length == 0)
                {
                    return false;
                }

                string zipFilePath = Path.Combine(Path.GetTempPath(), $"{id}_allegati.zip");

                if (File.Exists(zipFilePath))
                {
                    File.Delete(zipFilePath);
                }

                using (var zipArchive = ZipFile.Open(zipFilePath, ZipArchiveMode.Create))
                {
                    foreach (var directory in directories)
                    {
                        foreach (var file in Directory.GetFiles(directory))
                        {
                            string entryName = Path.Combine(Path.GetFileName(directory), Path.GetFileName(file));
                            zipArchive.CreateEntryFromFile(file, entryName);
                        }
                    }
                }

                byte[] zipFileContent = await File.ReadAllBytesAsync(zipFilePath);
                string zipFileName = Path.GetFileName(zipFilePath);

                File.Delete(zipFilePath);

                return true;
            }
        }

        public async Task<bool> DeleteFileAspettoAsync(long id, long idAspetto, string fileName, string folderName, string ruolo)
        {
            string filePath = await GetFilePath(folderName);
            string aspettiPath = Path.Combine(filePath, id.ToString());
            string aspettoFilePath = Path.Combine(aspettiPath, idAspetto.ToString());

            if (aspettoFilePath.Contains(@"\\\"))
            {
                aspettoFilePath = aspettoFilePath.Replace(@"\\\", @"\");
            }

            if (!Directory.Exists(aspettoFilePath))
            {
                throw new DirectoryNotFoundException("Directory non trovata.");
            }
            string roleFolderAspettoPath = GetRuoloFolder(aspettoFilePath, ruolo);

            if (!Directory.Exists(roleFolderAspettoPath))
            {
                throw new DirectoryNotFoundException("Directory non trovata.");
            }

            var file = Directory.GetFiles(roleFolderAspettoPath);
            if (file.Length == 0)
            {
                return false;
            }
            string fileToDelete = file[0];
            try
            {
                File.Delete(fileToDelete);
                Directory.Delete(roleFolderAspettoPath);
                Directory.Delete(aspettoFilePath);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> DeleteAllFilesSegnalazioneAsync(long idSegnalazione, string cartellaSegnalazione, string cartellaAspetti)
        {
            string filePath = await GetFilePath(cartellaSegnalazione);
            string pathSegnalazione = Path.Combine(filePath, idSegnalazione.ToString());
            string filePathAspetti = await GetFilePath(cartellaAspetti);
            string pathAspetti = Path.Combine(filePathAspetti, idSegnalazione.ToString());

            if (pathSegnalazione.Contains(@"\\\"))
            {
                pathSegnalazione = pathSegnalazione.Replace(@"\\\", @"\");
            }
            bool segnalazioneExists = Directory.Exists(pathSegnalazione);

            if (pathAspetti.Contains(@"\\\"))
            {
                pathAspetti = pathAspetti.Replace(@"\\\", @"\");
            }
            bool aspettiExists = Directory.Exists(pathAspetti);

            if (!segnalazioneExists && !aspettiExists)
            {
                return false;
            }
            try
            {
                if (segnalazioneExists)
                {
                    Directory.Delete(pathSegnalazione, recursive: true);
                }

                if (aspettiExists)
                {
                    Directory.Delete(pathAspetti, recursive: true);
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message + " " + "utente applicativo: " + Environment.UserName;
                throw new DirectoryNotFoundException("Nessuna directory trovata: " + msg);
            }
            return false;
        }

        public async Task<(byte[] FileContent, string FileName)> GetFileSegnalazioneByIdAsync(long id, string folderName, string? ruolo)
        {
            string filePath = await GetFilePath(folderName);

            string datiGeneraliPath = Path.Combine(filePath, id.ToString());

            if (datiGeneraliPath.Contains(@"\\\"))
            {
                datiGeneraliPath = datiGeneraliPath.Replace(@"\\\", @"\");
            }

            if (!Directory.Exists(datiGeneraliPath))
            {
                throw new DirectoryNotFoundException("Directory non trovata.");
            }

            if (!string.IsNullOrEmpty(ruolo))
            {
                string roleFolderPath = GetRuoloFolder(datiGeneraliPath, ruolo);

                if (roleFolderPath.Contains(@"\\\"))
                {
                    roleFolderPath = roleFolderPath.Replace(@"\\\", @"\");
                }

                if (!Directory.Exists(roleFolderPath))
                {
                    throw new DirectoryNotFoundException($"Directory per il ruolo {ruolo} non trovata.");
                }

                var files = Directory.GetFiles(roleFolderPath);
                if (files.Length == 0)
                {
                    throw new FileNotFoundException($"Nessun file trovato per il ruolo {ruolo}.");
                }

                string fileToReturn = files[0];
                byte[] fileContent = await File.ReadAllBytesAsync(fileToReturn);
                string fileName = Path.GetFileName(fileToReturn);

                return (fileContent, fileName);
            }
            else
            {
                var directories = Directory.GetDirectories(datiGeneraliPath);

                if (directories.Length == 0)
                {
                    throw new FileNotFoundException("Nessuna sottocartella trovata per l'id specificato.");
                }

                string zipFilePath = Path.Combine(Path.GetTempPath(), $"{id}_allegati.zip");

                if (File.Exists(zipFilePath))
                {
                    File.Delete(zipFilePath);
                }

                using (var zipArchive = ZipFile.Open(zipFilePath, ZipArchiveMode.Create))
                {
                    foreach (var directory in directories)
                    {
                        foreach (var file in Directory.GetFiles(directory))
                        {
                            string entryName = Path.Combine(Path.GetFileName(directory), Path.GetFileName(file)); // Nome del file all'interno dello zip
                            zipArchive.CreateEntryFromFile(file, entryName);
                        }
                    }
                }

                byte[] zipFileContent = await File.ReadAllBytesAsync(zipFilePath);
                string zipFileName = Path.GetFileName(zipFilePath);

                File.Delete(zipFilePath);

                return (zipFileContent, zipFileName);
            }
        }

        public virtual async Task<(byte[] FileContent, string FileName)> GetFileAspettoByIdAsync(long id, long idAspetto, string folderName, string ruolo)
        {
            string filePath = await GetFilePath(folderName);
            string aspettiPath = Path.Combine(filePath, id.ToString());
            string aspettoFilePath = Path.Combine(aspettiPath, idAspetto.ToString());

            if (aspettoFilePath.Contains(@"\\\"))
            {
                aspettoFilePath = aspettoFilePath.Replace(@"\\\", @"\");
            }

            if (!Directory.Exists(aspettoFilePath))
            {
                throw new DirectoryNotFoundException("Directory non trovata.");
            }
            if (!string.IsNullOrEmpty(ruolo))
            {
                string roleFolderPath = GetRuoloFolder(aspettoFilePath, ruolo);
                var file = Directory.GetFiles(roleFolderPath);
                if (file.Length == 0)
                {
                    throw new FileNotFoundException("Nessun file trovato per l'id specificato");
                }
                string fileIdAspettoPath = file[0];
                byte[] fileContent = await File.ReadAllBytesAsync(fileIdAspettoPath);
                string fileName = Path.GetFileName(fileIdAspettoPath);
                return (fileContent, fileName);
            }
            else
            {
                var directories = Directory.GetDirectories(aspettoFilePath);
                if (directories.Length == 0)
                {
                    throw new FileNotFoundException("Nessuna sottocartella trovata per l'id specificato.");
                }
                string zipFilePath = Path.Combine(Path.GetTempPath(), $"{id}_allegati_aspetto.zip");

                if (File.Exists(zipFilePath))
                {
                    File.Delete(zipFilePath);
                }

                using (var zipArchive = ZipFile.Open(zipFilePath, ZipArchiveMode.Create))
                {
                    foreach (var directory in directories)
                    {
                        foreach (var file in Directory.GetFiles(directory))
                        {
                            string entryName = Path.Combine(Path.GetFileName(directory), Path.GetFileName(file)); // Nome del file all'interno dello zip
                            zipArchive.CreateEntryFromFile(file, entryName);
                        }
                    }
                }

                byte[] zipFileContent = await File.ReadAllBytesAsync(zipFilePath);
                string zipFileName = Path.GetFileName(zipFilePath);

                File.Delete(zipFilePath);

                return (zipFileContent, zipFileName);
            }
        }

        public async Task<List<AspettoCheckResult>> FindAllegatoAspettiAsync(long idSegnalazione, List<long> idAspetti, string ruolo, string folderName)
        {
            var risultati = new List<AspettoCheckResult>();

            try
            {
                string filePath = await GetFilePath(folderName);
                string aspettiPath = Path.Combine(filePath, idSegnalazione.ToString());

                if (aspettiPath.Contains(@"\\\"))
                {
                    aspettiPath = aspettiPath.Replace(@"\\\", @"\");
                }

                if (!Directory.Exists(aspettiPath))
                {
                    return risultati;
                }

                foreach (var idAspetto in idAspetti)
                {
                    string aspettoFolderPath = Path.Combine(aspettiPath, idAspetto.ToString());

                    if (aspettoFolderPath.Contains(@"\\\"))
                    {
                        aspettoFolderPath = aspettoFolderPath.Replace(@"\\\", @"\");
                    }

                    if (!Directory.Exists(aspettoFolderPath))
                    {
                        risultati.Add(new AspettoCheckResult
                        {
                            IdAspetto = idAspetto,
                            Esito = false
                        });
                        continue;
                    }

                    bool hasFiles = false;

                    if (string.IsNullOrEmpty(ruolo))
                    {
                        foreach (var directory in Directory.GetDirectories(aspettoFolderPath))
                        {
                            hasFiles = Directory.EnumerateFiles(directory).Any();
                            if (hasFiles) break;
                        }
                    }
                    else
                    {
                        string roleFolderPath = GetRuoloFolder(aspettoFolderPath, ruolo);

                        if (Directory.Exists(roleFolderPath))
                        {
                            hasFiles = Directory.EnumerateFiles(roleFolderPath).Any();
                        }
                    }

                    risultati.Add(new AspettoCheckResult
                    {
                        IdAspetto = idAspetto,
                        Esito = hasFiles
                    });
                }

                return risultati;
            }
            catch (Exception ex)
            {
                string msg = ex.Message + " " + "utente applicativo: " + Environment.UserName;
                throw new Exception($"Errore durante la verifica degli allegati della segnalazione: {msg}");
            }
        }

        public async Task<bool> FindAllegatoAspettoAsync(long idSegnalazione, long idAspetto, string ruolo, string folderName)
        {
            try
            {
                string filePath = await GetFilePath(folderName);
                string idSegnalazionePathAspetti = Path.Combine(filePath, idSegnalazione.ToString());

                if (idSegnalazionePathAspetti.Contains(@"\\\"))
                {
                    idSegnalazionePathAspetti = idSegnalazionePathAspetti.Replace(@"\\\", @"\");
                }

                if (!Directory.Exists(idSegnalazionePathAspetti))
                {
                    return false;
                }
                string idAspettoPath = Path.Combine(idSegnalazionePathAspetti, idAspetto.ToString());

                if (idAspettoPath.Contains(@"\\\"))
                {
                    idAspettoPath = idAspettoPath.Replace(@"\\\", @"\");
                }

                if (!Directory.Exists(idAspettoPath))
                {
                    return false;
                }
                string aspettoRuoloPath = GetRuoloFolder(idAspettoPath, ruolo);

                if (aspettoRuoloPath.Contains(@"\\\"))
                {
                    aspettoRuoloPath = aspettoRuoloPath.Replace(@"\\\", @"\");
                }

                if (!Directory.Exists(aspettoRuoloPath))
                {
                    return false;
                }
                bool hasFile = Directory.EnumerateFiles(aspettoRuoloPath).Any();
                return hasFile;
            }
            catch (Exception ex)
            {
                string msg = ex.Message + " " + "utente applicativo: " + Environment.UserName;
                throw new Exception($"Errore durante la verifica degli allegati della segnalazione: {msg}");
            }
        }

        public async Task<bool> FindAllegatoSegnalazioneAsync(long idSegnalazione, string ruolo, string folderName)
        {
            try
            {
                string filePath = await GetFilePath(folderName);
                string datiGeneraliPath = Path.Combine(filePath, idSegnalazione.ToString());

                if (datiGeneraliPath.Contains(@"\\\"))
                {
                    datiGeneraliPath = datiGeneraliPath.Replace(@"\\\", @"\");
                }

                if (!Directory.Exists(datiGeneraliPath))
                {
                    return false;
                }

                if (string.IsNullOrEmpty(ruolo))
                {
                    foreach (var directory in Directory.GetDirectories(datiGeneraliPath))
                    {
                        bool hasFiles = Directory.EnumerateFiles(directory).Any();
                        if (hasFiles)
                        {
                            return true;
                        }
                        return false;
                    }
                }
                else
                {
                    string ruoloFolder = GetRuoloFolder(datiGeneraliPath, ruolo);

                    if (ruoloFolder.Contains(@"\\\"))
                    {
                        ruoloFolder = ruoloFolder.Replace(@"\\\", @"\");
                    }

                    if (Directory.Exists(ruoloFolder))
                    {
                        bool hasFiles = Directory.EnumerateFiles(ruoloFolder).Any();
                        if (hasFiles)
                        {
                            return true;
                        }
                        return false;
                    }
                }

                return false;
            }
            catch (Exception ex)
            {
                string msg = ex.Message + " " + "utente applicativo: " + Environment.UserName;
                throw new Exception($"Errore durante la verifica degli allegati della segnalazione: {msg}");
            }
        }

        public async Task<bool> AllegaFileSegnalazioneAsync(long idSegnalazione, string ruolo, string folderName, IFormFile fileSegnalazione)
        {
            try
            {
                string allegatiFolder = await CreateDirectory(idSegnalazione, folderName);

                allegatiFolder = GetRuoloFolder(allegatiFolder, ruolo);
                Directory.CreateDirectory(allegatiFolder);

                string filePath = Path.Combine(allegatiFolder, fileSegnalazione.FileName);

                if (File.Exists(filePath))
                {
                    throw new Exception("Il file esiste già.");
                }

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await fileSegnalazione.CopyToAsync(fileStream);
                }

                return true;
            }
            catch (Exception ex)
            {
                string msg = ex.Message + " " + "utente applicativo: " + Environment.UserName;
                throw new Exception($"Errore durante l'allegato del file: {msg}");
            }
        }

        public async Task<bool> AllegaFileAspettoAsync(long idSegnalazione, long idAspetto, string ruolo, string folderName, IFormFile fileAspetto)
        {
            try
            {
                string filePath = await CreateDirectory(idSegnalazione, folderName);

                string aspettoFolder = Path.Combine(filePath, idAspetto.ToString());
                Directory.CreateDirectory(aspettoFolder);

                string ruoloFolderAspetti = GetRuoloFolder(aspettoFolder, ruolo);
                Directory.CreateDirectory(ruoloFolderAspetti);

                string aspettoFilePath = Path.Combine(ruoloFolderAspetti, fileAspetto.FileName);

                if (File.Exists(aspettoFilePath))
                {
                    return false;
                }

                // Scrivi il file
                using (var fileStream = new FileStream(aspettoFilePath, FileMode.Create))
                {
                    await fileAspetto.CopyToAsync(fileStream);
                }

                return true;
            }
            catch (IOException ioEx)
            {
                string msg = ioEx.Message + " " + "utente applicativo: " + Environment.UserName;
                throw new Exception($"Errore di I/O durante l'allegato del file: {msg}");
            }
            catch (UnauthorizedAccessException uaEx)
            {
                string msg = uaEx.Message + " " + "utente applicativo: " + Environment.UserName;
                throw new Exception($"Accesso negato durante l'allegato del file: {msg}");
            }
            catch (Exception ex)
            {
                string msg = ex.Message + " " + "utente applicativo: " + Environment.UserName;
                throw new Exception($"Errore durante l'allegato del file: {msg}");
            }
        }
    }
}

public class AspettoCheckResult
{
    public long IdAspetto { get; set; }
    public bool Esito { get; set; }
}