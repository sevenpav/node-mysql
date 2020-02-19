import React, { useState, useContext } from 'react'
import TodosContext from '../../context/todos/TodosContext'

export const TodoForm: React.FC = () => {
  const [value, setValue] = useState('')

  const { addTodo } = useContext(TodosContext)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  const onSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key !== 'Enter') return

    addTodo({
      id: Date.now(),
      title: value,
      completed: false
    })

    setValue('')
  }

  return (
    <div className="input-field">
      <input
        value={value}
        type="text"
        id="title"
        placeholder="Название задачи"
        onChange={changeHandler}
        onKeyPress={onSubmit}></input>
      <label htmlFor="title" className="active">
        Новая задача
      </label>
    </div>
  )
}
