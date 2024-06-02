import type { Match } from '@/types/match.types'
import type { Competition } from '@/types/match.types'

const adjustDate = (date: Date, days: number): Date => {
  const newDate = new Date(date)
  newDate.setDate(date.getDate() + days)
  return newDate
}

const getSchedule = async ({ competition }: { competition: Competition }) => {
  const url = `api/competitions/${competition}/matches`

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': process.env.NEXT_PUBLIC_API_KEY || '',
    },
  })

  if (!res.ok) {
    throw new Error('[getSchedule] api Failed to fetch data')
  }

  const data = await res.json()
  const currentDate = new Date()
  const daysBefore = -3
  const daysAfter = 3

  const startDate = adjustDate(currentDate, daysBefore)
  const endDate = adjustDate(currentDate, daysAfter)

  const filteredMatches = data.matches.filter((match: Match) => {
    const matchDate = new Date(match.utcDate)
    return matchDate >= startDate && matchDate <= endDate
  })

  if (filteredMatches.length === 0) {
    return data.matches.filter((match: Match) => {
      const matchDate = new Date(match.utcDate)
      return (
        matchDate >= adjustDate(currentDate, daysBefore - 7) &&
        matchDate <= adjustDate(currentDate, daysAfter + 7)
      )
    })
  }

  return filteredMatches
}

export default getSchedule
