import React from 'react'
import { CgBatteryFull } from 'react-icons/cg'
import { IconContext } from 'react-icons'

const Battery: React.FC = (): JSX.Element => {
  return (
        <div className='flex'>
            <IconContext.Provider value={{ className: 'text-white h-5 w-5' }}>
            <CgBatteryFull/>
            </IconContext.Provider>
        </div>
  )
}
export default Battery
