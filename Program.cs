using Microsoft.Extensions.FileProviders;
using System.Net.WebSockets;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpContextAccessor();

// Add services to the container
builder.Services.AddControllersWithViews();
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/dist";
});

// Abilitare HttpClientFactory
builder.Services.AddHttpClient();

var app = builder.Build();

// Use middleware
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseSpaStaticFiles();
app.UseWebSockets();
app.UseRouting();

app.UseAuthorization();

// Configurazione SPA
app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";
    spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(
            Path.Combine(Directory.GetCurrentDirectory(), "ClientApp", "dist"))
    };
});

app.Use(async (context, next) =>
{
    if (context.Request.Path.StartsWithSegments("/api/notification") && context.WebSockets.IsWebSocketRequest)
    {
        var webSocket = await context.WebSockets.AcceptWebSocketAsync();
        using var client = new ClientWebSocket();

        var targetUri = new Uri(Environment.GetEnvironmentVariable("WEB_SOCKET") + context.Request.QueryString);
        await client.ConnectAsync(targetUri, CancellationToken.None);

        // Forward WebSocket messages between client and SignalR backend
        var task1 = Task.Run(async () =>
        {
            var buffer = new byte[1024 * 4];
            WebSocketReceiveResult result;
            while (webSocket.State == WebSocketState.Open && client.State == WebSocketState.Open)
            {
                result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                if (result.MessageType == WebSocketMessageType.Close)
                {
                    await client.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing", CancellationToken.None);
                    break;
                }
                await client.SendAsync(new ArraySegment<byte>(buffer, 0, result.Count), result.MessageType, result.EndOfMessage, CancellationToken.None);
            }
        });

        var task2 = Task.Run(async () =>
        {
            var buffer = new byte[1024 * 4];
            WebSocketReceiveResult result;
            while (webSocket.State == WebSocketState.Open && client.State == WebSocketState.Open)
            {
                result = await client.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                if (result.MessageType == WebSocketMessageType.Close)
                {
                    await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing", CancellationToken.None);
                    break;
                }
                await webSocket.SendAsync(new ArraySegment<byte>(buffer, 0, result.Count), result.MessageType, result.EndOfMessage, CancellationToken.None);
            }
        });

        await Task.WhenAll(task1, task2);
    }
    else
    {
        await next();
    }
});


app.MapControllers();

app.Run();
