import React from 'react'
import { TodoInterface } from '../../interfaces'

type TodoListProps = {
  todos: TodoInterface[]
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ id, completed, title }) => {
        return (
          <li key={id}>
            <label>
              <input type="checkbox" checked={completed} />
              <span>{title}</span>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
