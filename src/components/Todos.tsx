import React from 'react'
import { type listOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: listOfTodos
}

const Todos: React.FC <Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''}`}>
         <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
         />
        </li>
      ))}
    </ul>
  )
}

export default Todos

// https://github.com/typescript-cheatsheets/react
