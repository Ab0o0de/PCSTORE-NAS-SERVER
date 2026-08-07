/**
 * ============================================================
 * PCSTORE Server
 * Core Branding Engine
 * ------------------------------------------------------------
 * Central Logo Registry
 *
 * Every application logo must be referenced from this file.
 *
 * Never import image assets directly inside components.
 * ============================================================
 */

export interface LogoRegistry {
  readonly Main: string;
  readonly Mini: string;
  readonly Sidebar: string;
  readonly Login: string;
  readonly Splash: string;
  readonly Favicon: string;
}

/**
 * Logo Assets
 *
 * Replace these paths with your actual assets.
 *
 * Example:
 * /assets/branding/logo.svg
 */

export const Logos: Readonly<LogoRegistry> = Object.freeze({
  Main: "/assets/branding/logo.svg",

  Mini: "/assets/branding/logo-mini.svg",

  Sidebar: "/assets/branding/logo-sidebar.svg",

  Login: "/assets/branding/logo-login.svg",

  Splash: "/assets/branding/logo-splash.svg",

  Favicon: "/favicon.ico",
});
