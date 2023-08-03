import dayjs from 'dayjs'

export const formatTime = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  let formattedTime = ''
  if (hours > 0) {
    formattedTime += `${hours}h`
  }
  if (minutes > 0) {
    formattedTime += ` ${minutes}m`
  }

  return formattedTime.trim()
}

export const formatFriendlyDate = (date) => dayjs(date).format('MMM, DD YYYY')
