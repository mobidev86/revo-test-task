export const MESSAGES = [
  {
    id: 1,
    name: "Sarah Jenkins",
    avatar: "https://i.pravatar.cc/40?img=1",
    time: "2m ago",
    message:
      "The new assets for the campaign look amazing! Can we schedule a call to discuss the rollout?",
  },
  {
    id: 2,
    name: "Mike Ross",
    avatar: "https://i.pravatar.cc/40?img=2",
    time: "1h ago",
    message:
      "Just sent over the revised agreement. Let me know if you need anything else modified.",
  },
  {
    id: 3,
    name: "Elena Fisher",
    avatar: "https://i.pravatar.cc/40?img=3",
    time: "3h ago",
    message:
      'I have some questions about the attribution window for the "Summer Glow" bundle.',
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "https://i.pravatar.cc/40?img=4",
    time: "5h ago",
    message:
      "The referral links are working perfectly now. Thanks for the quick fix on the tracking!",
  },
  {
    id: 5,
    name: "Alex Morgan",
    avatar: "https://i.pravatar.cc/40?img=5",
    time: "6h ago",
    message: "Can we push the meeting to next Tuesday?",
  },
  {
    id: 6,
    name: "Jessica Lee",
    avatar: "https://i.pravatar.cc/40?img=6",
    time: "1d ago",
    message: "Invoice #4022 has been paid. Thanks!",
  },
];

export const GROWTH_TABS = [
  { id: "application", label: "APPLICATION" },
  { id: "product", label: "PRODUCT" },
  { id: "campaign", label: "CAMPAIGN" },
] as const;

export type GrowthTabId = (typeof GROWTH_TABS)[number]["id"];

export const GROWTH_DATA_BY_TAB: Record<
  GrowthTabId,
  {
    total: string;
    partners: { name: string; partners: number; progress: number }[];
  }
> = {
  application: {
    total: "+124",
    partners: [
      { name: "Levanta", partners: 45, progress: 100 },
      { name: "Impact", partners: 33, progress: 70 },
      { name: "Social Snowball", partners: 28, progress: 60 },
      { name: "Shopify Collabs", partners: 19, progress: 40 },
    ],
  },
  product: {
    total: "+86",
    partners: [
      { name: "Amazon", partners: 30, progress: 90 },
      { name: "Walmart", partners: 22, progress: 60 },
      { name: "eBay", partners: 18, progress: 50 },
      { name: "Etsy", partners: 12, progress: 40 },
    ],
  },
  campaign: {
    total: "+210",
    partners: [
      { name: "TikTok Shop", partners: 85, progress: 70 },
      { name: "Instagram Shop", partners: 65, progress: 60 },
      { name: "Facebook", partners: 45, progress: 80 },
      { name: "Pinterest", partners: 15, progress: 10 },
    ],
  },
};

export const GROWTH_PARTNERS = GROWTH_DATA_BY_TAB["application"].partners;

export const PAYOUTS_CHART_DATA = [
  { month: "01.23", height: 45 },
  { month: "02.23", height: 65 },
  { month: "03.23", height: 85 },
  { month: "", height: 35 },
  { month: "", height: 50 },
  { month: "", height: 70 },
  { month: "", height: 90 },
  { month: "", height: 55 },
  { month: "09.23", height: 100 },
];

export const FUNNEL_DATA = [
  {
    label: "TOTAL MARKET",
    value: "142,382",
    barWidth: "100%",
    height: "h-16 sm:h-24",
  },
  {
    label: "PROSPECTS",
    value: "87,027",
    barWidth: "75%",
    height: "h-14 sm:h-20",
  },
  { label: "LEADS", value: "48,027", barWidth: "50%", height: "h-12 sm:h-16" },
  {
    label: "SALES",
    value: "32,027",
    barWidth: "35%",
    height: "h-10 sm:h-12",
    isDark: true,
  },
];

export const APPROVAL_REQUESTS = [
  {
    id: 1,
    avatar: "U",
    avatarBg: "bg-[#FFECD5]",
    name: "UrbanFit Life",
    description: "Approve Content",
    time: "2h ago",
    avatarColor: "text-[#FFC107]",
  },
  {
    id: 2,
    avatar: "T",
    avatarBg: "bg-[#DBEAFE]",
    name: "TechSavvy Mom",
    description: "Approve Commission",
    time: "5h ago",
    avatarColor: "text-[#0EA5E9]",
  },
  {
    id: 3,
    avatar: "D",
    avatarBg: "bg-[#F3E8FF]",
    name: "Daily Gadgets",
    description: "Validate Lead",
    time: "1d ago",
    avatarColor: "text-[#9333EA]",
  },
  {
    id: 4,
    avatar: "Y",
    avatarBg: "bg-[#D1FAE4]",
    name: "Yoga with Jen",
    description: "Approve Invoice",
    time: "1d ago",
    avatarColor: "text-[#2e8862]",
  },
];

export const METRIC_CARDS_DATA = [
  {
    id: "outreached",
    label: "OUTREACHED",
    value: "1,240",
    description: "Partners Contacted",
    change: "+15%",
    changeType: "positive",
    iconColor: "bg-[#DBEAFE] text-[#2563EB]",
    icon: "target",
  },
  {
    id: "onboarded",
    label: "ONBOARDED",
    value: "85",
    description: "Active in Program",
    change: "+8%",
    changeType: "positive",
    iconColor: "bg-[#DCFCE7] text-[#16A34A]",
    icon: "check",
  },
  {
    id: "awaiting",
    label: "AWAITING DELIVERABLES",
    value: "12",
    description: "Pending Content",
    change: undefined,
    changeType: undefined,
    iconColor: "bg-[#FEF3C7] text-[#D97706]",
    icon: "clock",
  },
] as const;

export const ACTIVITIES = [
  {
    id: 1,
    name: "CreativeDir",
    subtitle: "",
    description: "Q4 Brand Assets are live...",
    avatar: "",
    color: "bg-lime",
    dotColor: "bg-lime-500",
  },
  {
    id: 2,
    name: "Editor",
    subtitle: "",
    description: "First draft of the 'Urban...",
    avatar: "",
    color: "",
    dotColor: "bg-red-500",
  },
  {
    id: 3,
    name: "MediaBuyer",
    subtitle: "",
    description: "ROAS is up 15% on the n...",
    avatar: "",
    color: "",
    dotColor: "bg-red-500",
  },
  {
    id: 4,
    name: "Sarah J.",
    subtitle: "",
    description: "Volta Inc. approved the n...",
    avatar: "https://i.pravatar.cc/40?img=13",
    color: "",
    dotColor: "bg-lime-500",
  },
  {
    id: 5,
    name: "MediaTeam",
    subtitle: "",
    description: "Premium inventory secur...",
    avatar: "",
    color: "",
    dotColor: "bg-lime-500",
  },
  {
    id: 6,
    name: "SocialBot",
    subtitle: "",
    description: "Instagram engagement u...",
    avatar: "https://i.pravatar.cc/40?img=15",
    color: "",
    dotColor: "bg-lime-500",
  },
];

export const SUB_TABS = [
  { id: "overview", label: "Overview", active: true },
  { id: "database", label: "Database", active: false },
  { id: "rebate-journey", label: "Rebate Journey", active: false },
  { id: "contracts", label: "Contracts", active: false },
  { id: "retailers", label: "Retailers", active: false },
];

export const MAIN_TABS = [
  { id: "performance", label: "Performance", value: "$334.4K", active: false },
  { id: "social", label: "Social", value: "24M Views", active: false },
  { id: "partners", label: "Partners", value: "400 Rebates", active: true },
  { id: "campaigns", label: "Campaigns", value: "1500 review", active: false },
  { id: "content", label: "Content", value: "30K assets", active: false },
  { id: "inbox", label: "Inbox", value: "40 unread", active: false },
  { id: "operations", label: "Operations", value: "12 Active", active: false },
  { id: "expenses", label: "Expenses", value: "20 requests", active: false },
];

export const USER_DATA = {
  name: "Volta",
  id: "5732",
  status: "In progress",
  welcomeName: "Combina",
};

export const FUNNEL_TABS = [
  { id: "last-quarter", label: "Last quarter" },
  { id: "influenced", label: "What has influenced" },
  { id: "forecast", label: "Forecast" },
] as const;

export type FunnelTabId = (typeof FUNNEL_TABS)[number]["id"];

export interface FunnelGraphEntry {
  label: string;
  value: string;
  num: number;
  fill: string;
}

export const FUNNEL_STATS_BY_TAB: Record<
  FunnelTabId,
  {
    percentage: string;
    growthValue: string;
    growthLabel: string;
    graphData: FunnelGraphEntry[];
  }
> = {
  "last-quarter": {
    percentage: "+37%",
    growthValue: "6,653",
    growthLabel: "growth in closed sales",
    graphData: [
      { label: "TOTAL MARKET", value: "142,382", num: 142382, fill: "#A2CB39" },
      { label: "PROSPECTS", value: "87,027", num: 87027, fill: "#BBE059" },
      { label: "LEADS", value: "48,027", num: 48027, fill: "#DBF58C" },
      { label: "SALES", value: "32,027", num: 32027, fill: "#1C1918" },
    ],
  },
  influenced: {
    percentage: "+24%",
    growthValue: "4,120",
    growthLabel: "growth in influenced sales",
    graphData: [
      { label: "TOTAL MARKET", value: "120,000", num: 120000, fill: "#A2CB39" },
      { label: "PROSPECTS", value: "75,000", num: 75000, fill: "#BBE059" },
      { label: "LEADS", value: "50,000", num: 50000, fill: "#DBF58C" },
      { label: "SALES", value: "28,000", num: 28000, fill: "#1C1918" },
    ],
  },
  forecast: {
    percentage: "+45%",
    growthValue: "8,200",
    growthLabel: "expected growth in sales",
    graphData: [
      {
        label: "TOTAL MARKET",
        value: "160,000",
        num: 160000,
        fill: "#A2CB39",
      },
      { label: "PROSPECTS", value: "95,000", num: 95000, fill: "#BBE059" },
      { label: "LEADS", value: "65,000", num: 65000, fill: "#DBF58C" },
      { label: "SALES", value: "45,000", num: 45000, fill: "#1C1918" },
    ],
  },
};

export const FUNNEL_GRAPH_DATA = FUNNEL_STATS_BY_TAB["last-quarter"].graphData;

export const PAYOUTS_DATA = [
  { month: "01.23", value: 45, fill: "#E5E6EA" },
  { month: "02.23", value: 75, fill: "#E5E6EA" },
  { month: "03.23", value: 55, fill: "#E5E6EA" },
  { month: "", value: 95, fill: "#1C1917" },
  { month: "", value: 130, fill: "#1C1917" },
  { month: "", value: 80, fill: "#1C1917" },
  { month: "", value: 40, fill: "#1C1917" },
  { month: "09.23", value: 100, fill: "#D2FA57" },
  { month: "15.23", value: 150, fill: "#D2FA57" },
];

export const PAYOUTS_LAST_QUARTER = {
  payoutChange: "350",
  payoutPrice: "2.5",
};
