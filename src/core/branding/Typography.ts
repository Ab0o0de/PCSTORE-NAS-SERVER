/**
 * ============================================================
 * PCSTORE Server
 * Core Branding Engine
 * ------------------------------------------------------------
 * Central Typography System
 *
 * All typography, spacing, shadows, radius and animation
 * tokens are defined here.
 *
 * Never hardcode these values inside components.
 * ============================================================
 */

export interface TypographySystem {
  readonly FontFamily: {
    readonly Sans: string;
    readonly Mono: string;
  };

  readonly FontSize: {
    readonly XS: string;
    readonly SM: string;
    readonly MD: string;
    readonly LG: string;
    readonly XL: string;
    readonly XXL: string;
    readonly Display: string;
  };

  readonly FontWeight: {
    readonly Light: number;
    readonly Regular: number;
    readonly Medium: number;
    readonly SemiBold: number;
    readonly Bold: number;
    readonly ExtraBold: number;
  };

  readonly LineHeight: {
    readonly Tight: number;
    readonly Normal: number;
    readonly Relaxed: number;
  };

  readonly LetterSpacing: {
    readonly Tight: string;
    readonly Normal: string;
    readonly Wide: string;
  };

  readonly BorderRadius: {
    readonly None: string;
    readonly SM: string;
    readonly MD: string;
    readonly LG: string;
    readonly XL: string;
    readonly Full: string;
  };

  readonly Spacing: {
    readonly XS: string;
    readonly SM: string;
    readonly MD: string;
    readonly LG: string;
    readonly XL: string;
    readonly XXL: string;
  };

  readonly Shadow: {
    readonly SM: string;
    readonly MD: string;
    readonly LG: string;
    readonly XL: string;
  };

  readonly Animation: {
    readonly Fast: string;
    readonly Normal: string;
    readonly Slow: string;
  };

  readonly Transition: {
    readonly Fast: string;
    readonly Normal: string;
    readonly Slow: string;
  };
}

export const Typography: Readonly<TypographySystem> = Object.freeze({
  FontFamily: Object.freeze({
    Sans:
      '"Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',

    Mono:
      '"JetBrains Mono", "Fira Code", Consolas, monospace',
  }),

  FontSize: Object.freeze({
    XS: "0.75rem",
    SM: "0.875rem",
    MD: "1rem",
    LG: "1.125rem",
    XL: "1.25rem",
    XXL: "1.5rem",
    Display: "2.25rem",
  }),

  FontWeight: Object.freeze({
    Light: 300,
    Regular: 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
  }),

  LineHeight: Object.freeze({
    Tight: 1.2,
    Normal: 1.5,
    Relaxed: 1.8,
  }),

  LetterSpacing: Object.freeze({
    Tight: "-0.02em",
    Normal: "0em",
    Wide: "0.05em",
  }),

  BorderRadius: Object.freeze({
    None: "0",
    SM: "4px",
    MD: "8px",
    LG: "12px",
    XL: "16px",
    Full: "9999px",
  }),

  Spacing: Object.freeze({
    XS: "0.25rem",
    SM: "0.5rem",
    MD: "1rem",
    LG: "1.5rem",
    XL: "2rem",
    XXL: "3rem",
  }),

  Shadow: Object.freeze({
    SM: "0 1px 2px rgba(0,0,0,0.05)",
    MD: "0 4px 6px rgba(0,0,0,0.10)",
    LG: "0 10px 15px rgba(0,0,0,0.15)",
    XL: "0 20px 25px rgba(0,0,0,0.20)",
  }),

  Animation: Object.freeze({
    Fast: "150ms",
    Normal: "300ms",
    Slow: "500ms",
  }),

  Transition: Object.freeze({
    Fast: "150ms ease-in-out",
    Normal: "300ms ease-in-out",
    Slow: "500ms ease-in-out",
  }),
});