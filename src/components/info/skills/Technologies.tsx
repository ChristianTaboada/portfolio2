import React from 'react'

const Technologies: React.FC = (): JSX.Element => {
  return (
        <div className='flex flex-col mx-10'>
          <div className='flex items-center mt-5'>
            <span className='text-gray-400 mr-2'>H2</span>
            <h2 className='text-2xl'>Tecnologias</h2>
          </div>
          <div className='ml-8 mt-4'>
            <h3>Lenguajes y Tools</h3>
            <div className='flex mt-2 space-x-2'>
              <div className='flex flex-col items-center'>
                <img src='img/icons/javascript.png' alt='javascript' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>JavaScript</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/java.png' alt='java' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>Java</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/python.png' alt='python' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>Python</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/typescript.png' alt='typescript' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>TypeScript</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/git.png' alt='git' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>Git</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/html.png' alt='html' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>HTML</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/css.png' alt='css' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>CSS</span>
              </div>
            </div>
            <h3>Frameworks y Librerias</h3>
            <div className='flex mt-2 space-x-2'>
              <div className='flex flex-col items-center'>
                <img src='img/icons/react.png' alt='react' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>React</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/react.png' alt='react native' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>React Native</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/nodejs.png' alt='nodejs' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>Node.JS</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/bootstrap.png' alt='bootstrap' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>BootStrap</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/tailwind.png' alt='tailwind' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>Tailwind</span>
              </div>
            </div>
            <h3>Base de Datos</h3>
            <div className='flex mt-2 space-x-2'>
              <div className='flex flex-col items-center'>
                <img src='img/icons/mongodb.png' alt='mongodb' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>MongoDB</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/postgresql.png' alt='postgresql' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>PostgreSQL</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/mysql.png' alt='mysql' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>MYSQL</span>
              </div>
            </div>
            <h3>Herramientas de Desarrollo y Colaboracion</h3>
            <div className='flex mt-2 space-x-2'>
              <div className='flex flex-col items-center'>
                <img src='img/icons/github2.png' alt='github2' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>GitHub</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/figma.png' alt='figma' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>Figma</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src='img/icons/docker.png' alt='docker' className='w-10 h-10'/>
                <span className='text-xs text-gray-500'>Docker</span>
              </div>
            </div>
          </div>
        </div>
  )
}
export default Technologies
