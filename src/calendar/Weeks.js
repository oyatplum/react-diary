import React from 'react'
import {startOfMonth, endOfMonth, startOfWeek, endOfWeek, format} from 'date-fns'
import { addDays, isSameMonth, isSameDay } from 'date-fns'
import './Weeks.css'


export default function Weeks({currentMonth, currentDate}) {

    const StartMonth = startOfMonth(currentMonth)
    const EndMonth = endOfMonth(StartMonth)
    const StartDate = startOfWeek(StartMonth)
    const EndDate = endOfWeek(EndMonth)

    let day = StartDate
    let one_week = []
    let one_month = []
    let formattedDate = ''

    while (day <= EndDate) {
        for(let i=0; i<7; i++) {
            formattedDate = format(day, 'd')
            one_week.push(
                <div className={`one_week${
                    !isSameMonth(day, StartMonth) ? 'not_same_month' : !isSameDay(day, currentDate) ? 'same_month' : 'same_day'
                }`}
                 key={day}
                 >
                    {formattedDate}
                </div>
            )
            day = addDays(day, 1)
        }
        one_month.push(
            <div className='one_month' key={day}>
                {one_week}
            </div>
        )
        one_week = []
    }

  return (
    <div className='month'>
        {one_month}
    </div>
  )
}
