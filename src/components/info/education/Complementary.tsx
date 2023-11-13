import React from 'react'

const Complementary: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col mx-10'>
        <div className='flex items-center mt-5'>
            <span className='text-gray-400 mr-2'>H2</span>
            <h2 className='text-2xl'>Cursos</h2>
        </div>
        <ul className='list-disc mt-2 text-orange-500 ml-12'>
                    <li>
                        <div className='flex items-center'>
                            <p className='text-black mr-1'>Java-Front End
                            <br/>
                            <span>Codo a Codo 2023</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center'>
                            <p className='text-black mr-1'>Desarrollador web inicial
                            <br/>
                            <span>UTN 2023</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center'>
                            <p className='text-black mr-1'>Big Data
                            <br/>
                            <span>Codo a Codo 2023</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center'>
                            <p className='text-black mr-1'>Máster en Javascript, jQuery, Angular, NodeJS.
                            <br/>
                            <span>Udemy 2023</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center'>
                            <p className='text-black mr-1'>Desarrollador Java Intermedio
                            <br/>
                            <span>UTN 2023</span>
                            </p>
                        </div>
                    </li>
                </ul>
    </div>
  )
}
export default Complementary
