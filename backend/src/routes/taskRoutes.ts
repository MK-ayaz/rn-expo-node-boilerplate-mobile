import { Router } from 'express'
import { z } from 'zod'

const router = Router()

interface Task { id: string, title: string, completed: boolean }
let tasks: Task[] = [
  { id: '1', title: 'First task', completed: false },
  { id: '2', title: 'Second task', completed: true }
]

const paramsSchema = z.object({ id: z.string().min(1) })
const createTaskSchema = z.object({ title: z.string().min(1) })
const updateTaskSchema = z.object({ completed: z.boolean() })

router.get('/', (req, res) => {
  res.json(tasks)
})

router.post('/', (req, res) => {
  const parseResult = createTaskSchema.safeParse(req.body)
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.format() })
  }

  const newTask: Task = {
    id: crypto.randomUUID(),
    title: parseResult.data.title,
    completed: false
  }
  tasks.push(newTask)
  res.status(201).json(newTask)
})

router.put('/:id', (req, res) => {
  const params = paramsSchema.safeParse(req.params)
  if (!params.success) return res.status(400).json({ error: params.error.issues })

  const body = updateTaskSchema.safeParse(req.body)
  if (!body.success) {
    return res.status(400).json({ error: body.error.format() })
  }

  const id = params.data.id
  const task = tasks.find((item) => item.id === id)
  if (!task) return res.status(404).json({ error: 'Task not found' })

  task.completed = body.data.completed
  res.json(task)
})

router.delete('/:id', (req, res) => {
  const params = paramsSchema.safeParse(req.params)
  if (!params.success) return res.status(400).json({ error: params.error.issues })

  const id = params.data.id
  tasks = tasks.filter((task) => task.id !== id)
  res.status(204).end()
})

export default router
