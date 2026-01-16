import { cn } from "@/lib/utils";

function UpArrow({
  className,
  fill = "none",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      className={cn("h-2.5 w-2.5 sm:h-3 sm:w-3", className)}
      fill={fill}
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 17l9.2-9.2M17 17V7H7"
      />
    </svg>
  );
}

export default UpArrow;
