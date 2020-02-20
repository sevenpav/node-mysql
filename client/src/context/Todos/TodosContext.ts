import { createContext } from 'react'
import { TodoType } from '../../types'

type TodosContextType = {
  todos: TodoType[]
  addTodo: <T extends { title: string }>(todo: T) => void
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

const TodosContext = createContext({} as TodosContextType)

interface Car {
  name: string
  year: number
}

export default TodosContext
