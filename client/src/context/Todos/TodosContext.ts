import { createContext } from 'react'
import { TodoInterface } from '../../interfaces'

interface TodosContextInterface {
  todos: TodoInterface[]
  addTodo: (todo: TodoInterface) => void
}

const TodosContext = createContext({} as TodosContextInterface)

export default TodosContext
