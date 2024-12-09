using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using INPS_MVC_WebAppSirico.Controllers;
using System.Collections.Generic;
using System.Net;
using Moq.Protected;
using System.Net.Http.Headers;
using System.Text;


namespace unit_test
{
    [TestClass]
    public class ApiTest
    {
        private Mock<IHttpClientFactory>? _httpClientFactoryMock;
        private Mock<HttpMessageHandler>? _httpMessageHandlerMock;
        private ApiGatewayController? _controller;

        [TestInitialize]
        public void TestInitialize()
        {
            _httpClientFactoryMock = new Mock<IHttpClientFactory>();
            _httpMessageHandlerMock = new Mock<HttpMessageHandler>();

            var httpClient = new HttpClient(_httpMessageHandlerMock.Object);
            _httpClientFactoryMock.Setup(factory => factory.CreateClient(It.IsAny<string>())).Returns(httpClient);

            _controller = new ApiGatewayController(_httpClientFactoryMock.Object);
            Environment.SetEnvironmentVariable("MS_SIRICOAPI", "http://localhost:5250/api/");

        }

        [TestMethod]
        public async Task HandleGetRequest_ReturnsContentResult_ForNonBinaryResponse()
        {
            // Arrange
            Environment.SetEnvironmentVariable("MS_SIRICOAPI", "http://localhost:5250/api/");

            var responseMessage = new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StringContent("{\"key\":\"value\"}", System.Text.Encoding.UTF8, "application/json")
            };

            var mockHttpMessageHandler = new Mock<MockHttpMessageHandler>();
            mockHttpMessageHandler
                .Protected()
                .Setup<Task<HttpResponseMessage>>(
                    "SendAsync",
                    ItExpr.IsAny<HttpRequestMessage>(),
                    ItExpr.IsAny<CancellationToken>()
                )
                .ReturnsAsync(responseMessage);

            var httpClient = new HttpClient(mockHttpMessageHandler.Object);
            _httpClientFactoryMock?.Setup(factory => factory.CreateClient(It.IsAny<string>())).Returns(httpClient);

            _controller = new ApiGatewayController(_httpClientFactoryMock.Object);

            var httpContext = new DefaultHttpContext();
            _controller.ControllerContext.HttpContext = httpContext;

            // Act
            var result = await _controller.HandleGetRequest("/test");

            // Assert
            var contentResult = result as ContentResult;
            Assert.IsNotNull(contentResult);
            Assert.AreEqual(200, contentResult.StatusCode);
            Assert.AreEqual("{\"key\":\"value\"}", contentResult.Content);
            Assert.AreEqual("application/json; charset=utf-8", contentResult.ContentType);
        }

        [TestMethod]
        public async Task HandleGetRequest_ReturnsFileResult_ForBinaryResponse()
        {
            Environment.SetEnvironmentVariable("MS_SIRICOAPI", "http://localhost:5250/api/");

            // Arrange
            var fileContent = new byte[] { 0x01, 0x02, 0x03, 0x04 }; // Contenuto binario simulato
            var responseMessage = new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new ByteArrayContent(fileContent)
            };
            responseMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            responseMessage.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
            {
                FileName = "testfile.bin"
            };

            var mockHttpMessageHandler = new Mock<MockHttpMessageHandler>();
            mockHttpMessageHandler
                .Protected()
                .Setup<Task<HttpResponseMessage>>(
                    "SendAsync",
                    ItExpr.IsAny<HttpRequestMessage>(),
                    ItExpr.IsAny<CancellationToken>()
                )
                .ReturnsAsync(responseMessage);

            var httpClient = new HttpClient(mockHttpMessageHandler.Object);
            _httpClientFactoryMock.Setup(factory => factory.CreateClient(It.IsAny<string>())).Returns(httpClient);

            _controller = new ApiGatewayController(_httpClientFactoryMock.Object);

            var httpContext = new DefaultHttpContext();
            _controller.ControllerContext.HttpContext = httpContext;

            // Act
            var result = await _controller.HandleGetRequest("/test");

            // Assert
            var fileResult = result as FileContentResult;
            Assert.IsNotNull(fileResult);
            CollectionAssert.AreEqual(fileContent, fileResult.FileContents); // Verifica che i contenuti siano corretti
            Assert.AreEqual("testfile.bin", fileResult.FileDownloadName); // Verifica il nome del file
            Assert.AreEqual("application/octet-stream", fileResult.ContentType); // Verifica il tipo di contenuto
        }
        [TestMethod]
        public async Task HandleOtherRequests_ReturnsContentResult_ForPostRequest()
        {
            // Arrange
            var requestBody = "{\"key\":\"value\"}";
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Method = "POST";
            httpContext.Request.ContentType = "application/json";
            httpContext.Request.Headers["Content-Type"] = "application/json";
            httpContext.Request.Body = new MemoryStream(Encoding.UTF8.GetBytes(requestBody));

            _controller.ControllerContext.HttpContext = httpContext;

            var responseMessage = new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StringContent("{\"response\":\"success\"}", Encoding.UTF8, "application/json")
            };

            var mockHttpMessageHandler = new Mock<MockHttpMessageHandler>();
            mockHttpMessageHandler
                .Protected()
                .Setup<Task<HttpResponseMessage>>(
                    "SendAsync",
                    ItExpr.IsAny<HttpRequestMessage>(),
                    ItExpr.IsAny<CancellationToken>()
                )
                .ReturnsAsync(responseMessage);

            var httpClient = new HttpClient(mockHttpMessageHandler.Object);
            _httpClientFactoryMock.Setup(factory => factory.CreateClient(It.IsAny<string>())).Returns(httpClient);

            // Act
            var result = await _controller.HandleOtherRequests("/test");

            // Assert
            var contentResult = result as ContentResult;
            Assert.IsNotNull(contentResult);
            Assert.AreEqual(200, contentResult.StatusCode);
            Assert.AreEqual("{\"response\":\"success\"}", contentResult.Content);
            Assert.AreEqual("application/json; charset=utf-8", contentResult.ContentType);
        }

    }
}

public class MockHttpMessageHandler : HttpMessageHandler
{
    protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        // Può essere mockato
        return Task.FromResult(new HttpResponseMessage(HttpStatusCode.OK));
    }
}