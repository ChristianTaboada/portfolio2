import React, { useState, useEffect } from 'react'

const Clock: React.FC = (): JSX.Element => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const formatDay = (date: Date): string => {
    const options = { weekday: 'short' as const }
    return date.toLocaleDateString('en-US', options)
  }

  const formatDate = (date: Date): string => {
    const options = { month: 'short' as const, day: 'numeric' as const }
    return date.toLocaleDateString('en-US', options)
  }

  const formatTime = (date: Date): string => {
    const options = { hour: 'numeric' as const, minute: '2-digit' as const, hour12: true }
    return date.toLocaleTimeString('en-US', options)
  }

  return (
        <div className='flex hover:bg-gray-300/20 p-0.5 rounded cursor-pointer'>
            <span className='mx-1'>{formatDay(currentDateTime)}</span>
            <span>{formatDate(currentDateTime)}</span>
            <span className='mx-1'>{formatTime(currentDateTime)}</span>
        </div>

  )
}
export default Clock
