import React from 'react'

import { Todo } from './Todo'
import { type listOfTodos, type TodoId } from '../types'

interface Props {
  todos: listOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
}

const Todos: React.FC <Props> = ({ todos, onRemoveTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''}`}>
         <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onRemoveTodo={onRemoveTodo}
         />
        </li>
      ))}
    </ul>
  )
}

export default Todos

// https://github.com/typescript-cheatsheets/react
