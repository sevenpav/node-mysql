export type TodoType = {
  title: string
  done: boolean
  id: number
  createdAt: string
  updatedAt: string
}

export type TodosStateType = {
  todos: TodoType[]
  loading: boolean
  error: string | null
}
