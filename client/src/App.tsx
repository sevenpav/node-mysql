import React, { useState } from 'react'
import 'materialize-css/sass/materialize.scss'

import { TodoForm } from './components/TodoForm/TodoForm'
import { TodoList } from './components/TodoList/TodoList'
import { TodoInterface } from './interfaces'

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([])

  const addHandler = (title: string) => {
    const newTodo: TodoInterface = {
      title,
      completed: false,
      id: Date.now()
    }

    setTodos(prev => [newTodo, ...prev])
  }

  return (
    <div className="App container">
      <TodoForm addTodo={addHandler} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
