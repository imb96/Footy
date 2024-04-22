import { useSuspenseQuery } from '@tanstack/react-query'

import getSchedule from '@/api/getSchedule'

const useScheduleQuery = ({ competitions }: { competitions: string }) => {
  return useSuspenseQuery({
    queryKey: ['schedule', competitions],
    queryFn: () => getSchedule({ competitions }),
  })
}

export default useScheduleQuery
