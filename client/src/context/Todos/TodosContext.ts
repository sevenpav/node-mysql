import { createContext } from 'react'
import { TodoType } from '../../types'

type TodosContextType = {
  todos: TodoType[]
  loading: boolean
  addTodo: <T extends { title: string }>(todo: T) => void
  removeTodo: (id: number) => void
  toggleTodo: (id: number, done: boolean) => void
}

const TodosContext = createContext({} as TodosContextType)

export default TodosContext
