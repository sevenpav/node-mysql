import { TodosStateType, TodoType } from '../../types'

import { INIT_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions'

type ActionType = {
  type: string
  payload: TodoType[]
}

type TodosReducerType = (
  state: TodosStateType,
  payload: ActionType
) => TodosStateType

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
        todos: [...payload, ...state.todos]
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
