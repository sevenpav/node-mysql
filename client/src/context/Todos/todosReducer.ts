import { TodosStateType, TodoType } from '../../types'

import {
  INIT_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from './actions'

type ActionType = {
  type: string
  payload?: any
}

type TodosReducerType = (
  state: TodosStateType,
  payload: ActionType
) => TodosStateType

const todosReducer: TodosReducerType = (state, { type, payload }) => {
  switch (type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      }
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
