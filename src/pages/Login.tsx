import React, { useState } from 'react'
import wallpapers from '../config/wallpapers'
import user from '../config/user'
import type { MacActions } from '../types'
import { BsFillQuestionSquareFill } from 'react-icons/bs'
import { CgSleep, CgLogOff } from 'react-icons/cg'
import { RiRestartLine } from 'react-icons/ri'
// import { IconContext } from 'react-icons'

const Login: React.FC<MacActions> = (props): JSX.Element => {
  const [DarkMode, setDarkMode] = useState(false)
  const [password, setPassword] = useState('')
  const [sign, setSign] = useState('Click to enter')

  const keyPress = (e: React.KeyboardEvent): void => {
    const keyCode = e.key
    if (keyCode === 'Enter') loginHandle()
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  const loginHandle = (): void => {
    if (user.password === '' || user.password === password) {
      props.setLogin(true)
    } else if (password !== '') {
      setSign('Incorrect password')
    }
  }
  /*
  const toggleMode = (): void => {
    setDarkMode((prevMode) => !prevMode)
  }
  */
  return (
    <div
     className='w-screen h-screen text-center'
     style={{
       background: `url(${
        DarkMode ? wallpapers.night : wallpapers.day
      }) center/cover no-repeat`
     }}
     onClick={() => { loginHandle() }}
     >
      <div className='flex flex-col items-center justify-center h-screen'>
        {/* avatar */}
        <img
        className='rounded-full w-24 h-24 my-0 mx-auto'
        src={user.avatar}
        alt='img'
        />
        <div className='font-semibold mt-2 text-xl text-white'>{user.name}</div>
       {/* password input */}
       <div className='mx-auto grid grid-cols-5 w-44 h-8 mt-4 rounded-md backdrop-blur-2xl bg-gray-300/50'>
         <input
         className='text-sm text-white col-start-1 col-span-4 outline-none bg-transparent px-2 placeholder-white'
         type='password'
         placeholder='Enter Password'
         onClick={(e) => { e.stopPropagation() }}
         onKeyPress={keyPress}
         value={password}
         onChange={handleInputChange}
         />
         <div className="col-start-5 col-span-1 flex items-center">
          <BsFillQuestionSquareFill style={{ color: 'white', marginLeft: '0.5rem', fontSize: '18px' }}/>
         </div>
       </div>

        <div className='text-sm mt-2 text-gray-200 cursor-pointer'>{sign}</div>
      </div>

      {/* buttons */}
      <div className="text-sm fixed bottom-16 left-0 right-0 mx-auto flex flex-row space-x-4 w-max">
        {/* sleep */}
        <div
         className='hstack flex-col text-white w-24 cursor-pointer'
         onClick={(e) => { props.sleepMac(e) }}
         >
          <div className='ml-7 h-10 w-10 bg-gray-700 rounded-full'>
            <CgSleep style={{ color: 'white', fontSize: '40px' }}/>
          </div>
          <span>Sleep</span>
        </div>
        {/* restart */}
        <div
         className='hstack flex-col text-white w-24 cursor-pointer'
         onClick={(e) => { props.restartMac(e) }}
         >
          <div className='ml-7 h-10 w-10 bg-gray-700 rounded-full'>
            <RiRestartLine style={{ color: 'white', fontSize: '40px' }}/>
          </div>
          <span>Restart</span>
        </div>
        {/* shut down */}
        <div
         className='hstack flex-col text-white w-24 cursor-pointer'
         onClick={(e) => { props.shutMac(e) }}
         >
          <div className='ml-7 h-10 w-10 bg-gray-700 rounded-full'>
            <CgLogOff style={{ color: 'white', fontSize: '40px' }}/>
          </div>
          <span>Shut Down</span>
        </div>
      </div>
    </div>
  )
}

export default Login
