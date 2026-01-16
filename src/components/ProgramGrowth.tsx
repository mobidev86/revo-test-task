import { useState } from "react";
import type { ProgramGrowthProps } from "@/types";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import UpArrow from "./ui/up-arrow";
import { Progress } from "./ui/progress";
import { GROWTH_DATA_BY_TAB } from "../constants";
import type { GrowthTabId } from "../constants";

export default function ProgramGrowth({ tabs }: ProgramGrowthProps) {
  const [activeTabId, setActiveTabId] = useState<GrowthTabId>("application");

  const currentData = GROWTH_DATA_BY_TAB[activeTabId];

  return (
    <Card className="p-4 sm:p-8 bg-white border-0 shadow-lg rounded-[32px] h-full">
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-2 gap-4 xl:gap-0">
        <div>
          <h3 className="font-bold text-lg sm:text-xl text-[#1C1917]">
            Program Growth
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            New partner acquisition breakdown
          </p>
        </div>

        <div className="flex items-center gap-1 bg-[#F5F5F4] rounded-full p-1 self-start xl:self-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id as GrowthTabId)}
              className={cn(
                "cursor-pointer px-4 py-1.5 text-[10px] sm:text-xs font-bold rounded-full transition-all tracking-wider uppercase",
                activeTabId === tab.id
                  ? "bg-white text-[#1C1917] shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <span className="text-5xl sm:text-6xl font-[400] text-[#1C1917] tracking-tighter">
          {currentData.total}
        </span>
        <div className="flex items-center gap-1 text-[#22C55E] bg-[#DCFCE7] px-2 py-1 rounded-md">
          <UpArrow className="w-3 h-3 fill-current" />
          <span className="text-[10px] sm:text-xs font-bold">This Month</span>
        </div>
      </div>

      <div className="space-y-2">
        {currentData.partners.map((partner, index) => {
          const barColors = [
            "bg-[#1C1917]",
            "bg-[#9ca3af]",
            "bg-[#d1d5db]",
            "bg-[#e5e7eb]",
          ];

          return (
            <div key={partner.name} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#1C1917]">
                  {partner.name}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  {partner.partners} Partners
                </span>
              </div>
              <Progress
                value={partner.progress}
                className="h-2 sm:h-2.5 bg-[#F5F5F4]"
                indicatorClassName={barColors[index] || "bg-[#e5e7eb]"}
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
}
