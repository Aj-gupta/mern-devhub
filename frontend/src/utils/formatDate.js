export default function format(dateString) {
  const dateObj = new Date(dateString)
  const month = dateObj.getUTCMonth() + 1
  const day = dateObj.getUTCDate()
  const year = dateObj.getUTCFullYear()

  return `${day}/${month}/${year}`
}
