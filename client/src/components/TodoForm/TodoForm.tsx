import React, { useState } from 'react'

type TodoFormProps = {
  addTodo: (title: string) => void
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  const onSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key !== 'Enter') return

    addTodo(value)

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
