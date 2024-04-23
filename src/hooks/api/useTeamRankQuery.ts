import { useQuery } from '@tanstack/react-query'

import getTeamRank from '@/api/getTeamRank'

const useTeamRankQuery = ({ competition }: { competition: string }) => {
  return useQuery({
    queryKey: ['team-rank', competition],
    queryFn: () => getTeamRank({ competition }),
  })
}

export default useTeamRankQuery
