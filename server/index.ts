import * as express from 'express'
import * as cors from 'cors'
import * as mysql from 'mysql2'
import * as path from 'path'
import * as bodyParser from 'body-parser'

const app = express()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

const promisePool = pool.promise()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/todos', async (req, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM todos')
    res.status(200)
    res.setHeader('Content-Type', 'application/json')
    res.send(rows)
  } catch (e) {
    res.send(e)
    res.status(500)
    throw new Error()
  }
})

app.post('/api/todo', async (req, res) => {
  const sql = `INSERT INTO todos (title, completed, created) VALUES ('${req.body.title}', FALSE, NOW())`

  try {
    const [queryRes] = await promisePool.query(sql)

    const [row] = await promisePool.query(
      // @ts-ignore
      `SELECT * FROM todos WHERE id = ${queryRes.insertId}`
    )

    res.status(200)
    res.setHeader('Content-Type', 'application/json')
    res.send(row)
  } catch (e) {
    res.send(e)
    res.status(500)
    throw new Error()
  }
})

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(
    `App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`
  )
})
