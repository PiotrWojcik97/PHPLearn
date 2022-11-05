import { getMonth } from "./utils"

const globals = {
    currentMonthIndex: parseInt(getMonth()[1][2].format('MM'))
}
export default globals