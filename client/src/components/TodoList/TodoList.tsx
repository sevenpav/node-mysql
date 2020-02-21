import React, { useContext } from 'react'
import './TodoList.scss'
import TodosContext from '../../context/Todos/TodosContext'

export const TodoList: React.FC = () => {
  const { todos, removeTodo, toggleTodo } = useContext(TodosContext)

  if (todos.length === 0) {
    return <p className="center flow-text">Задач нет</p>
  }

  return (
    <ul className="todo-list">
      {todos.map(({ id, done, title }) => {
        const completedClass = done ? 'completed' : ''

        return (
          <li className={`todo grey lighten-3 ${completedClass}`} key={id}>
            <label>
              <input
                type="checkbox"
                checked={done}
                onChange={() => toggleTodo(id, !done)}
              />
              <span>{title}</span>
              <i
                className="material-icons red-text"
                onClick={() => removeTodo(id)}>
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
