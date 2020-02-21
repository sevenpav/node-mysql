import { Router } from 'express'
import Todo from '../models/todo'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll({ order: [['updatedAt', 'DESC']] })

    res.status(200).json(todos)
  } catch (e) {
    console.log(e)

    res.status(500).json({
      message: 'Server error'
    })
  }
})

router.post('/', async (req, res) => {
  const { title } = req.body

  try {
    const todo = await Todo.create({
      title,
      done: false
    })

    res.status(201).json([todo])
  } catch (e) {
    console.log(e)

    res.status(500).json({
      message: 'Server error'
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(Number(req.params.id))

    if (todo) {
      todo.done = req.body.done

      await todo.save()

      res.status(200).end()
    }
  } catch (e) {
    console.log(e)

    res.status(500).json({
      message: 'Server error'
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(Number(req.params.id))

    if (todo) {
      await todo.destroy()

      res.status(204).end()
    }
  } catch (e) {
    console.log(e)

    res.status(500).json({
      message: 'Server error'
    })
  }
})

export default router
