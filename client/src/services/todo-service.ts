import { TodoType } from '../types'

class TodoService {
  private _apiBase = `http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/todo`

  async getTodos(): Promise<TodoType[]> {
    const res = await fetch(this._apiBase)

    if (res.ok) {
      const todos = await res.json()

      return todos
    }

    const { message } = await res.json()

    throw new Error(message)
  }

  async addTodo(todo: { title: string }): Promise<TodoType[]> {
    const res = await fetch(this._apiBase, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    if (res.ok) {
      const todos = await res.json()

      return todos
    }

    const { message } = await res.json()

    throw new Error(message)
  }

  async removeTodo(id: number): Promise<void> {
    const res = await fetch(`${this._apiBase}/${id}`, {
      method: 'DELETE'
    })

    if (res.ok) {
      return
    }

    const { message } = await res.json()

    throw new Error(message)
  }

  async toggleTodo(id: number, done: boolean): Promise<void> {
    const res = await fetch(`${this._apiBase}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ done })
    })

    if (res.ok) {
      return
    }
    const { message } = await res.json()

    throw new Error(message)
  }
}

export default TodoService
