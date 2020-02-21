import { Sequelize } from 'sequelize'

const {
  MYSQL_HOST_IP: HOST_IP = '',
  MYSQL_DATABASE: DATABASE = '',
  MYSQL_USER: USER = '',
  MYSQL_PASSWORD: PASSWORD = ''
} = process.env

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  define: {
    charset: 'utf8'
  },
  host: HOST_IP,
  dialect: 'mysql'
})

export default sequelize
