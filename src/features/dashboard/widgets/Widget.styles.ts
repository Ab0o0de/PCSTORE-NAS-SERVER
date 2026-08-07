import { createVariant } from "@/components/_core";

export const widgetVariants = createVariant(
  [
    "rounded-xl",
    "border",
    "border-slate-200",
    "bg-white",
    "shadow-sm",
    "transition-all",
  ].join(" ")
);