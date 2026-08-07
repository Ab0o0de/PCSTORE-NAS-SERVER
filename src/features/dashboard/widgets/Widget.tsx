import { cn } from "@/components/_core";

import { widgetVariants } from "./Widget.styles";
import type { WidgetProps } from "./Widget.types";

export function Widget({
  title,
  subtitle,
  actions,
  children,
  className,
}: WidgetProps) {
  return (
    <section className={cn(widgetVariants(), className)}>
      <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>

          {subtitle && (
            <p className="mt-1 text-sm text-slate-500">
              {subtitle}
            </p>
          )}
        </div>

        {actions}
      </header>

      <div className="p-5">
        {children}
      </div>
    </section>
  );
}