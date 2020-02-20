import React from 'react'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { TodoList } from '../../components/TodoList/TodoList'

export const Home: React.FC = () => {
  return (
    <div className="row">
      <div className="col xl6 push-xl3">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}
