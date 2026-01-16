import { useState } from "react";
import { ChevronDown, Search, Check, X } from "lucide-react";
import { Input } from "./ui/input";
import { DateRangePicker } from "./ui/date-range-picker";
import { cn } from "@/lib/utils";
import { useDashboardData } from "../hooks/useDashboardData";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SubNavigationProps {
  activeSubTabId: string;
  setActiveSubTabId: (id: string) => void;
}

export default function SubNavigation({
  activeSubTabId,
  setActiveSubTabId,
}: SubNavigationProps) {
  const { data, isLoading } = useDashboardData();
  const [selectedStatus, setSelectedStatus] = useState<string[]>(["Active"]);
  const [selectedType, setSelectedType] = useState<string[]>(["Growth"]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [partnerSearchValue, setPartnerSearchValue] = useState("");

  const toggleStatus = (status: string) => {
    setSelectedStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const toggleType = (type: string) => {
    setSelectedType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-between py-2 sm:py-3 ">
        <div className="h-8 bg-muted/20 animate-pulse rounded w-1/3" />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="w-full">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar border-b border-b-border/50">
          {data?.subTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTabId(tab.id)}
              className={cn(
                "cursor-pointer px-2 py-3 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap border-b-2",
                activeSubTabId === tab.id
                  ? "border-foreground bg-white text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border/50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeSubTabId === "overview" ? (
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-2 sm:py-3 gap-3 lg:gap-0 border-[inherit] shadow-[0_0_1px_lightgray] p-2.5 rounded-[0_0_20px_20px]"
        >
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-2 bg-white rounded-full border border-border/40 px-3 py-1.5 shadow-none">
              <span className="text-xs font-extrabold text-foreground ">
                Partners
              </span>
              <span className="text-muted-foreground/40">/</span>
              <span className="text-xs font-bold text-muted-foreground flex items-center gap-1 cursor-pointer hover:text-foreground">
                Overview <ChevronDown className="h-3 w-3" />
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground pl-2 border-l border-border/40">
              <span className="opacity-70">Last synced:</span>
              <span className="font-medium text-foreground">Just now</span>
              <span className="ml-1 cursor-pointer hover:rotate-180 transition-transform">
                ↻
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-1 px-5 md:px-10 xl:px-14">
            <div className="relative flex-1">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40" />
              <Input
                value={partnerSearchValue}
                onChange={(e) => setPartnerSearchValue(e.target.value)}
                placeholder="Search Partners..."
                className="pl-8 h-9 !px-7 w-full shadow-none bg-transparent border-0 border-b border-border/30 rounded-none focus-visible:ring-0 px-0 text-xs sm:text-sm placeholder:text-muted-foreground/60 placeholder:text-center text-start "
              />
              {partnerSearchValue && (
                <button
                  onClick={() => setPartnerSearchValue("")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto overflow-x-auto no-scrollbar">
            <DateRangePicker />

            <div className="h-4 w-px bg-border/40 mx-1" />

            <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <PopoverTrigger asChild>
                <button className="cursor-pointer flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
                  <span>Filter</span>
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="w-56 p-0 shadow-xl border-border/40"
                align="end"
              >
                <div className="p-3 border-b border-border/40 bg-muted/5">
                  <span className="text-xs font-semibold text-foreground">
                    Filter
                  </span>
                </div>

                <div className="py-2">
                  <div className="px-3 py-1.5">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Status
                    </span>
                  </div>
                  <div className="space-y-1">
                    {["Active", "Pending", "Inactive"].map((status) => {
                      const isSelected = selectedStatus.includes(status);
                      return (
                        <div
                          key={status}
                          onClick={() => toggleStatus(status)}
                          className="flex items-center gap-2 px-3 py-1.5 transition-colors hover:bg-muted/30 cursor-pointer group"
                        >
                          <div
                            className={cn(
                              "h-3.5 w-3.5 rounded border flex items-center justify-center transition-colors shadow-sm",
                              isSelected
                                ? "bg-foreground border-foreground text-background"
                                : "bg-white border-border/80"
                            )}
                          >
                            {isSelected && (
                              <Check className="h-2.5 w-2.5" strokeWidth={3} />
                            )}
                          </div>
                          <span
                            className={cn(
                              "text-xs",
                              isSelected
                                ? "text-foreground font-semibold"
                                : "text-muted-foreground"
                            )}
                          >
                            {status}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="h-px bg-border/40 mx-2" />

                <div className="py-2">
                  <div className="px-3 py-1.5">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Type
                    </span>
                  </div>
                  <div className="space-y-1">
                    {["Enterprise", "Growth", "Starter"].map((type) => {
                      const isSelected = selectedType.includes(type);
                      return (
                        <div
                          key={type}
                          onClick={() => toggleType(type)}
                          className="flex items-center gap-2 px-3 py-1.5 transition-colors hover:bg-muted/30 cursor-pointer group"
                        >
                          <div
                            className={cn(
                              "h-3.5 w-3.5 rounded border flex items-center justify-center transition-colors shadow-sm",
                              isSelected
                                ? "bg-foreground border-foreground text-background"
                                : "bg-white border-border/80"
                            )}
                          >
                            {isSelected && (
                              <Check className="h-2.5 w-2.5" strokeWidth={3} />
                            )}
                          </div>
                          <span
                            className={cn(
                              "text-xs",
                              isSelected
                                ? "text-foreground font-semibold"
                                : "text-muted-foreground"
                            )}
                          >
                            {type}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-2 border-t border-border/40 bg-muted/5 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedStatus([]);
                      setSelectedType([]);
                    }}
                    className="text-[10px] font-medium text-muted-foreground hover:text-foreground px-2 py-1 cursor-pointer"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="text-[10px] font-medium bg-foreground text-background px-3 py-1 rounded-md hover:opacity-90 cursor-pointer transition-opacity shadow-sm"
                  >
                    Apply
                  </button>
                </div>
              </PopoverContent>
            </Popover>

            <button className="cursor-pointer flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors ml-2">
              <span>Export</span>
            </button>
            <div className="h-4 w-px bg-border/40 mx-1" />
            <div className="text-muted-foreground cursor-pointer hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="6" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="18" cy="12" r="2" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
