export interface TodoInterface {
  title: string
  completed: boolean
  id: number
}

export interface TodosInterface {
  todos: TodoInterface[]
}
