import { memo } from "react";

export interface SpinnerProps {
  readonly size?: number;
  readonly className?: string;
}

function SpinnerComponent({
  size = 16,
  className = "",
}: SpinnerProps) {
  return (
    <span
      className={`inline-block animate-spin rounded-full border-2 border-current border-r-transparent ${className}`}
      style={{
        width: size,
        height: size,
      }}
      aria-hidden="true"
    />
  );
}

export const Spinner = memo(SpinnerComponent);