import { useQuery } from '@tanstack/react-query';

import getTeamRank from '@/api/getTeamRank';
import { Competition } from '@/types/match.types';

const useTeamRankQuery = ({ competition }: { competition: Competition }) => {
  return useQuery({
    queryKey: ['team-rank', competition],
    queryFn: () => getTeamRank({ competition }),
  });
};

export default useTeamRankQuery;
