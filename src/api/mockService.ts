import {
  MESSAGES,
  GROWTH_TABS,
  GROWTH_PARTNERS,
  PAYOUTS_CHART_DATA,
  FUNNEL_DATA,
  APPROVAL_REQUESTS,
  METRIC_CARDS_DATA,
  ACTIVITIES,
  SUB_TABS,
  MAIN_TABS,
  USER_DATA,
} from "../constants";

export const fetchDashboardData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    messages: MESSAGES,
    growthTabs: GROWTH_TABS,
    growthPartners: GROWTH_PARTNERS,
    payoutsChartData: PAYOUTS_CHART_DATA,
    funnelData: FUNNEL_DATA,
    approvalRequests: APPROVAL_REQUESTS,
    metricCardsData: METRIC_CARDS_DATA,
    activities: ACTIVITIES,
    subTabs: SUB_TABS,
    mainTabs: MAIN_TABS,
    user: USER_DATA,
  };
};
