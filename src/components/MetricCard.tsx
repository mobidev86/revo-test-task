import type { MetricCardProps } from "@/types";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import TickMark from "./ui/tick-mark";

export default function MetricCard({
  label,
  value,
  description,
  change,
  changeType = "positive",
  iconColor = "bg-lime",
  icon,
}: MetricCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "target":
        return (
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              className="a"
              cx="24"
              cy="24"
              r="21.5"
              stroke="currentColor"
            />
            <circle
              className="a"
              cx="24"
              cy="24"
              r="14.3"
              stroke="currentColor"
            />
            <circle
              className="a"
              cx="24"
              cy="24"
              r="7.41"
              stroke="currentColor"
            />
          </svg>
        );
      case "check":
        return (
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </svg>
        );
      case "clock":
        return (
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );
      default:
        return <TickMark />;
    }
  };

  return (
    <Card className="p-6 bg-white border-0 shadow-lg rounded-[32px] hover:shadow-xl transition-all h-full flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/80 font-bold">
          {label}
        </span>
        <div
          className={cn(
            "h-8 w-8 rounded-full flex items-center justify-center",
            iconColor
          )}
        >
          <IconComponent />
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-4xl text-[#1C1917] font-medium tracking-tight ">
            {value}
          </p>
          <p className="text-xs mt-1 text-muted-foreground font-medium text-[#1C1917]/60">
            {description}
          </p>
        </div>
        {change && (
          <div
            className={cn(
              "px-3 py-1 rounded-md text-xs font-bold mb-1",
              changeType === "positive"
                ? "bg-[#ebfef6] text-[#059669]"
                : "bg-muted text-muted-foreground"
            )}
          >
            {change}
          </div>
        )}
      </div>
    </Card>
  );
}
