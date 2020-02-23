import React, { useContext } from 'react'
import './TodoList.scss'
import TodosContext from '../../context/Todos/TodosContext'
import ErrorAlert from '../ErrorAlert/ErrorAlert'

const TodoList: React.FC = () => {
  const { todos, error, removeTodo, toggleTodo } = useContext(TodosContext)

  if (error) {
    return <ErrorAlert msg={error} />
  }

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
            </label>
            <i
              className="material-icons red-text"
              onClick={() => removeTodo(id)}>
              delete
            </i>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
