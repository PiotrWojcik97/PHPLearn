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

/**
 * 
 * @returns arr[CALENDAR_DAYS][USERS_NUMBER][EVENTS PER USER IN THAT DAY]
 */
function _create_3_DimensionalArray() {
    const NUM_DAYS = 32
    const NUM_USERS = 3
    
    // create first dimension
    let arr = new Array(NUM_DAYS)
    // create the second dimension
    for(let i=0; i < arr.length; i++)
        arr[i] = new Array(NUM_USERS)
    // create the third dimension
    for(let i=0; i < arr.length; i++)
        for(let j=0; j < arr[0].length; j++)
            arr[i][j] = new Array()
    return arr
}


// events are only monthly based (in case that event duration exceeds month it is divided to two, before entering database)
export function calculateEventTable(data){
    let arr = _create_3_DimensionalArray()
    
    data.data.forEach(event => {
        const startDate = new Date(event.start_date)
        const endDate = new Date(event.end_date)
        const user_id = event.user_id

        // handle multi-day event
        if(startDate.getDate() != endDate.getDate()) {
            for(let i=startDate.getDate(); i != endDate.getDate(); i++)
            {
                let start_time
                let end_time
                if(i == startDate.getDate())
                {
                    start_time = (startDate.getHours() / 24) + (startDate.getMinutes() / 60)
                    end_time = 23.99 / 24
                }
                else if(i == endDate.getDate())
                {
                    start_time = 0
                    end_time = (endDate.getHours() / 24) + (endDate.getMinutes() / 60)
                }
                else {
                    start_time = 0
                    end_time = 23.99 / 24
                }
                arr[i][user_id].push({
                    startTime: start_time,
                    endTime: end_time
                })
            }
        }
        //handle event which duration does not exceed one day 
        else {
            let start_time = (startDate.getHours() / 24) + (startDate.getMinutes() / 60)
            let end_time = (endDate.getHours() / 24) + (endDate.getMinutes() / 60)
            
            arr[startDate.getDate()][user_id].push({
                startTime: start_time,
                endTime: end_time
            })
        }
    })

    return arr
}
