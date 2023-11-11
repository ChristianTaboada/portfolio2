import React from 'react'
import user from '../../../config/user'

const Biography: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col mx-10'>
        <div className='flex items-center mt-5'>
            <p className='text-gray-400 mr-2'>Img</p>
            <img className='w-24 h-24' src={user.avatar} alt='img'/>
        </div>
        <div className='flex items-center mt-2'>
          <span className='text-gray-400 mr-2'>H1</span>
          <h1 className='text-2xl'>{user.name}</h1>
        </div>
        <div className='flex items-center mt-2'>
          <span className='text-gray-400 mr-2'>H2</span>
          <h2 className='text-xl'>Full Stack Developer</h2>
        </div>
        <div className='flex flex-col ml-7 mt-1'>
            <p>
            Full Stack Developer y Diseñador Web con un sólido dominio de JavaScript, TypeScript y experiencia en
            Java, mi destreza se extiende a través de Node.js, React, Redux y SQL, especializandome en el diseño
            fluido con React Native, el enfoque está centrado en la creación de experiencias excepcionales en
            aplicaciones y sitios web.
            </p>
            <p>
            Disfruto enfrentando desafíos tecnológicos y entregando soluciones impactantes,
            además, fortalezco mis habilidades de comunicación, trabajo en equipo, resolución creativa de problemas,
            autogestión y adaptabilidad a través de mi experiencia como microemprendedor.
            </p>
        </div>
    </div>
  )
}
export default Biography
