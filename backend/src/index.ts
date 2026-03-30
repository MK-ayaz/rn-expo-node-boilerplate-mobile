import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import taskRouter from './routes/taskRoutes'
import { errorHandler } from './middleware/errorHandler'

dotenv.config()

const app = express()
const port = Number(process.env.PORT ?? 5000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/health', (req, res) => res.json({ status: 'ok' }))
app.use('/api/tasks', taskRouter)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Backend API running on http://localhost:${port}`)
})
