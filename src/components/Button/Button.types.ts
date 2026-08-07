import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import type { VariantProps } from "@/components/_core";
import { buttonVariants } from "./Button.styles";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  readonly leftIcon?: ReactNode;
  readonly rightIcon?: ReactNode;
  readonly loading?: boolean;
  readonly fullWidth?: boolean;
}