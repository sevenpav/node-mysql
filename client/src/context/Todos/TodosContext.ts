import { createContext } from 'react'
import { TodoInterface } from '../../interfaces'

interface TodosContextInterface {
  todos: TodoInterface[]
  initTodos: (todos: TodoInterface[]) => void
  addTodo: (todo: TodoInterface) => void
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

const TodosContext = createContext({} as TodosContextInterface)

export default TodosContext
