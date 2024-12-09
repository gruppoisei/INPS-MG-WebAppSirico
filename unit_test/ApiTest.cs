using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using INPS_MVC_WebAppSirico.Controllers;
using System.Collections.Generic;
using System.Net;
using Moq.Protected;


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