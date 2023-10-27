import React from 'react'
import { createPortal } from 'react-dom';
import './modal.css'

/* La funcion del portal es crear un nuevo nodo html fuera de la jerarquia DOM, dentro de nuestra app de react */
function Modal ({children}) {
 
  return (
    /*la funcion createPortal recibe 2 ARGUMENTOS, 1º el elemento que vamos a enviar, en
    este caso usamos {children} para poder reutilizar el componente MODAL y enviar lo que necesitemos atraves de este, 
    un form, una alerta de error, etc,etc...
     y el 2º es el nodo html donde se rendizara*/
    <div>
    { createPortal(
      <div className='modalBackground'>
        {children}
      </div>
      ,
      /* el elemento modal lo creamos en la carpeta public/index.html  */
      document.getElementById('modal')
    )}
   
  </div>
  )
}

export {Modal}