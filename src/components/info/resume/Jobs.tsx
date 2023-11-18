import React from 'react'

const Jobs: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col mx-14'>
      <div className='flex items-center mt-10'>
        <span className='text-gray-400 mr-2'>H1</span>
        <h1 className='text-3xl'>Jobs</h1>
      </div>
      <div className='flex items-center mt-5'>
        <span className='text-gray-400 mr-2'>H2</span>
        <h2 className='text-xl'>Seekitup</h2>
      </div>
      <p className='ml-7 text-lg text-orange-400'>Front-End Developer</p>
      <p className='ml-7 text-base text-orange-400'>Junio - Presente</p>
        <ul className='list-disc ml-11'>
          <li>
            <p>Creacion de Componentes principales</p>
          </li>
          <li>
            <p>Revision de Codigo</p>
          </li>
          <li>
            <p>Encargado del funcionamiento de la nueva intefaz de las URL</p>
          </li>
          <li>
            <p>Implementar los diseños de Figma</p>
          </li>
          <div className='flex mt-2 space-x-2 mb-5'>
            <img src='img/addtag.jpg' style={{ width: '10rem', height: '20rem', objectFit: 'cover' }}/>
            <img src='img/todaspizarras.jpg' style={{ width: '10rem', height: '20rem', objectFit: 'cover' }}/>
          </div>
        </ul>
    </div>
  )
}
export default Jobs
