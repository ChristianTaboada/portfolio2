import React from 'react'
import { CgSearch } from 'react-icons/cg'
import { IconContext } from 'react-icons'

const Search: React.FC = (): JSX.Element => {
  return (
    <div className='flex hover:bg-gray-300/20 p-0.5 rounded cursor-pointer'>
        <IconContext.Provider value={{ className: 'text-white h-5 w-5' }}>
            <CgSearch/>
        </IconContext.Provider>
    </div>
  )
}
export default Search
