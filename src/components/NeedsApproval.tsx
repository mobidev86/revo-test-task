import {} from "lucide-react";
import ApprovalCard from "./ApprovalCard";
import type { NeedsApprovalProps } from "@/types";

export default function NeedsApproval({ requests }: NeedsApprovalProps) {
  return (
    <div className="bg-[#fefbea] no-scrollbar rounded-xl sm:rounded-3xl p-4 sm:p-6 border-l-4 border-l-[#FFC107]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3 sm:gap-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#FFE0B2]/40 text-[#F59E0B]">
            <span className="flex items-center justify-center border-2 border-[#F59E0B] rounded-full w-5 h-5 sm:w-6 sm:h-6 font-bold text-xs sm:text-sm">
              !
            </span>
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg text-[#1a1a1a]">
              Needs Approval
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              {requests.length} requests pending your review
            </p>
          </div>
        </div>
        <button className="cursor-pointer text-xs font-bold text-[#D97706] bg-white hover:bg-white/80 active:scale-95 transition-all shadow-sm rounded-full px-4 py-2 uppercase tracking-wide border border-[#fefbea]">
          APPROVE ALL
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
        {requests.map((request) => (
          <ApprovalCard
            key={request.id}
            avatar={request.avatar}
            avatarBg={request.avatarBg}
            avatarColor={request.avatarColor}
            name={request.name}
            description={request.description}
            time={request.time}
          />
        ))}
      </div>
    </div>
  );
}
