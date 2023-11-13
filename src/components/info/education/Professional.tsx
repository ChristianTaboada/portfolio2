import React from 'react'

const Professional: React.FC = (): JSX.Element => {
  return (
        <div className='flex flex-col mx-10'>
            <div className='flex items-center mt-5'>
                <span className='text-gray-400 mr-2'>H2</span>
                <h2 className='text-2xl'>Universitarias</h2>
            </div>
                <ul className='list-disc mt-2 text-orange-500 ml-12'>
                    <li>
                        <div className='flex items-center'>
                            <p className='text-black mr-1'>Ingenieria en sistemas de informacion -
                            <span>Universidad Tecnologica Nacional -</span>
                            <span>En curso</span>
                            </p>
                        </div>
                    </li>
                </ul>
            <div className='flex items-center mt-5'>
                <span className='text-gray-400 mr-2'>H2</span>
                <h2 className='text-2xl'>Terciario</h2>
            </div>
            <ul className='list-disc mt-2 text-orange-500 ml-12'>
                    <li>
                        <div className='flex items-center'>
                        <p className='text-black mr-1'>Desarrollador Full Stack -
                        <span>Henry - </span>
                        <span>Finalizado</span>
                        </p>
                        </div>
                    </li>
                </ul>
        </div>
  )
}
export default Professional
