import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'

import sequileze from './utils/database'
import todoRoutes from './routes/todo'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/todo', todoRoutes)

const { REACT_APP_SERVER_PORT: PORT } = process.env

const start = async (): Promise<void> => {
  try {
    await sequileze.sync()

    app.listen(PORT)
  } catch (e) {
    console.log(e)
  }
}

start()
