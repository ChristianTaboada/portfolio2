import React from 'react'

const Professional: React.FC = (): JSX.Element => {
  return (
        <div className='flex flex-col mx-10'>
            <div className='flex items-center mt-10'>
                <span className='text-gray-400 mr-2'>H1</span>
                <h2 className='text-3xl'>Formación Académica</h2>
            </div>
            <div className='flex items-center mt-5'>
                <span className='text-gray-400 mr-2'>H2</span>
                <h2 className='text-xl'>Universitarias</h2>
            </div>
                <ul className='list-disc mt-2 text-orange-500 ml-12'>
                    <li>
                        <p className='text-black mr-1 text-lg'>Ingenieria en Sistemas de Información</p>
                        <span className='text-gray-400 text-base'>Universidad Tecnológica Nacional</span>
                        <br/>
                        <span className='text-gray-400 text-sm'>En curso</span>
                    </li>
                </ul>
            <div className='flex items-center mt-5'>
                <span className='text-gray-400 mr-2'>H2</span>
                <h2 className='text-xl'>Terciario</h2>
            </div>
            <ul className='list-disc mt-2 text-orange-500 ml-12'>
                    <li>
                        <p className='text-black mr-1 text-lg'>Desarrollador Full Stack</p>
                        <span className='text-gray-400 text-base'>Henry</span>
                        <br/>
                        <span className='text-gray-400 text-sm'>Finalizado</span>
                    </li>
                </ul>
        </div>
  )
}
export default Professional
