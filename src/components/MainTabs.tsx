import { cn } from "@/lib/utils";
import { useDashboardData } from "../hooks/useDashboardData";

interface MainTabsProps {
  activeTabId: string;
  setActiveTabId: (id: string) => void;
}

export default function MainTabs({
  activeTabId,
  setActiveTabId,
}: MainTabsProps) {
  const { data, isLoading } = useDashboardData();

  if (isLoading) {
    return (
      <div className="flex items-center gap-1  py-2 border-b border-border/30">
        <div className="h-10 bg-muted/20 animate-pulse rounded w-full max-w-2xl" />
      </div>
    );
  }

  return (
    <div className="overflow-auto w-full flex items-center gap-1 xl:grid xl:grid-cols-8 gap-1 pt-2 border-b border-border/60 overflow-x-auto activity-feed">
      {data?.mainTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTabId(tab.id)}
          className={cn(
            "cursor-pointer flex flex-col items-start px-2 sm:px-5 py-1.5 sm:py-2 rounded-tl-md rounded-tr-md xl:rounded-tl-2xl xl:rounded-tr-2xl transition-all flex-shrink-0 text-left",
            activeTabId === tab.id
              ? "bg-lime text-foreground"
              : "hover:bg-cream-dark text-muted-foreground hover:text-foreground"
          )}
        >
          <span
            className={cn(
              "text-xs sm:text-sm font-medium",
              activeTabId === tab.id && "text-foreground"
            )}
          >
            {tab.label}
          </span>
          <span
            className={cn(
              "text-[10px] sm:text-xs hidden sm:block",
              activeTabId === tab.id
                ? "text-foreground/70"
                : "text-muted-foreground"
            )}
          >
            {tab.value}
          </span>
        </button>
      ))}
    </div>
  );
}
