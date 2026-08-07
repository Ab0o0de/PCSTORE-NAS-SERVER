import { cva, type VariantProps } from "class-variance-authority";

/**
 * Centralized wrapper around CVA.
 * Every UI component should create its variants from here.
 */
export const createVariant = cva;

export type { VariantProps };