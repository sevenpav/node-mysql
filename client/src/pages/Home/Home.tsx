import React, { useState, useEffect } from 'react'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { TodoList } from '../../components/TodoList/TodoList'
import { TodoInterface } from '../../interfaces'

export const Home: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('todos')

    const todos = JSON.parse(saved || '[]') as TodoInterface[]
    setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string): void => {
    const newTodo: TodoInterface = {
      title,
      completed: false,
      id: Date.now()
    }

    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number): void => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo
      })
    )
  }

  const removeHandler = (id: number): void => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className="row">
      <div className="col xl6 push-xl3">
        <TodoForm addTodo={addHandler} />
        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </div>
  )
}
