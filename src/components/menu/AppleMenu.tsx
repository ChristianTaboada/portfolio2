import React from 'react'
import { BsApple } from 'react-icons/bs'
import { IconContext } from 'react-icons'

const AppleMenu: React.FC = (): JSX.Element => {
  return (
    <div className='flex hover:bg-gray-300/20 p-1 rounded cursor-pointer'>
        <IconContext.Provider value={{ className: 'text-white w-5 h-5' }}>
            <BsApple/>
        </IconContext.Provider>
    </div>
  )
}
export default AppleMenu
