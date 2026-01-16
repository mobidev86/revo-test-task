import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, Send, MessageSquare, Sparkles, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ScrollArea } from "./ui/scroll-area";
import { useDashboardData } from "../hooks/useDashboardData";
import MessageItem from "./ui/message-item";

export default function RightSidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data, isLoading } = useDashboardData();

  const messages = data?.messages || [];
  const avatarStack = messages.slice(0, 8);

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {!mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="cursor-pointer fixed bottom-4 right-4 z-30 lg:hidden flex items-center justify-center h-12 w-12 rounded-full bg-foreground text-white shadow-lg hover:bg-foreground/90 transition-colors"
        >
          <MessageSquare className="h-5 w-5" />
        </button>
      )}

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 no-scrollbar  h-screen  lg:hidden bg-white border-l border-border/30 flex flex-col transition-transform duration-300 w-80",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="cursor-pointer absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <ScrollArea className="flex-1 py-4 pt-14 h-[calc(100vh-56px)] overflow-auto no-scrollbar">
          <div className="space-y-3 px-3">
            {isLoading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex gap-2 p-2">
                    <div className="h-8 w-8 rounded-full bg-muted/20 animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-20 bg-muted/20 animate-pulse rounded" />
                      <div className="h-3 w-full bg-muted/20 animate-pulse rounded" />
                    </div>
                  </div>
                ))
              : messages.map((msg) => (
                  <MessageItem key={msg.id} msg={msg} variant="mobile" />
                ))}
          </div>
        </ScrollArea>

        <div className="p-3 border-t border-border/30">
          <div className="relative mb-2">
            <Textarea
              placeholder="Quick reply..."
              className="pr-10 bg-muted/50 border-0 text-sm min-h-[60px]"
              rows={3}
            />
            <button className="cursor-pointer absolute right-2 bottom-2 h-6 w-6 flex items-center justify-center rounded-full bg-foreground text-white hover:bg-foreground/90 transition-colors">
              <Send className="h-3 w-3" />
            </button>
          </div>

          <Button
            variant="outline"
            className="w-full mb-2 h-8 text-xs justify-start gap-2"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            View Full Inbox
            <span className="ml-auto">↗</span>
          </Button>

          <Button className="w-full h-9 bg-foreground text-white hover:bg-foreground/90 gap-2 text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            AI Chat Assistant
          </Button>
        </div>
      </aside>

      <aside
        className={cn(
          "hidden lg:flex flex-col border-l no-scrollbar border-white sticky top-4 mt-4 h-[calc(100vh-100px)] transition-all duration-300 overflow-auto rounded-[40px] shadow-sm ml-4 bg-[#f1ece978]",
          collapsed ? "w-[88px]" : "w-[400px]"
        )}
      >
        <div className="flex justify-center mt-6 mb-2 transition-all duration-300 z-50 shrink-0">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              "cursor-pointer h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors text-muted-foreground",
              collapsed ? "mb-2" : "mb-10"
            )}
          >
            <ChevronRight
              className={cn(
                "h-6 w-6 transition-transform",
                !collapsed && "rotate-180"
              )}
            />
          </button>
        </div>

        <div className="flex flex-col h-max w-full rounded-[40px] relative">
          {collapsed ? (
            <ScrollArea className="flex-1 w-full rounded-b-[40px]">
              <div className="flex flex-col items-center gap-5 pb-6 w-full">
                {isLoading
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-12 w-12 rounded-2xl bg-muted/20 animate-pulse"
                      />
                    ))
                  : avatarStack.map((user, index) => (
                      <div
                        key={user.id}
                        className="relative group cursor-pointer"
                      >
                        <Avatar className="h-[52px] w-[52px] rounded-2xl border-4 border-white shadow-sm ring-1 ring-black/5">
                          <AvatarImage
                            src={user.avatar}
                            className="rounded-2xl object-cover"
                          />
                          <AvatarFallback className="rounded-2xl">
                            {user.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        {index < 3 && (
                          <span className="absolute -top-1 -right-1 h-6 w-6 bg-[#D2FA57] rounded-full border-[3px] border-white flex items-center justify-center text-[10px] font-bold text-[#1C1917] shadow-sm z-10">
                            {(user.id % 5) + 2}
                          </span>
                        )}
                      </div>
                    ))}
              </div>
            </ScrollArea>
          ) : (
            <>
              <ScrollArea className="flex-1 w-full h-full no-scrollbar">
                <div className="flex flex-col gap-1 px-4 pb-4">
                  {isLoading
                    ? Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex gap-3 p-4 bg-white rounded-2xl shadow-sm mb-3"
                        >
                          <div className="h-12 w-12 rounded-2xl bg-muted/20 animate-pulse" />
                          <div className="flex-1 space-y-2">
                            <div className="h-4 w-24 bg-muted/20 animate-pulse rounded" />
                            <div className="h-4 w-full bg-muted/20 animate-pulse rounded" />
                          </div>
                        </div>
                      ))
                    : messages.map((msg) => (
                        <MessageItem key={msg.id} msg={msg} variant="desktop" />
                      ))}
                </div>
              </ScrollArea>

              <div className="px-5 pb-6 pt-2 w-full mt-auto mb-2 shrink-0 bg-[#f9f4ea]">
                <div className="relative mb-4">
                  <Textarea
                    placeholder="Quick reply..."
                    className="pr-12 min-h-[80px] bg-white border-0 text-sm rounded-2xl shadow-sm placeholder:text-muted-foreground/50 pl-4 py-4"
                    rows={3}
                  />
                  <button className="cursor-pointer absolute right-3 bottom-3 h-8 w-8 flex items-center justify-center rounded-full bg-[#1C1917] text-white hover:bg-black transition-colors shadow-lg">
                    <Send className="h-3.5 w-3.5 ml-0.5" />
                  </button>
                </div>

                <Button
                  variant="outline"
                  className="w-full mb-3 h-12 text-xs sm:text-sm font-bold justify-center px-6 bg-white border border-gray-100 rounded-2xl text-[#1C1917] hover:bg-gray-50 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    View Full Inbox
                  </div>
                  <span className="text-muted-foreground">↗</span>
                </Button>

                <Button className="w-full h-12 bg-[#1C1917] text-white hover:bg-[#1C1917]/90 gap-2 text-xs sm:text-sm font-bold rounded-2xl shadow-lg">
                  <Sparkles className="h-4 w-4" />
                  AI Chat Assistant
                </Button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
