import dayjs from 'dayjs'

export const formatDisplayDate = (date: string, format: string) =>
  dayjs.utc(date, 'YYYY-MM-DD HH:mm:ss').local().format(format)
