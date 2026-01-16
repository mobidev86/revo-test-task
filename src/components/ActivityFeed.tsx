import { ChevronDown, Bell } from "lucide-react";
import { useDashboardData } from "../hooks/useDashboardData";
import ActivityItem from "./ActivityItem";

export default function ActivityFeed() {
  const { data, isLoading } = useDashboardData();

  if (isLoading) {
    return (
      <div className="px-4 sm:px-6 pb-2 pt-4">
        <div className="h-16 bg-white rounded-full shadow-sm animate-pulse w-full" />
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 pb-2 pt-4">
      <div className="flex bg-white rounded-full shadow-sm items-center min-h-[56px] pl-3 pr-2 gap-4">
        <div className="flex items-center gap-3 shrink-0 pl-2">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1a1a1a] text-white">
            <Bell className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-bold text-foreground tracking-wide">
              LATEST
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
              Updates
            </span>
          </div>
        </div>

        <div className="h-9 w-px bg-border/40 shrink-0" />

        <div className="flex-1 overflow-x-auto flex items-center gap-3 no-scrollbar activity-feed mask-linear-fade">
          {data?.activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>

        <button className="cursor-pointer flex items-center justify-center h-8 w-8 rounded-full bg-cream hover:bg-muted transition-colors shrink-0 ml-2">
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
