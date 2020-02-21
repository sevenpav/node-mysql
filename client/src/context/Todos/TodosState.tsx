import React, { useReducer, useEffect } from 'react'

import TodosContext from './TodosContext'
import todosReducer from './todosReducer'

import { TodoType, TodosStateType } from '../../types'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, INIT_TODOS } from '../actions'

import TodoService from '../../services/todo-service'

const TodosState: React.FC = ({ children }) => {
  const initialState: TodosStateType = {
    todos: []
  }

  const todoService = new TodoService()

  const [state, dispatch] = useReducer(todosReducer, initialState)

  const initTodos = (todos: TodoType[]): void => {
    dispatch({
      type: INIT_TODOS,
      payload: todos
    })
  }

  useEffect(() => {
    todoService.getTodos().then(todos => initTodos(todos))
  }, [])

  const addTodo = (todo: { title: string }): void => {
    todoService
      .addTodo(todo)
      .then(todos => dispatch({ type: ADD_TODO, payload: todos }))
  }

  const removeTodo = (id: number): void => {
    todoService.removeTodo(id).then(() => {
      const newTodos = state.todos.filter(todo => id !== todo.id)
      dispatch({
        type: REMOVE_TODO,
        payload: newTodos
      })
    })
  }

  const toggleTodo = (id: number, done: boolean): void => {
    todoService.toggleTodo(id, done).then(() => {
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
    })
  }

  const { todos } = state

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosState
