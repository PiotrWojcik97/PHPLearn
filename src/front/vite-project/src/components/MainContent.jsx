import React from "react"
import Month from "./Month"
import { getMonth } from "../utils/utils"

export default function MainContent() {
    const [currentMonth, setCurrentMonth] = React.useState(getMonth())
    return (
        <main>
            <h2>Hello World!</h2>
            <Month month={currentMonth} />
        </main>
    )
}