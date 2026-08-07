/**
 * ============================================================
 * PCSTORE Server
 * Core Branding Engine
 * ------------------------------------------------------------
 * Central Color Palette
 *
 * All application colors must be defined here.
 * Never use inline hex values in components.
 * ============================================================
 */

export interface ColorPalette {
  readonly Primary: {
    readonly Main: string;
    readonly Light: string;
    readonly Dark: string;
    readonly Contrast: string;
  };

  readonly Secondary: {
    readonly Main: string;
    readonly Light: string;
    readonly Dark: string;
    readonly Contrast: string;
  };

  readonly Accent: {
    readonly Blue: string;
    readonly Purple: string;
    readonly Cyan: string;
    readonly Orange: string;
  };

  readonly Semantic: {
    readonly Success: string;
    readonly Warning: string;
    readonly Error: string;
    readonly Info: string;
  };

  readonly Background: {
    readonly Primary: string;
    readonly Secondary: string;
    readonly Tertiary: string;
  };

  readonly Surface: {
    readonly Primary: string;
    readonly Secondary: string;
    readonly Elevated: string;
  };

  readonly Border: {
    readonly Light: string;
    readonly Default: string;
    readonly Strong: string;
  };

  readonly Text: {
    readonly Primary: string;
    readonly Secondary: string;
    readonly Muted: string;
    readonly Inverse: string;
    readonly Disabled: string;
  };

  readonly Sidebar: {
    readonly Background: string;
    readonly Hover: string;
    readonly Active: string;
    readonly Text: string;
  };

  readonly Topbar: {
    readonly Background: string;
    readonly Border: string;
    readonly Text: string;
  };

  readonly Status: {
    readonly Online: string;
    readonly Offline: string;
    readonly Busy: string;
    readonly Maintenance: string;
  };

  readonly Hover: {
    readonly Primary: string;
    readonly Secondary: string;
    readonly Surface: string;
  };

  readonly Focus: {
    readonly Ring: string;
    readonly Outline: string;
  };

  readonly Disabled: {
    readonly Background: string;
    readonly Text: string;
    readonly Border: string;
  };
}

export const Colors: Readonly<ColorPalette> = Object.freeze({
  Primary: Object.freeze({
    Main: "#2563EB",
    Light: "#60A5FA",
    Dark: "#1D4ED8",
    Contrast: "#FFFFFF",
  }),

  Secondary: Object.freeze({
    Main: "#475569",
    Light: "#64748B",
    Dark: "#334155",
    Contrast: "#FFFFFF",
  }),

  Accent: Object.freeze({
    Blue: "#0EA5E9",
    Purple: "#8B5CF6",
    Cyan: "#06B6D4",
    Orange: "#F97316",
  }),

  Semantic: Object.freeze({
    Success: "#22C55E",
    Warning: "#F59E0B",
    Error: "#EF4444",
    Info: "#3B82F6",
  }),

  Background: Object.freeze({
    Primary: "#F8FAFC",
    Secondary: "#F1F5F9",
    Tertiary: "#E2E8F0",
  }),

  Surface: Object.freeze({
    Primary: "#FFFFFF",
    Secondary: "#F8FAFC",
    Elevated: "#FFFFFF",
  }),

  Border: Object.freeze({
    Light: "#E5E7EB",
    Default: "#CBD5E1",
    Strong: "#94A3B8",
  }),

  Text: Object.freeze({
    Primary: "#0F172A",
    Secondary: "#475569",
    Muted: "#64748B",
    Inverse: "#FFFFFF",
    Disabled: "#94A3B8",
  }),

  Sidebar: Object.freeze({
    Background: "#0F172A",
    Hover: "#1E293B",
    Active: "#2563EB",
    Text: "#F8FAFC",
  }),

  Topbar: Object.freeze({
    Background: "#FFFFFF",
    Border: "#E5E7EB",
    Text: "#0F172A",
  }),

  Status: Object.freeze({
    Online: "#22C55E",
    Offline: "#64748B",
    Busy: "#EF4444",
    Maintenance: "#F59E0B",
  }),

  Hover: Object.freeze({
    Primary: "#1D4ED8",
    Secondary: "#334155",
    Surface: "#F1F5F9",
  }),

  Focus: Object.freeze({
    Ring: "#93C5FD",
    Outline: "#2563EB",
  }),

  Disabled: Object.freeze({
    Background: "#F1F5F9",
    Text: "#94A3B8",
    Border: "#CBD5E1",
  }),
});
