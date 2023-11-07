import React, { useState, useEffect } from 'react'
import { useInterval } from '../hook/useInterval'
import { BsApple } from 'react-icons/bs'
import { IconContext } from 'react-icons';

interface BootProps {
  restart: boolean
  sleep: boolean
  setBooting: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

const loadingInterval = 1
const bootingInterval = 500

const Boot: React.FC<BootProps> = ({ restart, sleep, setBooting }): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [percent, setPercent] = useState<number>(0)

  useEffect(() => {
    if (restart && !sleep) setLoading(true)
  }, [restart, sleep])

  useInterval(
    () => {
      const newPercent = percent + 0.15
      if (newPercent >= 100) {
        setTimeout(() => {
          setBooting(false)
          setLoading(false)
        }, bootingInterval)
      } else setPercent(newPercent)
    },
    loading ? loadingInterval : null
  )

  const handleClick = () => {
    if (sleep) setBooting(false)
    else if (restart || loading) return
    else setLoading(true)
  }

  return (
    <div
     className='w-full h-screen bg-black flex flex-col items-center justify-center'
     onClick={handleClick}
     >
      <IconContext.Provider value = {{ className: 'text-white w-20 h-20 mt-4 sm:w-24 sm:h-24' }}>
      <BsApple/>
      </IconContext.Provider>
      {loading && (
        <div className="absolute mx-auto bottom-1/3 left-0 right-0 w-56 h-1 sm:h-1.5 bg-gray-500 rounded overflow-hidden"
        m="t-16 sm:t-24 x-auto"
        >
          <span
          className='absolute top-0 bg-white h-full rounded-sm'
          style={{ width: `${percent.toString()}%` }}
          />
        </div>
      )}
      {!restart && !loading && (
        <div
        className='absolute bottom-1/3 left-0 right-0 text-white text-center text-sm'
        m= 't-16 sm:t-20 x-auto'
        text= 'sm gray-200 center'
        >
          Click to {sleep ? 'wake up' : 'boot'}
        </div>
      )}
    </div>
  )
}

export default Boot
