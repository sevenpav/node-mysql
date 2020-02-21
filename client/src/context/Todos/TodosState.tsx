import React, { useReducer, useEffect } from 'react'

import TodosContext from './TodosContext'
import todosReducer from './todosReducer'

import { TodoType, TodosStateType } from '../../types'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, INIT_TODOS } from '../actions'

const TodosState: React.FC = ({ children }) => {
  const initialState: TodosStateType = {
    todos: []
  }

  const [state, dispatch] = useReducer(todosReducer, initialState)

  const initTodos = (todos: TodoType[]): void => {
    dispatch({
      type: INIT_TODOS,
      payload: todos
    })
  }

  const getTodos = async (): Promise<TodoType[]> => {
    try {
      const res = await fetch(
        `http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/todo`
      )

      const todos = await res.json()

      return todos
    } catch (e) {
      console.log(e)

      return []
    }
  }

  useEffect(() => {
    getTodos().then(todos => initTodos(todos))
  }, [])

  const addTodo = async <T extends { title: string }>(
    todo: T
  ): Promise<void> => {
    try {
      const res = await fetch(
        `http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/todo`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(todo)
        }
      )

      dispatch({ type: ADD_TODO, payload: await res.json() })
    } catch (e) {
      throw new Error(e)
    }
  }

  const removeTodo = async (id: number): Promise<void> => {
    try {
      await fetch(
        `http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/todo/${id}`,
        {
          method: 'DELETE'
        }
      )
      const newTodos = state.todos.filter(todo => id !== todo.id)

      dispatch({
        type: REMOVE_TODO,
        payload: newTodos
      })
    } catch (e) {
      throw new Error(e)
    }
    const newTodos = state.todos.filter(todo => id !== todo.id)

    dispatch({
      type: REMOVE_TODO,
      payload: newTodos
    })
  }

  const toggleTodo = async (id: number, done: boolean): Promise<void> => {
    try {
      await fetch(
        `http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/todo/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ done })
        }
      )

      const newTodos = state.todos.map(todo => {
        if (todo.id === id) {
          todo.done = done
        }

        return todo
      })

      dispatch({
        type: TOGGLE_TODO,
        payload: newTodos
      })
    } catch (e) {
      throw new Error(e)
    }
  }

  const { todos } = state

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosState
