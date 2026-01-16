import { Zap } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { BarChart, Bar, ResponsiveContainer, Cell, LabelList } from "recharts";
import type { FunnelCardProps } from "@/types";
import {
  FUNNEL_TABS,
  FUNNEL_STATS_BY_TAB,
  type FunnelTabId,
} from "@/constants";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function FunnelCard({ data: _data }: FunnelCardProps) {
  const [activeTab, setActiveTab] = useState<FunnelTabId>("last-quarter");
  const activeData = FUNNEL_STATS_BY_TAB[activeTab];

  return (
    <Card className="p-4 sm:p-8 bg-[#D2FA57] shadow-lg rounded-[32px] flex flex-col justify-between border-0 h-full relative overflow-hidden">
      <div>
        <div className="flex xl:mb-14 flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2 sm:gap-0 relative z-10">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 fill-black text-black" />
            <span className="text-sm font-bold text-black tracking-tight">
              Partner Funnel
            </span>
          </div>
          <div className="flex gap-1 sm:gap-2 flex-wrap">
            {FUNNEL_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <Button
                  key={tab.id}
                  size="sm"
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "rounded-full transition-all text-black cursor-pointer",
                    isActive
                      ? "h-8 px-4 text-xs font-bold bg-[#1C1917] text-white hover:bg-[#1C1917]/90"
                      : "h-6 sm:h-7 px-2 sm:px-3 text-[10px] sm:text-xs hover:bg-lime-light bg-[#BCDE44]",
                    !isActive &&
                      tab.id === "influenced" &&
                      "hidden md:inline-flex"
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="mb-5 relative z-10">
          <div className="flex items-center gap-3">
            <span className="text-6xl sm:text-[74px] font-semibold tracking-tighter text-[#1C1917] leading-none">
              {activeData.percentage}
            </span>
            <span className="text-xs sm:text-[13px] font-bold text-[#1C1917] leading-[1.3] max-w-[100px] mt-2">
              {activeData.growthValue}{" "}
              {activeData.growthLabel.split(" ").map((word, i, arr) => (
                <span key={i}>
                  {word}
                  {i === 1 && <br />}
                  {i !== arr.length - 1 && " "}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      <div className="h-48 sm:h-40 w-full relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={activeData.graphData}
            margin={{ top: 30, right: 0, left: 0, bottom: 0 }}
          >
            <Bar dataKey="num" radius={[8, 8, 8, 8]}>
              {activeData.graphData.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={activeData.graphData[index].fill}
                />
              ))}
              <LabelList
                dataKey="num"
                content={(props: any) => {
                  const { x, y, width, index } = props;
                  const item = activeData.graphData[index];
                  if (!item) return null;
                  return (
                    <g>
                      <text
                        x={x + width / 2}
                        y={y - 25}
                        fill="#000"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ fontWeight: "bold", fontSize: "14px" }}
                      >
                        {item.value}
                      </text>
                      <text
                        x={x + width / 2}
                        y={y - 10}
                        fill="#666"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                          fontSize: "10px",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.label}
                      </text>
                    </g>
                  );
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
