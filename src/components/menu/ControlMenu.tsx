import React from 'react'
import { CgToggleOff, CgToggleOn } from 'react-icons/cg'
import { IconContext } from 'react-icons'

const ControlMenu: React.FC = (): JSX.Element => {
  return (
        <div className='flex'>
            <IconContext.Provider value={{ className: 'h-3.5 w-3.5' }}>
                <div className='flex-col'>
                <CgToggleOn className='text-white'/>
                <CgToggleOff className='text-white' style={{ marginTop: '-0.3rem' }}/>
                </div>
            </IconContext.Provider>
        </div>

  )
}
export default ControlMenu
