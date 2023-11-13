import React from 'react'
import { FaGamepad, FaDog, FaStar, FaFilm, FaLeaf, FaLaptop, FaCalendarAlt } from 'react-icons/fa'

const Hobbies: React.FC = (): JSX.Element => {
  const hobbiesData = [
    {
      title: 'Videojuegos',
      icon: <FaGamepad />,
      description: 'Disfruto jugando una variedad de juegos como LoL, WoW, Dota, CS:GO, entre otros.'
    },
    {
      title: 'Amante de los perros',
      icon: <FaDog />,
      description: 'Me encantan los animales, especialmente los perros. Tengo 2 huskies hermosos llamados Yuki y Arya.'
    },
    {
      title: 'Fan de One Piece y anime en general',
      icon: <FaStar />,
      description: 'Soy un fanático de One Piece y disfruto viendo anime en general. Siempre emocionado por nuevas temporadas y lanzamientos.'
    },
    {
      title: 'Aficionado de series y películas',
      icon: <FaFilm />,
      description: 'Me encanta sumergirme en historias. Soy un gran seguidor de las series y películas, especialmente del universo Marvel.'
    },
    {
      title: 'Disfrutar de la tranquilidad',
      icon: <FaLeaf />,
      description: 'Encuentro paz y tranquilidad en momentos de calma. A veces, no hay nada mejor que disfrutar del silencio.'
    },
    {
      title: 'Apasionado por las computadoras y construcción de PC',
      icon: <FaLaptop />,
      description: 'Desde siempre, me fascinan las computadoras. He construido mi propia PC y disfruto explorando nuevas tecnologías.'
    },
    {
      title: 'Asistir a eventos de videojuegos y cultura pop',
      icon: <FaCalendarAlt />,
      description: 'Me encanta participar en eventos relacionados con videojuegos y cultura pop, como la Comic Con y la Argentina Game Show.'
    },
    {
      title: 'Interesado en participar en eventos de programación',
      icon: <FaCalendarAlt />,
      description: 'Estoy ansioso por participar en eventos de programación como Nerdearla. La programación es una de mis pasiones.'
    }
  ]

  return (
    <div className='flex flex-col mx-10'>
      <div className='flex items-center mt-5'>
        <span className='text-gray-400 mr-2'>H1</span>
        <h2 className='text-2xl'>Mis Pasatiempos y Gustos</h2>
      </div>

      <div className='flex items-center mt-2'>
        <ul className='ml-8 mt-2'>
          {hobbiesData.map((hobby) => (
            <li key={hobby.title} className='flex items-center text-orange-500 mb-1'>
                <div className='flex'>
                    <span className='mt-2 mr-2'>{hobby.icon}</span>
                    <div className='flex flex-col'>
                        <h3 className='text-lg'>{hobby.title}</h3>
                        <p className='text-gray-500 text-sm'>{hobby.description}</p>
                    </div>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Hobbies
