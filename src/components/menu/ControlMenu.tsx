import React from 'react'
import { CgToggleOff, CgToggleOn } from 'react-icons/cg'
import { IconContext } from 'react-icons'

const ControlMenu: React.FC = (): JSX.Element => {
  return (
        <div className='flex hover:bg-gray-300/20 p-0.5 rounded cursor-pointer'>
            <IconContext.Provider value={{ className: 'h-4 w-4' }}>
                <div className='flex-col'>
                <CgToggleOn className='text-white'/>
                <CgToggleOff className='text-white' style={{ marginTop: '-0.3rem' }}/>
                </div>
            </IconContext.Provider>
        </div>

  )
}
export default ControlMenu
