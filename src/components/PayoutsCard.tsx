import { Zap } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BarChart, Bar, ResponsiveContainer, Cell, LabelList } from "recharts";
import type { PayoutsCardProps } from "@/types";
import { PAYOUTS_DATA, PAYOUTS_LAST_QUARTER } from "@/constants";

export default function PayoutsCard({ data: _data }: PayoutsCardProps) {
  return (
    <Card className="p-4 sm:p-8 bg-white border-0 shadow-lg rounded-[32px] h-full flex flex-col justify-between">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 bg-white border border-border/40 rounded-full px-3 py-1.5 shadow-xs">
          <Zap className="h-4 w-4 fill-black text-black" />
          <span className="text-xs font-semibold text-black tracking-tight">
            Payouts last quarter
          </span>
        </div>
        <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
          <AvatarImage src="https://i.pravatar.cc/40?img=9" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-wrap items-center justify-between mb-1 mt-0">
        <span className="md:text-[45px] xl:text-[62px] font-semibold tracking-tighter text-[#1C1917] leading-none">
          +{PAYOUTS_LAST_QUARTER?.payoutChange}%
        </span>
        <span className="text-sm font-bold text-[#1C1917] mt-auto mb-4">
          ${PAYOUTS_LAST_QUARTER?.payoutPrice} m
        </span>
      </div>

      <div className="h-40 sm:h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={PAYOUTS_DATA}
            margin={{ top: 0, right: 0, left: 0, bottom: 20 }}
            barCategoryGap="20%"
          >
            <Bar dataKey="value" radius={[20, 20, 20, 20]}>
              {PAYOUTS_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList
                dataKey="month"
                position="bottom"
                offset={10}
                style={{
                  fontSize: "11px",
                  fill: "#a1a1aa",
                  fontWeight: 600,
                  fontFamily: "inherit",
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
