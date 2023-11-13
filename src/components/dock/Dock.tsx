import React, { useState } from 'react'
import apps from '../../config/app'

const Dock: React.FC = (): JSX.Element => {
  const [openWindows, setOpenWindows] = useState([])

  const handleAppClick = (app) => {
    const newWindow = {
      id: app.id,
      title: app.title,
      img: app.img,
      link: app.link
    }
    setOpenWindows([...openWindows, newWindow])
  }

  return (
    <div className="fixed bottom-5 bg-gray-700/10 p-2 rounded">
      <div className="flex justify-center space-x-2">
        {apps.map((app) => (
          <div key={app.id} onClick={() => handleAppClick(app)}>
            <div className="flex items-center">
              <a href={app.link} target='_blank' rel='noopener noreferrer'>
              <img src={app.img} alt={app.title} className="w-10 h-10" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Dock
