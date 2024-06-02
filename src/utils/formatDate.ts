const formatDate = (date: Date) => {
  const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'] as const
  // const date = new Date(datetimeString)
  const year = date.getFullYear().toString().slice(-2)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const weekday = WEEK_DAYS[date.getDay()]

  return `${month}.${day} ${weekday} ${hours}:${minutes}`
}

export default formatDate
