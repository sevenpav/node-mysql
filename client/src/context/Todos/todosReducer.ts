import { TodosStateInterface } from '../../interfaces'

import { INIT_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../types'

interface ActionInterface {
  type: string
  payload: any
}

type TodosReducerType = (
  state: TodosStateInterface,
  payload: ActionInterface
) => TodosStateInterface

const todosReducer: TodosReducerType = (state, { type, payload }) => {
  switch (type) {
    case INIT_TODOS:
      return {
        ...state,
        todos: [...payload]
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...payload]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: [...payload]
      }
    default:
      return state
  }
}

export default todosReducer
