export interface MessageItemProps {
  msg: any;
  variant?: "mobile" | "desktop";
}

export type FunnelCardData = {
  label: string;
  value: string;
  barWidth: string;
  height: string;
  isDark?: boolean;
};

export interface FunnelCardProps {
  data: FunnelCardData[];
}

export type GrowthTab = { id: string; label: string };
export type GrowthPartner = {
  name: string;
  partners: number;
  progress: number;
};

export interface ProgramGrowthProps {
  tabs: readonly GrowthTab[];
}

export interface MetricCardProps {
  id?: string;
  label: string;
  value: string;
  description: string;
  change?: string;
  changeType?: "positive" | "neutral";
  iconColor?: string;
  icon?: "target" | "check" | "clock";
}

export type PayoutsCardData = {
  month: string;
  height: number;
};

export interface PayoutsCardProps {
  data: PayoutsCardData[];
}

export type ApprovalRequest = {
  id: number;
  avatar: string;
  avatarBg: string;
  avatarColor: string;
  name: string;
  description: string;
  time: string;
};

export interface NeedsApprovalProps {
  requests: ApprovalRequest[];
}
