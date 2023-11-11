import React, { useState } from 'react'
import { CgClose, CgExpand, CgMathMinus } from 'react-icons/cg'
import { IconContext } from 'react-icons'
import AboutMe from './info/aboutme/AboutMe'

const Windows: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [activeSection, setActiveSection] = useState('About Me')

  const toggleWindow = () => {
    setIsOpen(!isOpen)
  }

  const sections = ['About Me', 'Education', 'Skills', 'Projects', 'Resume']

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  return (
    <div>
      {isOpen && (
         <div className="flex flex-col min-h-[60vh] border border-gray-400 rounded floating-window overflow-hidden">
            <div className='flex p-1 items-center justify-center space-x-2 bg-gray-200/80 header-window'>
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
                  <ul>
                    {sections.map((section) => (
                      <li className='flex justify-center items-center' key={section} onClick={() => handleSectionChange(section) }>
                        {section}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='main-content flex flex-grow w-4/5 bg-white'>
                  {activeSection === 'About Me' && <AboutMe/>}
                  {activeSection === 'Education' && <h2>Education</h2>}
                  {activeSection === 'Skills' && <h2>Skills</h2>}
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
