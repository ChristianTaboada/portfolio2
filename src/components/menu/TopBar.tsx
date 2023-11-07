import React from 'react'
import AppleMenu from './AppleMenu'
import Battery from './Battery'
import Search from './Search'
import Wifi from './Wifi'
import ControlMenu from './ControlMenu'

const TopBar: React.FC = () => {
  return (
    <div className='w-full h-8 px-2 fixed top-0 hstack justify-between text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition'>
        <div className='flex h-full'>
            <div className='flex items-center space-x-4'>
              <AppleMenu/>
              <h1>holis</h1>
            </div>
            <div className='flex items-center space-x-4 ml-auto'>
                <Battery/>
                <Wifi/>
                <Search/>
                <ControlMenu/>
              <h1>Adios</h1>
            </div>
        </div>
    </div>
  )
}

export default TopBar
