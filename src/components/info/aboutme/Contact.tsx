import React from 'react'

const Contact: React.FC = (): JSX.Element => {
  return (
        <div className='flex flex-col mx-10'>
          <div className='flex items-center mt-5'>
            <span className='text-gray-400 mr-2'>H2</span>
            <h2 className='text-3xl'>Contacto</h2>
          </div>
          <div className='flex flex-col mt-2 ml-7'>
              <div className='flex flex-col'>
                <h3 className='text-xl'>Contactame en:</h3>
                <ul className='list-disc mt-2 text-orange-500 ml-4'>
                  <li>
                    <div className='flex items-center'>
                      <p className='text-black mr-1'>Email:</p>
                      <a href='mailto:taboada.christian@gmail.com' target='_blank' rel='noopener noreferrer'>taboada.christian@gmail.com</a>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <p className='text-black mr-1'>LinkedIn:</p>
                      <a href='https://www.linkedin.com/in/christian-taboada/' target='_blank' rel='noopener noreferrer'>christian-taboada</a>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <p className='text-black mr-1'>Github:</p>
                      <a href='https://github.com/ChristianTaboada' target='_blank' rel='noopener noreferrer'>@ChristianTaboada</a>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <p className='text-black mr-1'>Instagram:</p>
                      <a href=''>@LaPanteraGrosa</a>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <p className='text-black mr-1'>Twitter:</p>
                      <a href='https://twitter.com/LaPanteraGrosa' target='_blank' rel='noopener noreferrer'>@LaPanteraGrosa</a>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
        </div>
  )
}
export default Contact
