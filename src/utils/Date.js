
export function getTimeDiff(date) {
  const _date = new Date(date);
  const dateNow = new Date();

  // Calculate the time difference in milliseconds
  const timeDiffMillis = Math.abs(dateNow - _date);

  // Convert milliseconds to minutes, hours, and days
  const minutesDiff = Math.floor(timeDiffMillis / (1000 * 60));
  if(minutesDiff < 60)
    return `${minutesDiff} minutes ago`

  const hoursDiff = Math.floor(timeDiffMillis / (1000 * 60 * 60));
  if(hoursDiff < 24)
    return `${hoursDiff} hours ago`

  const daysDiff = Math.floor(timeDiffMillis / (1000 * 60 * 60 * 24));
    return `${daysDiff} days ago`
}
