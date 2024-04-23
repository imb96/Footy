import { useQuery } from '@tanstack/react-query'

import getPlayerRank from '@/api/getPlayerRank'

const usePlayerRankQuery = ({ competition }: { competition: string }) => {
  return useQuery({
    queryKey: ['player-rank', competition],
    queryFn: () => getPlayerRank({ competition }),
  })
}

export default usePlayerRankQuery
