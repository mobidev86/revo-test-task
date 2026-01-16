import { Menu, Search, Printer, X } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useDashboardData } from "../hooks/useDashboardData";
import { useState } from "react";

export default function TopNav() {
  const { data, isLoading } = useDashboardData();
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="flex flex-col bg-white px-4 sm:px-6 pt-2 pb-2 gap-3">
      <div className="flex items-center gap-2 text-muted-foreground">
        <button className="cursor-pointer hover:bg-black/5 rounded transition-colors cursor-pointer">
          <Menu className="h-4 w-4" />
        </button>
        <div className="h-4 w-px bg-border/50" />
        <div className="flex items-center gap-2 text-xs font-normal">
          <span className="opacity-60">Dashboard</span>
          <span className="opacity-40">&gt;</span>
          <span className="text-foreground">Overview</span>
        </div>
      </div>

      <div className="flex flex-col flex-wrap lg:flex-row items-start lg:items-center justify-between gap-4">
        <h1 className="text-2xl xl:text-3xl font-normal tracking-tight text-[#1a1a1a] md:min-w-[280px]">
          {isLoading ? (
            <span className="inline-block h-8 w-64 bg-muted/20 animate-pulse rounded" />
          ) : (
            `Welcome back, ${data?.user.welcomeName}`
          )}
        </h1>

        <div className="relative w-full lg:max-w-xl lg:px-8 ">
          <Search className="absolute left-3 lg:left-11 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search across campaigns, partners, or assets..."
            className="!pl-10 border-0 rounded bg-transparent shadow-none text-sm placeholder:text-muted-foreground/60 focus-visible:ring-0 px-0 lg:px-10 border-b border-border/30 rounded-none w-full"
          />
          {searchValue && (
            <button
              onClick={() => setSearchValue("")}
              className="absolute right-3 lg:right-11 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex max-xl:flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-widest shrink-0">
          {isLoading ? (
            <div className="h-8 w-64 bg-muted/20 animate-pulse rounded-full" />
          ) : (
            <>
              <button className="cursor-pointer flex items-center justify-center h-7 w-7 rounded-full bg-[#F5F5F4] border border-border/40 hover:bg-muted/30 transition-colors">
                <Printer className="h-4 w-4 text-muted-foreground" />
              </button>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F4] border border-border/40 tracking-normal">
                <span className="opacity-60 text-[10px] font-normal tracking-normal">
                  NAME:
                </span>
                <span className="text-[#1a1a1a] normal-case font-bold text-[10px] capitalize leading-normal tracking-normal">
                  {data?.user.name}
                </span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F4] border border-border/40 tracking-normal">
                <span className="opacity-60 text-[10px] font-normal tracking-normal">
                  ID:
                </span>
                <span className="text-[#1a1a1a] normal-case font-bold text-[10px] capitalize leading-normal tracking-normal">
                  {data?.user.id}
                </span>
              </div>

              <Badge
                variant="outline"
                className="border flex items-center border-[#E0F7E9] bg-[#E0F7E9] text-[#1B4D2E] font-medium px-3 py-1.5 text-[10px] uppercase tracking-normal rounded-full"
              >
                STATUS:{" "}
                <span className="text-[#1B4D2E] font-extrabold ml-1 capitalize leading-normal tracking-normal">
                  {data?.user.status}
                </span>
              </Badge>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
