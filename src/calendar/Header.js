import React, {useState} from 'react'
import {addMonths, subMonths, format} from 'date-fns'
import './Header.css'
import Days from './Days'
import Weeks from './Weeks'

export default function Header() {
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const preMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1))
    }

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1))
    }


  return (
    <div>
    <div className='header'>
        <span
            className='month_button'
            onClick={preMonth}
        >{"<"}
        </span>

        <div className='current_month'>
            {format(currentMonth, "M")}
        </div>


        <span
            className='month_button'
            onClick={nextMonth}
        >{">"}
        </span>
    </div>
    
    <Days />
    <Weeks currentMonth={currentMonth}/>
    
    </div>
    
  )
}
