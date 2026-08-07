/**
 * ============================================================
 * PCSTORE Server
 * Core Branding Engine
 * ------------------------------------------------------------
 * Central Brand Information
 *
 * This file contains immutable branding information shared
 * across the entire application.
 *
 * DO NOT hardcode branding values anywhere else.
 * ============================================================
 */

export interface BrandInfo {
  readonly CompanyName: string;
  readonly ProductName: string;
  readonly ProductDescription: string;
  readonly Version: string;
  readonly Copyright: string;
  readonly SupportEmail: string;
  readonly SupportWebsite: string;
  readonly DefaultLanguage: string;
}

export const Brand: Readonly<BrandInfo> = Object.freeze({
  CompanyName: "PCSTORE",

  ProductName: "PCSTORE Server",

  ProductDescription:
    "Enterprise Server Management Platform for monitoring, administration, networking, storage, virtualization, and infrastructure management.",

  Version: "1.0.0",

  Copyright:
    `© ${new Date().getFullYear()} PCSTORE. All rights reserved.`,

  SupportEmail: "support@pcstore.local",

  SupportWebsite: "https://pcstore.local",

  DefaultLanguage: "en",
});