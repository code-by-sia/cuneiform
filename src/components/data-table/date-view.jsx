import moment from 'moment'

export default function DateView({ value, dateFormat = 'll LT' }) {
  return moment(value).format(dateFormat)
}

export function CloseDateView({ value }) {
  return moment(value).format('Y MMM DD, LT')
}
