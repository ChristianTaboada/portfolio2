import React from 'react'

const DressMe: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col mx-14'>
    <div className='flex items-center mt-10'>
      <span className='text-gray-400 mr-2'>H1</span>
      <h1 className='text-3xl'>DressMe</h1>
    </div>
    <div className='flex items-center mt-5'>
      <span className='text-gray-400 mr-2'>H2</span>
      <h2 className='text-xl'>E-Commerce</h2>
    </div>
    <p className='ml-7 text-base text-orange-400'>Febrero 2023 - Abril 2023</p>
    <p className='ml-7 text-base mt-2'>Durante tres meses, formé parte de un equipo de desarrollo que construyó un eCommerce de ropa desde cero, utilizando la metodología ágil Scrum para una colaboración eficiente. Nuestro objetivo era proporcionar a los usuarios una experiencia de compra fluida y segura, priorizando la interactividad y la usabilidad.</p>
      <ul className='list-disc ml-11 mt-5'>
        <li>
          <p>Front-end: React y Redux fueron las principales tecnologías para crear una interfaz de usuario atractiva y altamente interactiva.</p>
        </li>
        <li>
          <p>Back-end: Utilizamos Express y Sequelize para desarrollar una API RESTful robusta y eficiente, gestionando la base de datos PostgreSQL.</p>
        </li>
        <li>
          <p>Autenticación: Implementamos Passport para garantizar la seguridad de los datos de los usuarios y proteger la autenticación.</p>
        </li>
        <li>
          <p>Integración de Pagos: Utilizamos MercadoPago para habilitar transacciones en línea seguras y sin problemas.</p>
        </li>
        <li>
          <p>Gestión de Imágenes: Cloudinary fue nuestra elección para la gestión y optimización de imágenes en la plataforma, mejorando el rendimiento y la velocidad de carga.</p>
        </li>
        <li>
          <p>Comunicación: Implementamos Nodemailer para integrar correos electrónicos en la plataforma y mantener a los usuarios informados.</p>
        </li>
        <li>
          <p>Integración de Mapas: Utilizamos Google Maps para ofrecer un mapa interactivo que mejorara la experiencia del usuario y facilitara la navegación.</p>
        </li>
        <div className='flex flex-col mt-2 space-y-2 mb-5'>
          <img src='img/projects/dressme1.jpg' style={{ width: '20rem', height: '15rem', objectFit: 'cover' }}/>
          <img src='img/projects/dressme2.jpg' style={{ width: '20rem', height: '15rem', objectFit: 'cover' }}/>
          <img src='img/projects/dressme3.jpg' style={{ width: '20rem', height: '15rem', objectFit: 'cover' }}/>
          <img src='img/projects/dressme4.jpg' style={{ width: '20rem', height: '15rem', objectFit: 'cover' }}/>
        </div>
      </ul>
  </div>
  )
}
export default DressMe
