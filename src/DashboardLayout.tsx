import type { ReactNode } from "react";
import TopNav from "./components/TopNav";
import ActivityFeed from "./components/ActivityFeed";
import MainTabs from "./components/MainTabs";
import SubNavigation from "./components/SubNavigation";
import RightSidebar from "./components/RightSidebar";

export default function DashboardLayout({
  children,
  activeTabId,
  setActiveTabId,
  activeSubTabId,
  setActiveSubTabId,
}: {
  children: ReactNode;
  activeTabId: string;
  setActiveTabId: (id: string) => void;
  activeSubTabId: string;
  setActiveSubTabId: (id: string) => void;
}) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#F5F3F1]">
      <TopNav />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-col flex-1 min-w-0 overflow-y-auto no-scrollbar">
          <div className="flex-shrink-0">
            <ActivityFeed />
            <div className="px-4 sm:px-6 border-solid border-b border-border/50  py-2 bg-[#FBFBF9] w-[calc(100%_-_32px)] sm:w-[calc(100%_-_48px)] mx-auto">
              <MainTabs
                activeTabId={activeTabId}
                setActiveTabId={setActiveTabId}
              />
              {activeTabId === "partners" && (
                <SubNavigation
                  activeSubTabId={activeSubTabId}
                  setActiveSubTabId={setActiveSubTabId}
                />
              )}
            </div>
          </div>

          <main className="flex-1 flex  bg-cream px-4 sm:px-6 gap-4">
            <div className="flex-1  py-3 sm:py-4">{children}</div>
            {activeTabId === "partners" && activeSubTabId === "overview" && (
              <RightSidebar />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
