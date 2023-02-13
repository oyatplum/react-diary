import React from 'react'
import Header from './Header'
import Days from './Days'
import Weeks from './Weeks'

export default function Calendar ({currentMonth, preMonth, nextMonth}) {
  return (
    <div>
        <Header 
            currentMonth={currentMonth}
            preMonth={preMonth}
            nextMonth={nextMonth}
        />
        
        <Weeks currentMonth={currentMonth} />
    </div>
  )
}