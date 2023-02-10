import React from 'react'
import './Days.css'

export default function Days() {
    const days = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat']
    const days_s =[]

    for(let i=0; i<7; i++) {
      days_s.push(
      <div className='each_days'>
        {days[i]}
      </div>)
    }
  return (
    <div className='days'>
        {days_s}
    </div>
  )
}
