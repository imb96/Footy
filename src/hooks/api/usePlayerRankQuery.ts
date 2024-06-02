import { useQuery } from '@tanstack/react-query'

import getPlayerRank from '@/api/getPlayerRank'
import { Competition } from '@/types/match.types'

const usePlayerRankQuery = ({ competition }: { competition: Competition }) => {
  return useQuery({
    queryKey: ['player-rank', competition],
    queryFn: () => getPlayerRank({ competition }),
  })
}

export default usePlayerRankQuery
