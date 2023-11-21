import React from 'react'
import user from '../../../config/user'

const Biography: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col mx-10'>
        <div className='flex items-center mt-10'>
          <span className='text-gray-400 mr-2'>H1</span>
          <h1 className='text-3xl'>Biografia</h1>
        </div>
        <div className='flex items-center mt-5'>
            <p className='text-gray-400 mr-2'>Img</p>
            <img className='w-24 h-24' src={user.avatar} alt='img'/>
        </div>
        <div className='flex items-center mt-2'>
          <span className='text-gray-400 mr-2'>H2</span>
          <h2 className='text-xl'>{user.name}</h2>
        </div>
        <div className='flex items-center mt-2'>
          <span className='text-gray-400 mr-2'>H2</span>
          <h2 className='text-xl'>Full Stack Developer</h2>
        </div>
        <div className='flex flex-col ml-7 mt-1'>
            <p className='mb-2'>
            Hola gente soy <span className='text-orange-500'>Christian Taboada</span>, un Desarrollador Full Stack desde el 2022.
            Tambien soy un estudiante de la UTN, cursando la carrera de <span className='text-orange-500'>Ingenieria en Sistemas de Informacion</span>
            </p>
            <p className='mb-1'>
            Mi viaje tecnológico comenzó con un sólido dominio de JavaScript y TypeScript.
            He explorado las profundidades de Node.js, React, Redux y SQL, especializándome en el diseño fluido con React Native.
            </p>
            <p className='mb-2'>
            Mi enfoque está centrado en la creación de experiencias excepcionales en aplicaciones y sitios web. Disfruto
            enfrentando desafíos tecnológicos, entregando soluciones impactantes y explorando nuevas posibilidades en el
            mundo del desarrollo.
            </p>
            <p className='mb-2'>
            Además de mi experiencia técnica, he fortalecido mis habilidades de comunicación, trabajo en equipo,
            resolución creativa de problemas, autogestión y adaptabilidad a través de mi trayectoria como
            microemprendedor.
            </p>
            <p className='mb-2'>
            Actualmente, estoy emocionado por aprender continuamente y expandir mis conocimientos en el fascinante mundo
            de la tecnología.
            </p>
            <p className='mb-2'>
            Desde el desarrollo web hasta la construcción de software y sistemas de aprendizaje
            automático, ¡estoy listo para afrontar cualquier desafío!
            </p>
        </div>
    </div>
  )
}
export default Biography
