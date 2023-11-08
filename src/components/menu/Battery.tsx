import React from 'react'
import { CgBatteryFull } from 'react-icons/cg'
import { IconContext } from 'react-icons'

const Battery: React.FC = (): JSX.Element => {
  return (
        <div className='flex hover:bg-gray-300/20 p-0.5 rounded cursor-pointer'>
            <IconContext.Provider value={{ className: 'text-white h-5 w-5' }}>
            <CgBatteryFull/>
            </IconContext.Provider>
        </div>
  )
}
export default Battery
