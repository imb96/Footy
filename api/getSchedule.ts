import { Match } from '@/types/Match'

const getSchedule = async ({ competitions }: { competitions: string }) => {
  const url =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:3000/api/competitions/${competitions}/matches`
      : `/api/competitions/${competitions}/matches`

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
  const today = new Date(currentDate)
  const yesterday = new Date(currentDate)
  const beforeYesterday = new Date(currentDate)
  const tomorrow = new Date(currentDate)
  const afterTomorrow = new Date(currentDate)

  yesterday.setDate(currentDate.getDate() - 1)
  beforeYesterday.setDate(currentDate.getDate() - 2)
  tomorrow.setDate(currentDate.getDate() + 1)
  afterTomorrow.setDate(currentDate.getDate() + 2)

  const isSameDate = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  }

  const filteredMatches = data.matches.filter((match: Match) => {
    const matchDate = new Date(match.utcDate)
    return (
      isSameDate(matchDate, yesterday) ||
      isSameDate(matchDate, today) ||
      isSameDate(matchDate, tomorrow) ||
      isSameDate(matchDate, beforeYesterday) ||
      isSameDate(matchDate, afterTomorrow)
    )
  })

  return filteredMatches
}

export default getSchedule
