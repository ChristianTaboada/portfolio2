import React from 'react'
import apps from '../../config/app'

const Dock: React.FC = (): JSX.Element => {
  return (
    <div className='fixed bottom-5 bg-gray-700/10 p-2 rounded'>
        <div className='flex justify-center space-x-2'>
            {apps.map((app) => (
                <a key={app.id} href={app.link} target="_blank" rel="noopener noreferrer" >
                <div key={app.id} className='flex items-center'>
                    <img src={app.img} alt={app.title} className='w-10 h-10'/>
                </div>
                </a>
            ))}
        </div>
    </div>
  )
}

export default Dock
