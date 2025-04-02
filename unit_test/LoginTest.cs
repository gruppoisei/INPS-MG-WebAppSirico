using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using INPS_MVC_WebAppSirico.Controllers;
using System.Collections.Generic;

namespace unit_test
{
    [TestClass]
    public class LoginControllerTests
    {
        private Mock<IHttpContextAccessor>? _httpContextAccessorMock;
        private LoginController? _controller;

        [TestInitialize]
        public void Setup()
        {
            // Configurazione del mock di IHttpContextAccessor
            _httpContextAccessorMock = new Mock<IHttpContextAccessor>();

            // Inizializzazione del controller con il mock
            _controller = new LoginController(_httpContextAccessorMock.Object);
        }

        [TestMethod]
        public void WhoAmI_ReturnsUser_WhenHeadersAreValid()
        {
            // Arrange: Configurare gli header HTTP validi
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Headers["INPS-NOME"] = "Mario";
            httpContext.Request.Headers["INPS-COGNOME"] = "Rossi";
            httpContext.Request.Headers["INPS-ACCOUNT-WINDOWS"] = "mario.rossi";
            httpContext.Request.Headers["INPS-MATRICOLA"] = "123456";
            httpContext.Request.Headers["INPS-CODICE-FISCALE"] = "MROSSI85M01H501Z";
            httpContext.Request.Headers["INPS-RUOLI"] = "cn=A8006:P12689,dc=inps,dc=it|cn=A8006:P12801:050000,dc=inps,dc=it|";

            _httpContextAccessorMock.Setup(_ => _.HttpContext).Returns(httpContext);

            // Act: Chiamare il metodo WhoAmI
            var result = _controller.WhoAmI();

            // Assert: Verificare il risultato
            Assert.IsInstanceOfType(result, typeof(OkObjectResult));
            var okResult = result as OkObjectResult;
            Assert.IsNotNull(okResult);

            var user = okResult.Value as LoginController.IdmId;
            Assert.IsNotNull(user);
            Assert.AreEqual("Mario", user.FirstName);
            Assert.AreEqual("Rossi", user.LastName);
            Assert.AreEqual("mario.rossi", user.WindowsAccount);
            Assert.AreEqual("123456", user.Matricula);
            Assert.AreEqual("MROSSI85M01H501Z", user.FiscalCode);
            CollectionAssert.Contains(user.appRoles, "P12689 : Amministratore");
            CollectionAssert.Contains(user.CodiceSede, "050000 : P12801");
        }

        /* [TestMethod]             //scommentare in produzione quando si leverà la login di default
        public void WhoAmI_ReturnsBadRequest_WhenAccountHeaderIsMissing()
        {
            // Arrange: Configurare gli header HTTP senza l'header INPS-ACCOUNT-WINDOWS
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Headers["INPS-NOME"] = "Mario";
            httpContext.Request.Headers["INPS-COGNOME"] = "Rossi";
            httpContext.Request.Headers["INPS-MATRICOLA"] = "123456";
            httpContext.Request.Headers["INPS-RUOLI"] = "cn=A8006:P12689,dc=inps,dc=it|";

            _httpContextAccessorMock.Setup(_ => _.HttpContext).Returns(httpContext);

            // Act: Chiamare il metodo WhoAmI
            var result = _controller.WhoAmI();

            // Assert: Verificare che venga restituito BadRequest
            Assert.IsInstanceOfType(result, typeof(BadRequestObjectResult));
            var badRequestResult = result as BadRequestObjectResult;
            Assert.IsNotNull(badRequestResult);
            Assert.AreEqual("Header 'INPS-ACCOUNT-WINDOWS' mancante.", (badRequestResult.Value as dynamic).Message);
        } */

/*         [TestMethod]             //scommentare in produzione quando si leverà la login di default
        public void WhoAmI_ReturnsBadRequest_WhenRolesHeaderIsMissing()
        {
            // Arrange: Configurare gli header HTTP senza l'header INPS-RUOLI
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Headers["INPS-NOME"] = "Mario";
            httpContext.Request.Headers["INPS-COGNOME"] = "Rossi";
            httpContext.Request.Headers["INPS-ACCOUNT-WINDOWS"] = "mario.rossi";
            httpContext.Request.Headers["INPS-MATRICOLA"] = "123456";

            _httpContextAccessorMock.Setup(_ => _.HttpContext).Returns(httpContext);

            // Act: Chiamare il metodo WhoAmI
            var result = _controller.WhoAmI();

            // Assert: Verificare che venga restituito BadRequest
            Assert.IsInstanceOfType(result, typeof(BadRequestObjectResult));
            var badRequestResult = result as BadRequestObjectResult;
            Assert.IsNotNull(badRequestResult);
            Assert.AreEqual("Nessun ruolo trovato nei dati dell'utente.", (badRequestResult.Value as dynamic).Message);
        } */

        [TestMethod]
        public void WhoAmI_ReturnsDefaultUser_WhenHeadersAreMissing()
        {
            // Arrange: Non configurare alcun header
            var httpContext = new DefaultHttpContext();
            _httpContextAccessorMock.Setup(_ => _.HttpContext).Returns(httpContext);

            // Act: Chiamare il metodo WhoAmI
            var result = _controller.WhoAmI();

            // Assert: Verificare che vengano restituiti i valori di default
            Assert.IsInstanceOfType(result, typeof(OkObjectResult));
            var okResult = result as OkObjectResult;
            Assert.IsNotNull(okResult);

            var user = okResult.Value as LoginController.IdmId;
            Assert.IsNotNull(user);
            Assert.AreEqual("DefaultNome", user.FirstName);
            Assert.AreEqual("DefaultCognome", user.LastName);
            //Assert.AreEqual("Username", user.WindowsAccount);
            //Assert.AreEqual("E000-123", user.Matricula);
            Assert.AreEqual("DefaultFiscalCode", user.FiscalCode);
            //CollectionAssert.Contains(user.appRoles, "P12689 : Amministratore");
        }
    }
}
