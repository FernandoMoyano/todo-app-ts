import { useState } from 'react'
import Todos from './components/Todos'
import { type TodoId, type TodoTitle } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Sacar a pasear al perro',
    completed: false
  },
  {
    id: '2',
    title: 'Lavar la ropa',
    completed: false
  },
  {
    id: '3',
    title: 'Hacer de comer',
    completed: true
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
         onRemoveTodo={handleRemove}
         todos={todos}
         />
    </div>
  )
}

export default App
