import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { BsBriefcase } from 'react-icons/bs'
import { GrDocumentPdf } from 'react-icons/gr'

import Cv from './Cv'
import Jobs from './Jobs'

interface Section {
  title: string
  subtitle: string
  icon: JSX.Element
}

const Resume: React.FC = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState('CV')
  const sections: Section[] = [
    {
      title: 'CV',
      subtitle: 'Detalles de mi hoja de Vida',
      icon: <GrDocumentPdf />
    },
    {
      title: 'Jobs',
      subtitle: 'Mi recorrido laboral',
      icon: <BsBriefcase />
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
            {activeSection === 'CV' && <Cv/>}
            {activeSection === 'Jobs' && <Jobs/>}
        </div>
    </div>
  )
}
export default Resume
