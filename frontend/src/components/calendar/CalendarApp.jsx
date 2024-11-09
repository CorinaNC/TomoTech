import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const CalendarApp = () => {
  return (
    <div className="calendar-app">
      <div className="calendar">
        <h1 className="heading">Calendar</h1>
        <div className="navigate-date">
          <h2 className="month">November,</h2>
          <h2 className="year">2024</h2>
          <div className="navigate-buttons">
            <ChevronLeftIcon className="navigate-left" />
            <ChevronRightIcon className="navigate-right" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarApp