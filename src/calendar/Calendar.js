import React from 'react'
import Header from './Header'
import Days from './Days'

export default function Calendar ({currentMonth, preMonth, nextMonth}) {
  return (
    <div>
        <Header 
            currentMonth={currentMonth}
            preMonth={preMonth}
            nextMonth={nextMonth}
        />
        <Days />
    </div>
  )
}