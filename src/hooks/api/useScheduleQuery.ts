import { useQuery } from '@tanstack/react-query';

import getSchedule from '@/api/getSchedule';
import { Competition } from '@/types/match.types';

const useScheduleQuery = ({ competition }: { competition: Competition }) => {
  return useQuery({
    queryKey: ['schedule', competition],
    queryFn: () => getSchedule({ competition }),
  });
};

export default useScheduleQuery;
