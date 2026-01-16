import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import type { MessageItemProps } from "@/types";

const MessageItem = ({ msg, variant = "desktop" }: MessageItemProps) => {
  const isMobile = variant === "mobile";
  return (
    <div
      className={cn(
        "flex rounded-2xl hover:bg-white/80 transition-all cursor-pointer bg-white p-4 shadow-sm mb-3",
        isMobile ? "gap-2" : "gap-3"
      )}
    >
      <div className="relative flex-shrink-0">
        <Avatar
          className={cn("rounded-2xl", isMobile ? "h-10 w-10" : "h-12 w-12")}
        >
          <AvatarImage src={msg.avatar} className="rounded-2xl object-cover" />
          <AvatarFallback className="rounded-2xl">{msg.name[0]}</AvatarFallback>
        </Avatar>
        <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#D2FA57] rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#1C1917]">
          {(msg.id % 5) + 1}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span
            className={cn(
              "font-bold text-[#1C1917]",
              isMobile ? "text-xs" : "text-sm"
            )}
          >
            {msg.name}
          </span>
          <span
            className={cn(
              "text-muted-foreground/60 font-medium",
              isMobile ? "text-[9px]" : "text-[10px]"
            )}
          >
            {msg.time}
          </span>
        </div>
        <p
          className={cn(
            "text-muted-foreground/80 line-clamp-2 leading-tight font-medium",
            isMobile ? "text-[11px]" : "text-xs"
          )}
        >
          {msg.message}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
