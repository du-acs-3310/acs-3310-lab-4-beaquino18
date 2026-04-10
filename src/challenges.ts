// Lab 4 — Date Utilities
// Implement each function according to the description.


// 1. formatShortDate
// Input: ISO date string
// Output: string in YYYY-MM-DD format or null if invalid
export function formatShortDate(dateString: string): string | null {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    return null
  }

  return date.toISOString().substring(0, 10)
}

// 2. isBefore
// Input: two date strings
// Output: true if first date is earlier than second, otherwise false
// Return false if either date is invalid
export function isBefore(a: string, b: string): boolean {
  const dateA = new Date(a)
  const dateB = new Date(b)

  if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
    return false
  }

  return dateA < dateB
}

// 3. daysBetween
// Input: two date strings
// Output: number of full days between dates or null if invalid
// Return the number of FULL days between dates (round down)
export function daysBetween(a: string, b: string): number | null {
  const dateA = new Date(a)
  const dateB = new Date(b)

  if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
    return null
  }
  const seconds = (dateB.getTime() - dateA.getTime()) / 1000
  const minute = seconds / 60
  const hour = minute / 60
  const day = hour / 24
  return Math.floor(day)
}

// 4. sortPostsByCreatedAt
// Input: array of posts with createdAt property
// Output: new array sorted newest first
// Do not mutate the original array

// Minimal post shape needed for this challenge
type Post = {
  createdAt: string
}

export function sortPostsByCreatedAt(posts: Post[]): Post[] {
  const sorted = [...posts]
  return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

// 5. relativeDayLabel
// Input: target date string and current date string
// Output: 'today', 'yesterday', or '<n> days ago'
// Return null if invalid
export function relativeDayLabel(target: string, today: string): string | null {
  const target_date = new Date(target)
  const today_date = new Date(today)

  const MS_PER_DAY = 1000 * 60 * 60 * 24
  const days = Math.floor((today_date.getTime() - target_date.getTime())) / MS_PER_DAY

  if ((isNaN(target_date.getTime())) || (isNaN(today_date.getTime()))) {
    return null
  } else if (days === 0) {
    return "today"
  } else if (days == 1) {
    return "yesterday"
  } else {
    return `${days} days ago`
  }
}

// 6. isValidDateString
// Input: string
// Output: true if valid date, false otherwise
export function isValidDateString(dateString: string): boolean {
  return !isNaN(new Date(dateString).getTime())
}
