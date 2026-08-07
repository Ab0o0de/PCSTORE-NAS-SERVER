import { cn } from "@/components/_core";

import { Widget } from "./Widget";
import { statCardVariants } from "./StatCard.styles";
import type { StatCardProps } from "./StatCard.types";

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: StatCardProps) {
  return (
    <Widget title={title}>
      <div className={cn(statCardVariants())}>
        <div>
          <div className="text-3xl font-bold">
            {value}
          </div>

          {description && (
            <p className="mt-2 text-sm text-slate-500">
              {description}
            </p>
          )}
        </div>

        <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
          <Icon size={28} />
        </div>
      </div>
    </Widget>
  );
}