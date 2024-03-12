import React from 'react'

const VideoGame: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col mx-14'>
    <div className='flex items-center mt-10'>
      <span className='text-gray-400 mr-2'>H1</span>
      <h1 className='text-3xl'>VideoGame</h1>
    </div>
    <div className='flex items-center mt-5'>
      <span className='text-gray-400 mr-2'>H2</span>
      <h2 className='text-xl'>Pagina Web</h2>
    </div>
    <p className='ml-7 text-base text-orange-400'>Enero 2023 - Febrero 2023</p>
    <p className='ml-7 text-base'>Link al Repositorio: <a href='https://github.com/ChristianTaboada/PI-Videogames-main' target='blank'>https://github.com/ChristianTaboada/PI-Videogames-main</a></p>
    <p className='ml-7 text-base mt-2'>Creación de una Pagina Web conectada con una Api, para que se puedan ver los distintos tipos de juegos segun la categoria, ranking, nombre.</p>
      <ul className='list-disc ml-11 mt-5'>
        <li>
          <p>Se utilizo React con Redux  y CSS puro, para darle estilo a la pagina</p>
        </li>
        <li>
          <p>Integración con API de Videojuegos: Implementé una conexión con una API de videojuegos para obtener información actualizada y detallada sobre los títulos disponibles, incluyendo datos como género, plataforma, año de lanzamiento y más.</p>
        </li>
        <li>
          <p>Búsqueda Avanzada: Implementación de filtros de búsqueda que te permiten encontrar juegos según género, plataforma, año de lanzamiento, e incluso por nombre específico.</p>
        </li>
        <li>
          <p>Exploración Personalizada: Diseñé la funcionalidad de búsqueda por nombre de videojuego para que los usuarios puedan encontrar fácilmente los títulos que desean agregar a su colección.</p>
        </li>
        <li>
          <p>Ordena y Organiza: Desarrollé herramientas de ordenamiento y agregado de videojuegos, permitiéndote personalizar y organizar tu colección de acuerdo a tus preferencias y gustos.</p>
        </li>
        <li>
          <p>Interfaz Intuitiva: Me encargué de diseñar una interfaz de usuario amigable que hace que la gestión de tu colección sea una experiencia fluida y agradable.</p>
        </li>
        <div className='flex flex-col mt-2 space-y-2 mb-5'>
          <img src='img/projects/videogameHome.png' style={{ width: '20rem', height: '15rem', objectFit: 'cover' }}/>
          <img src='img/projects/videogameLoading.png' style={{ width: '20rem', height: '15rem', objectFit: 'cover' }}/>
        </div>
      </ul>
  </div>
  )
}
export default VideoGame
