import { TodoInterface, TodosInterface } from '../../interfaces'

import { ADD_TODO } from '../types'

type TodosActionType = {
  type: string
  payload: TodoInterface
}

const todosReducer = (
  state: TodosInterface,
  action: TodosActionType
): TodosInterface => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default:
      return state
  }
}

export default todosReducer
