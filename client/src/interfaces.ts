export interface TodoInterface {
  title: string
  completed: boolean
  id: number
}

export interface TodosStateInterface {
  todos: TodoInterface[]
}
