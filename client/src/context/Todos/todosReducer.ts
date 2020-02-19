import { TodosInterface } from '../../interfaces'

import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, INIT_TODOS } from '../types'

type TodosActionType = {
  type: string
  payload: any
}

const todosReducer = (
  state: TodosInterface,
  action: TodosActionType
): TodosInterface => {
  switch (action.type) {
    case INIT_TODOS:
      return {
        ...state,
        todos: [...action.payload]
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...action.payload]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: [...action.payload]
      }
    default:
      return state
  }
}

export default todosReducer
