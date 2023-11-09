import React, { useState } from 'react'

const AboutMe: React.FC = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState('Biography')

  const sections = [
    {
      title: 'Biography',
      subtitle: 'Esta es mi breve biografia',
      content: 'Soy el puto amo chaval'
    },
    {
      title: 'Hobbies',
      subtitle: 'Estos son mis gustos',
      content: 'Soy un puto Otaku'
    },
    {
      title: 'Contact',
      subtitle: 'Llamame!',
      content: 'Te sorprendera lo que puedo hacer'
    }
  ]
  const handleSectionChange = (section) => {
    setActiveSection(section)
  }
  return (
        <div className='flex'>
        <div className='w-1/4 border-r border-gray-300 bg-white'>
            <ul>
                {sections.map((section) => (
                    <li className='border-b border-gray-300' key={section.title} onClick={() => handleSectionChange(section.title)}>
                        {section.title}
                        <br/>
                        {section.subtitle}
                    </li>
                ))}
            </ul>
        </div>
        <div className='flex w-3/4 bg-white'>
        {sections.map((section) => (
          <div
            key={section.title}
            style={{ display: section.title === activeSection ? 'block' : 'none' }}
          >
            <h1>{section.title}</h1>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>

  )
}
export default AboutMe
