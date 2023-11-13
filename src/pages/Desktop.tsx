import React, { useState } from 'react'
import wallpapers from '../config/wallpapers'
import TopBar from '../components/menu/TopBar'
import Dock from '../components/dock/Dock'
import Windows from '../components/Windows'

const Desktop: React.FC = (): JSX.Element => {
  // const [DarkMode, setDarkMode] = useState<boolean>(false)
  const [DarkMode] = useState<boolean>(false)
  return (
        <div className='h-screen w-screen' style={{
          background: `url(${
          DarkMode ? wallpapers.night : wallpapers.day
        }) center/cover no-repeat`
        }}>
          <TopBar/>
          <div className='h-2/3 w-3/5 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded'>
          <Windows/>
          </div>
          <div className='flex justify-center'>
          <Dock/>
          </div>
        </div>
  )
}
export default Desktop
