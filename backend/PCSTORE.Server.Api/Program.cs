var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/", () =>
{
    return Results.Redirect("/swagger");
});

app.MapGet("/api/system/info", () =>
{
    var os = System.Runtime.InteropServices.RuntimeInformation.OSDescription;
    var arch = System.Runtime.InteropServices.RuntimeInformation.OSArchitecture.ToString();
    var machine = Environment.MachineName;
    var processors = Environment.ProcessorCount;
    var framework = System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription;

    return Results.Ok(new
    {
        hostname = machine,
        operatingSystem = os,
        architecture = arch,
        framework,
        processors,
        utcTime = DateTime.UtcNow
    });
})
.WithName("SystemInfo")
.WithOpenApi();

app.Run();