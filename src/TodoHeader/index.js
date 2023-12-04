import React, { Children, cloneElement } from 'react'

const TodoHeader = ({children, loading}) => {
  return (
    <header>
        {Children
          .toArray(children)
          .map(child => cloneElement(child, {loading}))
        } 
    </header>
  )
}

export {TodoHeader}

//crear o clonar un elemento a partir de otro ( children en este caso), puede llevar un 2º argumento con 
// las propiedades que querramos que tenga el nuevo elemento.
// CloneElem solo puede entender 1 elemento jsx no varios o un array... antes del Children => {cloneElement(children, {loading} )}
// por eso es que usamos el Children que te trae consigo varios metodos que nos permiten trabajar con grupos de ele,
 