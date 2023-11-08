import React from 'react'
import AppleMenu from './AppleMenu'
import Battery from './Battery'
import Search from './Search'
import Wifi from './Wifi'
import ControlMenu from './ControlMenu'
import Clock from './Clock'

const TopBar: React.FC = () => {
  return (
    <div className='w-full h-8 px-2 fixed top-0 hstack justify-between text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition'>
        <div className='flex h-full'>
            <div className='flex items-center space-x-2'>
              <AppleMenu/>
              <h1>holis</h1>
            </div>
            <div className='flex items-center space-x-2 ml-auto'>
                <Battery/>
                <Wifi/>
                <Search/>
                <ControlMenu/>
                <Clock/>
            </div>
        </div>
    </div>
  )
}

export default TopBar
