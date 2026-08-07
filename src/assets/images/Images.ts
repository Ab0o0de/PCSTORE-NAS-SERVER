/**
 * ============================================================
 * PCSTORE Server
 * Core Branding Engine
 * ------------------------------------------------------------
 * Central Image Registry
 *
 * Every application image must be referenced from this file.
 *
 * Never hardcode image paths inside components.
 * ============================================================
 */

export interface ImageRegistry {
  readonly LoginBackground: string;
  readonly DashboardBackground: string;
  readonly EmptyState: string;
  readonly ServerPlaceholder: string;
  readonly DefaultAvatar: string;
  readonly NoImagePlaceholder: string;
}

export const Images: Readonly<ImageRegistry> = Object.freeze({
  LoginBackground:
    "/assets/images/login-background.jpg",

  DashboardBackground:
    "/assets/images/dashboard-background.jpg",

  EmptyState:
    "/assets/images/empty-state.svg",

  ServerPlaceholder:
    "/assets/images/server-placeholder.svg",

  DefaultAvatar:
    "/assets/images/default-avatar.png",

  NoImagePlaceholder:
    "/assets/images/no-image.svg",
});