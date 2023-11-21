import React from 'react'

const Complementary: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col mx-10'>
        <div className='flex items-center mt-10'>
            <span className='text-gray-400 mr-2'>H1</span>
            <h2 className='text-3xl'>Desarrollo Profesional</h2>
        </div>
        <ul className='list-disc mt-2 text-orange-500 ml-12'>
                    <li>
                        <div className='flex flex-col'>
                            <p className='text-black mr-1 text-lg'>Java-Front End</p>
                            <span className='text-base text-gray-400'>Codo a Codo</span>
                            <span className='text-sm text-gray-400'>2023</span>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-col'>
                            <p className='text-black mr-1 text-lg'>Desarrollador web inicial</p>
                            <span className='text-base text-gray-400'>Universidad Tecnológica Nacional</span>
                            <span className='text-base text-gray-400'>2023</span>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-col'>
                            <p className='text-black mr-1'>Big Data</p>
                            <span className='text-base text-gray-400'>Codo a Codo</span>
                            <span className='text-sm text-gray-400'>2023</span>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-col'>
                            <p className='text-black mr-1'>Máster en Javascript, jQuery, Angular, NodeJS</p>
                            <span className='text-base text-gray-400'>Udemy</span>
                            <span className='text-sm text-gray-400'>2023</span>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-col'>
                            <p className='text-black mr-1'>Desarrollador Java Intermedio</p>
                            <span className='text-base text-gray-400'>Universidad Tecnológica Nacional</span>
                            <span className='text-sm text-gray-400'>2023</span>
                        </div>
                    </li>
                </ul>
    </div>
  )
}
export default Complementary
