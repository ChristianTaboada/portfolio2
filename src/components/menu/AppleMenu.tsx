import React from 'react'
import { BsApple } from 'react-icons/bs'
import { IconContext } from 'react-icons'

const AppleMenu: React.FC = (): JSX.Element => {
  return (
        <IconContext.Provider value={{ className: 'text-white w-5 h-5' }}>
            <BsApple/>
        </IconContext.Provider>
  )
}
export default AppleMenu
