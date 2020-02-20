export type TodoType = {
  title: string
  completed: boolean
  id: number
  created: string
}

export type TodosStateType = {
  todos: TodoType[]
}
