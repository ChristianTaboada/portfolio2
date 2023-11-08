import React, { useState } from 'react'
import wallpapers from '../config/wallpapers'
import TopBar from '../components/menu/TopBar'
import Dock from '../components/dock/Dock'

const Desktop: React.FC = (): JSX.Element => {
  const [DarkMode, setDarkMode] = useState<boolean>(false)
  return (
        <div className='h-screen w-screen' style={{
          background: `url(${
          DarkMode ? wallpapers.night : wallpapers.day
        }) center/cover no-repeat`
        }}>
          <TopBar/>
          <div className='flex justify-center'>
          <Dock/>
          </div>
        </div>
  )
}
export default Desktop
