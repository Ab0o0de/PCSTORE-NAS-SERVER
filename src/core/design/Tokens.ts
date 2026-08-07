/**
 * PCSTORE Server Design Tokens
 *
 * Single source of truth for reusable design values.
 */

export const Tokens = Object.freeze({
  Colors: {
    Primary:
      "bg-primary text-primary-foreground hover:bg-primary-hover",

    Secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary-hover",

    Success:
      "bg-success text-white",

    Warning:
      "bg-warning text-black",

    Error:
      "bg-error text-white",

    Surface:
      "bg-surface",

    Border:
      "border-border",

    Muted:
      "bg-muted",
  },

  Radius: {
    None: "rounded-none",
    Sm: "rounded-sm",
    Md: "rounded-md",
    Lg: "rounded-lg",
    Xl: "rounded-xl",
    Full: "rounded-full",
  },

  Shadow: {
    None: "",
    Sm: "shadow-sm",
    Md: "shadow",
    Lg: "shadow-lg",
    Xl: "shadow-xl",
  },

  Spacing: {
    Xs: "gap-1",
    Sm: "gap-2",
    Md: "gap-4",
    Lg: "gap-6",
    Xl: "gap-8",
  },

  Transition: {
    Default: "transition-all duration-200 ease-in-out",
    Fast: "transition-all duration-150 ease-in-out",
    Slow: "transition-all duration-300 ease-in-out",
  },

  Focus: {
    Ring:
      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  },
} as const);