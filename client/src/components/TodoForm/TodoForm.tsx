import React, { useState, useContext } from 'react'
import TodosContext from '../../context/Todos/TodosContext'

const TodoForm: React.FC = () => {
  const [value, setValue] = useState('')

  const { addTodo } = useContext(TodosContext)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  const onSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key !== 'Enter' || !value.trim().length) return

    addTodo({
      title: value
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

export default TodoForm
