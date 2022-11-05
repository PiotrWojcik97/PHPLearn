import { getMonth } from "./utils"

console.log(parseInt(getMonth()[1][2].format('MM')))

const globals = {
    currentMonthIndex: parseInt(getMonth()[1][2].format('MM'))
}
export default globals