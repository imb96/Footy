import { useQuery } from '@tanstack/react-query'

import getSchedule from '@/api/getSchedule'

const useScheduleQuery = ({ competition }: { competition: string }) => {
  return useQuery({
    queryKey: ['schedule', competition],
    queryFn: () => getSchedule({ competition }),
  })
}

export default useScheduleQuery
