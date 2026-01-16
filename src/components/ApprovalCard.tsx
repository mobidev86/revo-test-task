import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { CheckCircle2 } from "lucide-react";

interface ApprovalCardProps {
  avatar: string;
  avatarBg: string;
  name: string;
  description: string;
  time: string;
  avatarColor: string;
}

export default function ApprovalCard({
  avatar,
  avatarBg,
  avatarColor,
  name,
  description,
  time,
}: ApprovalCardProps) {
  return (
    <Card className="flex flex-col p-4 gap-5 bg-white border-0 shadow-sm rounded-[24px] hover:shadow-md transition-shadow h-full">
      <div className="flex items-start justify-between">
        <div
          className={`h-10 w-10 flex items-center justify-center rounded-full ${avatarBg}`}
        >
          <span className={`font-bold text-sm ${avatarColor}`}>{avatar}</span>
        </div>
        <span className="text-xs font-medium text-muted-foreground/60">
          {time}
        </span>
      </div>

      <div className="flex-1">
        <h4 className="font-extrabold text-[#1a1a1a] text-[15px] leading-tight">
          {name}
        </h4>
        <p className="text-[13px] text-muted-foreground font-medium">
          {description}
        </p>
      </div>

      <Button
        variant="ghost"
        className="w-full h-10 text-xs font-bold gap-2 bg-[#F4F4F5] hover:bg-[#F4F4F5]/80 text-[#27272a] rounded-2xl mt-auto"
      >
        <CheckCircle2 className="h-4 w-4" />
        Review
      </Button>
    </Card>
  );
}
