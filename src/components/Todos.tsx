import React from 'react'
import { type listOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: listOfTodos
  onRemoveTodo: (id: string) => void
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
