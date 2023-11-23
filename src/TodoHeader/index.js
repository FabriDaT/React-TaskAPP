import React, { Children } from 'react'

const TodoHeader = ({children}) => {
  return (
    <header>
        {children}
    </header>
  )
}

export {TodoHeader}