import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaGithub } from 'react-icons/fa'
import { CgPacman } from 'react-icons/cg'

import GithubStats from './GithubStats'
import Technologies from './Technologies'

const Skills: React.FC = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState('GithubStats')
  const sections = [
    {
      title: 'GithubStats',
      subtitle: 'Estadisticas de Github',
      icon: <FaGithub/>
    },
    {
      title: 'Technologies',
      subtitle: 'Tecnologias que uso y que estoy aprendiendo',
      icon: <CgPacman/>
    }
  ]

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  return (
    <div className='flex flex-grow'>
            <div className='w-2/6 h-full border-r border-gray-300 overflow-y-auto max-h-[60vh]'>
                <ul>
                    {sections.map((section) => (
                        <li className= 'border-b border-gray-300 p-4' key={section.title} onClick={() => handleSectionChange(section.title)}>
                            <div className='flex'>
                                <IconContext.Provider value={{ className: 'text-gray-500 mr-1 mt-2' }}>
                                    {section.icon}
                                </IconContext.Provider>
                                <div className='flex flex-col ml-2'>
                                    <h2 className='text-lg'>{section.title}</h2>
                                    <p className=' text-sm text-gray-500'>{section.subtitle}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
           </div>
           <div className='flex w-4/6 bg-white overflow-y-auto max-h-[60vh]'>
                {activeSection === 'GithubStats' && <GithubStats/>}
                {activeSection === 'Technologies' && <Technologies/>}
            </div>
    </div>
  )
}
export default Skills
