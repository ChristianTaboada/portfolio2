import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaCogs } from 'react-icons/fa'

import GithubStats from './GithubStats'
import Technologies from './Technologies'

interface Section {
  title: string
  subtitle: string
  icon: JSX.Element
}

const Skills: React.FC = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState('GithubStats')
  const sections: Section[] = [
    {
      title: 'GithubStats',
      subtitle: 'Estadisticas de Github',
      icon: <FaGithub/>
    },
    {
      title: 'Technologies',
      subtitle: 'Tecnologias que uso y que estoy aprendiendo',
      icon: <FaCogs/>
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
                        <li className= 'border-b border-gray-300 p-4' key={section.title} onClick={() => { handleSectionChange(section.title) }}>
                            <div className='flex'>
                                <IconContext.Provider value={{ className: 'text-gray-500 mr-1 mt-2 w-5 h-5' }}>
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
