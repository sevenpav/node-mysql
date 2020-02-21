import React, { useReducer, useEffect } from 'react'

import TodosContext from './TodosContext'
import todosReducer from './todosReducer'

import { TodosStateType } from '../../types'
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  INIT_TODOS,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_REQUEST
} from './actions'

import TodoService from '../../services/todo-service'

const TodosState: React.FC = ({ children }) => {
  const initialState: TodosStateType = {
    todos: [],
    loading: true,
    error: null
  }

  const todoService = new TodoService()

  const [state, dispatch] = useReducer(todosReducer, initialState)

  useEffect(() => {
    todoService
      .fetchGetTodos()
      .then(todos => {
        dispatch({
          type: INIT_TODOS,
          payload: todos
        })

        dispatch({
          type: FETCH_SUCCESS
        })
      })
      .catch(e => {
        dispatch({
          type: FETCH_FAILURE,
          payload: e.message
        })
      })
  }, [])

  const addTodo = (todo: { title: string }): void => {
    dispatch({
      type: FETCH_REQUEST
    })
    todoService
      .fetchAddTodo(todo)
      .then(todos => {
        dispatch({ type: ADD_TODO, payload: todos })
        dispatch({
          type: FETCH_SUCCESS
        })
      })
      .catch(e => {
        dispatch({
          type: FETCH_FAILURE,
          payload: e.message
        })
      })
  }

  const removeTodo = (id: number): void => {
    dispatch({
      type: FETCH_REQUEST
    })
    todoService
      .fetchRemoveTodo(id)
      .then(() => {
        const newTodos = state.todos.filter(todo => id !== todo.id)
        dispatch({
          type: REMOVE_TODO,
          payload: newTodos
        })
        dispatch({
          type: FETCH_SUCCESS
        })
      })
      .catch(e => {
        dispatch({
          type: FETCH_FAILURE,
          payload: e.message
        })
      })
  }

  const toggleTodo = (id: number, done: boolean): void => {
    dispatch({
      type: FETCH_REQUEST
    })
    todoService
      .fetchToggleTodo(id, done)
      .then(() => {
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

        dispatch({
          type: FETCH_SUCCESS
        })
      })
      .catch(e => {
        dispatch({
          type: FETCH_FAILURE,
          payload: e.message
        })
      })
  }

  const { todos, loading } = state

  return (
    <TodosContext.Provider
      value={{ todos, loading, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosState
