import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaRegAddressBook } from 'react-icons/fa'
import { CgGames, CgPhone } from 'react-icons/cg'

import DressMe from './DressMe'
import VideoGame from './VideoGame'
import Puzzle from './Puzzle'

interface Section {
  title: string
  subtitle: string
  icon: JSX.Element
}

const Projects: React.FC = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState('DressMe')

  const sections: Section[] = [
    {
      title: 'DressMe',
      subtitle: 'Tienda E-Commerce',
      icon: <FaRegAddressBook/>
    },
    {
      title: 'VideoGame',
      subtitle: 'Biblioteca de Videojuegos',
      icon: <CgGames/>
    },
    {
      title: 'Puzzle',
      subtitle: 'Minijuego de Puzzle',
      icon: <CgPhone/>
    }
  ]

  const handleSectionChange = (section: string): void => {
    setActiveSection(section)
  }

  return (
      <div className='flex flex-grow'>
        <div className='w-2/6 h-full border-r border-gray-300 overflow-y-auto max-h-[60vh]'>
            <ul>
                {sections.map((section) => (
                    <li className='border-b border-gray-300 p-4' key={section.title} onClick={() => { handleSectionChange(section.title) }}>
                        <div className='flex'>
                          <IconContext.Provider value={{ className: 'text-gray-500 mr-1 mt-2 w-5 h-5' }}>
                            {section.icon}
                          </IconContext.Provider>
                          <div className='flex flex-col ml-2'>
                            <h2 className='text-lg'>
                            {section.title}
                            </h2>
                            <p className=' text-sm text-gray-500'>
                            {section.subtitle}
                            </p>
                          </div>
                        </div>
                    </li>
                ))}
            </ul>
         </div>
         <div className='flex w-4/6 bg-white overflow-y-auto max-h-[60vh]'>
           {activeSection === 'DressMe' && <DressMe/>}
           {activeSection === 'VideoGame' && <VideoGame/> }
           {activeSection === 'Puzzle' && <Puzzle/>}
         </div>
      </div>
  )
}
export default Projects
