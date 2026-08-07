namespace PCSTORE.Contracts.System;

public sealed class SystemInfoDto
{
    public required string Hostname { get; init; }

    public required string OperatingSystem { get; init; }

    public required string Kernel { get; init; }

    public required string Architecture { get; init; }

    public required string Framework { get; init; }

    public required int ProcessorCount { get; init; }

    public required DateTime UtcTime { get; init; }
}