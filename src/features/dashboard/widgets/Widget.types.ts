import type { ReactNode } from "react";

export interface WidgetProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly actions?: ReactNode;
  readonly children: ReactNode;
  readonly className?: string;
}