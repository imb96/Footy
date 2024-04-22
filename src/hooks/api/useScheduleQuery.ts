import { useQuery } from '@tanstack/react-query'

import getSchedule from '@/api/getSchedule'

const useScheduleQuery = ({ competitions }: { competitions: string }) => {
  return useQuery({
    queryKey: ['schedule', competitions],
    queryFn: () => getSchedule({ competitions }),
  })
}

export default useScheduleQuery
