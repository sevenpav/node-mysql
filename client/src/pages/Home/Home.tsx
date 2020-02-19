import React, { useEffect, useContext } from 'react'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { TodoList } from '../../components/TodoList/TodoList'
import { TodoInterface } from '../../interfaces'
import TodosContext from '../../context/Todos/TodosContext'

export const Home: React.FC = () => {
  const { todos, initTodos } = useContext(TodosContext)

  useEffect(() => {
    const saved = localStorage.getItem('todos')
    const todos = JSON.parse(saved || '[]') as TodoInterface[]

    initTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="row">
      <div className="col xl6 push-xl3">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}
