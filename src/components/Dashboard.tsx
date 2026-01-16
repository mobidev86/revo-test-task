import { useState } from "react";
import DashboardLayout from "@/DashboardLayout";
import NeedsApproval from "./NeedsApproval";
import PayoutsCard from "./PayoutsCard";
import FunnelCard from "./FunnelCard";
import MetricCard from "./MetricCard";
import ProgramGrowth from "./ProgramGrowth";
import ComingSoon from "./ComingSoon";
import { useDashboardData } from "../hooks/useDashboardData";
import DashboardSkeleton from "./ui/dashboard-skeleton";

export default function Dashboard() {
  const { data, isLoading, isError } = useDashboardData();
  const [activeTabId, setActiveTabId] = useState("partners");
  const [activeSubTabId, setActiveSubTabId] = useState("overview");

  if (isLoading) {
    return (
      <DashboardLayout
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
        activeSubTabId={activeSubTabId}
        setActiveSubTabId={setActiveSubTabId}
      >
        <DashboardSkeleton />
      </DashboardLayout>
    );
  }

  if (isError || !data) {
    return (
      <DashboardLayout
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
        activeSubTabId={activeSubTabId}
        setActiveSubTabId={setActiveSubTabId}
      >
        <div className="flex items-center justify-center h-64 text-red-500">
          Failed to load dashboard data.
        </div>
      </DashboardLayout>
    );
  }

  const activeTab = data.mainTabs.find((t) => t.id === activeTabId);

  return (
    <DashboardLayout
      activeTabId={activeTabId}
      setActiveTabId={setActiveTabId}
      activeSubTabId={activeSubTabId}
      setActiveSubTabId={setActiveSubTabId}
    >
      {activeTabId === "partners" && activeSubTabId === "overview" ? (
        <div className="space-y-4 sm:space-y-6">
          <NeedsApproval requests={data.approvalRequests} />

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6">
            <div className="xl:col-span-4">
              <PayoutsCard data={data.payoutsChartData} />
            </div>
            <div className="xl:col-span-8">
              <FunnelCard data={data.funnelData} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {data.metricCardsData.map((metric) => (
              <MetricCard
                key={metric.id}
                label={metric.label}
                value={metric.value}
                description={metric.description}
                change={metric.change}
                changeType={metric.changeType}
                iconColor={metric.iconColor}
                icon={metric.icon}
              />
            ))}
          </div>

          <ProgramGrowth tabs={data.growthTabs} />
        </div>
      ) : (
        <ComingSoon tabLabel={activeTab?.label || "Feature"} subTabLabel={activeSubTabId}/>
      )}
    </DashboardLayout>
  );
}
