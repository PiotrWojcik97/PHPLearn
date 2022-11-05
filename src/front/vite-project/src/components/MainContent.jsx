import React from "react"
import Month from "./Month"

export default function MainContent(props) {

    return (
        <main>
            <Month month={props.currentMonth} changeMonth={props.changeMonth} />
        </main>
    )
}