import React, { useState } from 'react'
import { CgClose, CgExpand, CgMathMinus, CgUser, CgFolder } from 'react-icons/cg'
import { IoOptionsOutline } from 'react-icons/io5'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { BiCog } from 'react-icons/bi'
import { VscFilePdf } from 'react-icons/vsc'
import { IconContext } from 'react-icons'

import AboutMe from './info/aboutme/AboutMe'
import Education from './info/education/Education'
import Skills from './info/skills/Skills'

const Windows: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [activeSection, setActiveSection] = useState('About Me')

  const toggleWindow = (): void => {
    setIsOpen(!isOpen)
  }

  const sections = [
    {
      title: 'About Me',
      icon: <CgUser/>
    },
    {
      title: 'Education',
      icon: <HiOutlineBookOpen/>
    },
    {
      title: 'Skills',
      icon: <BiCog/>
    },
    {
      title: 'Projects',
      icon: <CgFolder/>
    },
    {
      title: 'Resume',
      icon: <VscFilePdf/>
    }
  ]

  const handleSectionChange = (section: { title: string }): void => {
    setActiveSection(section.title)
  }

  return (
    <div>
      {isOpen && (
         <div className="flex flex-col min-h-[60vh] border border-gray-400 rounded floating-window overflow-hidden">
            <div className='flex p-1 items-center justify-center space-x-2 bg-gray-200/90 header-window'>
                <div className='mr-auto space-x-1 button-window'>
                  <button onClick={toggleWindow} className="bg-red-500 rounded-full window-button">
                     <IconContext.Provider value={{ className: 'h-3 w-3 opacity-0 hover:opacity-100' }}>
                        <CgClose/>
                     </IconContext.Provider>
                  </button>
                  <button className='bg-yellow-400 rounded-full'>
                     <IconContext.Provider value={{ className: 'h-3 w-3 opacity-0 hover:opacity-100' }}>
                        <CgMathMinus/>
                     </IconContext.Provider>
                  </button>
                  <button className='bg-green-500 rounded-full window-button-maximizar'>
                     <IconContext.Provider value={{ className: 'h-3 w-3 opacity-0 hover:opacity-100' }}>
                        <CgExpand/>
                     </IconContext.Provider>
                  </button>
                </div>
                <div className='fixed title-window'>
                    <h1>Bear</h1>
                </div>
             </div>
              <div className='window-content flex flex-grow'>
                <div className='sidebar w-1/5 border-r-2 border-gray-400 bg-slate-600 text-white'>
                  <div className='flex justify-end mr-1 mt-1'>
                    <IconContext.Provider value={{ className: 'text-gray-400 h-6 w-6' }}>
                      <IoOptionsOutline/>
                    </IconContext.Provider>
                  </div>
                  <ul className='mt-2'>
                    {sections.map((section) => (
                      <li className={`flex justify-center items-center text-lg ${
                        activeSection === section.title ? 'bg-red-500' : 'hover:bg-gray-300/20'
                      }`} key={section.title} onClick={() => { handleSectionChange(section) } }>
                        <span className='mr-1'>{section.icon}</span>
                        {section.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='main-content flex flex-grow w-4/5 bg-white'>
                  {activeSection === 'About Me' && <AboutMe/>}
                  {activeSection === 'Education' && <Education/>}
                  {activeSection === 'Skills' && <Skills/>}
                  {activeSection === 'Projects' && <h2>Projects</h2>}
                  {activeSection === 'Resume' && <h2>Resume</h2>}
                </div>
              </div>
         </div>
      )}
    </div>
  )
}

export default Windows
