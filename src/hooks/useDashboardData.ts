import { useQuery } from "@tanstack/react-query";
import { fetchDashboardData } from "../api/mockService";

export const useDashboardData = () => {
  return useQuery({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboardData,
  });
};
