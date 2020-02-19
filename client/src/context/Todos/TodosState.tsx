import React, { useReducer } from 'react'

import TodosContext from './TodosContext'
import todosReducer from './todosReducer'

import { TodosInterface, TodoInterface } from '../../interfaces'
import { ADD_TODO } from '../types'

const TodosState: React.FC = ({ children }) => {
  const initialState: TodosInterface = {
    todos: []
  }

  const [state, dispatch] = useReducer(todosReducer, initialState)

  const addTodo = (todo: TodoInterface): void => {
    dispatch({
      type: ADD_TODO,
      payload: todo
    })
  }

  const { todos } = state

  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosState
