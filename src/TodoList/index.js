import React from 'react'
import './TodoList.css'

function TodoList(props) {

  return (
    <section className='TodoList-Container'>

        {props.error && props.onError()}

        {props.loading && props.onLoading()}

        {(!props.loading && !props.totalTodos) &&  props.onEmptyTodos() }

        {props.searchedTodos.map(props.render)}

        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

        <ul>
            {props.render}
        </ul>
    </section>
  )
}

export {TodoList}