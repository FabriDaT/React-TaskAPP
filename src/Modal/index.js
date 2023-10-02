import React from 'react'
import { createPortal } from 'react-dom';
import './modal.css'


function Modal ({children}) {
 
  return (
    <div>
    { createPortal(
      <div className='modalBackground'>
        {children}
      </div>
      ,
      document.getElementById('modal')
    )}
   
  </div>
  )
}

export {Modal}