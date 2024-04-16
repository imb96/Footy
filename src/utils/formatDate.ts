const formatDate = (datetimeString: string) => {
  const weekdays = ['일', '월', '화', '수', '목', '금', '토']
  const date = new Date(datetimeString)
  const year = date.getFullYear().toString().slice(-2)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const weekday = weekdays[date.getDay()] // 요일 구하기

  return `${month}.${day} ${weekday} ${hours}:${minutes}`
}

export default formatDate
