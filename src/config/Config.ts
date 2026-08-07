/**
 * ============================================================
 * PCSTORE Server
 * Core Branding Engine
 * ------------------------------------------------------------
 * Central Application Configuration
 *
 * Never hardcode application configuration values.
 * ============================================================
 */

export interface AppConfig {
  readonly ApplicationName: string;
  readonly ApplicationVersion: string;

  readonly Environment:
    | "development"
    | "staging"
    | "production";

  readonly ApiBaseUrl: string;

  readonly Timezone: string;

  readonly DateFormat: string;

  readonly TimeFormat: string;

  readonly DefaultLanguage: string;

  readonly SupportedLanguages: readonly string[];

  readonly DebugMode: boolean;
}

export const Config: Readonly<AppConfig> = Object.freeze({
  ApplicationName: "PCSTORE Server",

  ApplicationVersion: "1.0.0",

  Environment: "development",

  ApiBaseUrl: "http://localhost:5000/api",

  Timezone: "UTC",

  DateFormat: "yyyy-MM-dd",

  TimeFormat: "HH:mm:ss",

  DefaultLanguage: "en",

  SupportedLanguages: Object.freeze([
    "en",
    "ar",
  ]),

  DebugMode: true,
});