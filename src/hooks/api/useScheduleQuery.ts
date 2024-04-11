import { useSuspenseQuery } from "@tanstack/react-query";
import getSchedule from "@/api/getSchedule";

const useScheduleQuery = ({ competitions }: { competitions: string }) => {
  return useSuspenseQuery({
    queryKey: ["schedule", competitions],
    queryFn: () => getSchedule({ competitions }),
    gcTime: 24 * 60 * 60 * 60 * 1000,
    staleTime: Infinity,
  });
};

export default useScheduleQuery;
