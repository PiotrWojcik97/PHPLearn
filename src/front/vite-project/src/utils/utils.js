import dayjs from 'dayjs'

export function getMonth(month = dayjs().month() ){
    // future parameters 
    const POLISH_CALENDAR_FORMAT = 0
    const USA_CALENDAR_FORMAT = 1
    const WEEK_DAYS = 7
    const MONTH_WEEKS = 5
    
    const currentYear = dayjs().year()

    // firstDayOfTheMonth 0 to 6, where 0 is Sunday
    const firstDayOfTheMonth = dayjs(new Date(currentYear, month, POLISH_CALENDAR_FORMAT)).day()

    // negative calendar days causing
    let currentMonthCounter = 0 - firstDayOfTheMonth

    // 2 dimension's array holding calendar 5 weeks and
    const daysMatrix = new Array(MONTH_WEEKS).fill([]).map(() => {
        return new Array(WEEK_DAYS).fill(null).map(() => {
            currentMonthCounter++
            return dayjs(new Date(currentYear, month, currentMonthCounter))
        })
    })
    return daysMatrix
}