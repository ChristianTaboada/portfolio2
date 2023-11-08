import React, { useState } from 'react'
import { CgClose, CgExpand, CgMathMinus } from 'react-icons/cg'
import { IconContext } from 'react-icons'

const Windows: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleWindow = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {isOpen && (
        <div className="border border-gray-400 rounded floating-window overflow-hidden">
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
                    <h1>Titulo de la ventana</h1>
                </div>
            </div>
          <div className=" bg-blue-500 window-content">
            <p>Contenido de la ventana.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Windows
