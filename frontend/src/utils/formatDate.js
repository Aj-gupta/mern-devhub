const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export default function format(dateString) {
  const dateObj = new Date(dateString)
  const month = months[dateObj.getUTCMonth()]
  // const day = dateObj.getUTCDate()
  const year = dateObj.getUTCFullYear()

  return `${month} ${year}`
}
