import React from 'react'
import { BiWifi } from 'react-icons/bi'
import { IconContext } from 'react-icons'

const Wifi: React.FC = (): JSX.Element => {
  return (
        <div className='flex hover:bg-gray-300/20 p-0.5 rounded cursor-pointer'>
            <IconContext.Provider value={{ className: 'text-white h-5 w-5' }}>
                <BiWifi/>
            </IconContext.Provider>
        </div>
  )
}
export default Wifi
