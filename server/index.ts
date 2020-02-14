import * as express from 'express'
import * as cors from 'cors'
import * as mysql from 'mysql'
import * as path from 'path'

const app = express()

// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST_IP,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE
// })

app.use(cors())

app.get('/', (req, res) => {
  res.status(200)
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(
    `App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`
  )
})
