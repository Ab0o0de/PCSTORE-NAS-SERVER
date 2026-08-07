import { forwardRef, memo } from "react";

import { cn } from "@/components/_core";
import { Spinner } from "@/components/Spinner";

import { buttonVariants } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      leftIcon,
      rightIcon,
      loading = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className
        )}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Spinner size={16} />
            <span>{children}</span>
          </>
        ) : (
          <>
            {leftIcon}
            <span>{children}</span>
            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

ButtonComponent.displayName = "Button";

export const Button = memo(ButtonComponent);