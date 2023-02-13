import React from 'react'
import './Days.css'

export default function Days() {
    const days = ['SUN', 'MON', 'THU', 'WED', 'THRS', 'FRI', 'SAT']
    const days_s =[]

    for(let i=0; i<7; i++) {
      days_s.push(
      <div className='each_days' key={i}>
        {days[i]}
      </div>)
    }
  return (
    <div className='days'>
        {days_s}
    </div>
  )
}
