import React from 'react'

const ExternalContent = ({ src }) => {
  return (
    <div className="external-content">
      <IframeComm
        attributes={{
          src: src, // La URL del contenido externo que deseas cargar
          width: '100%', // Personaliza el ancho del iframe según tus necesidades
          height: '100%', // Personaliza la altura del iframe según tus necesidades
        }}
      />
    </div>
  )
}

export default ExternalContent
