import { Model, DataTypes, BuildOptions } from 'sequelize'
import sequelize from '../utils/database'

interface TodoModel extends Model {
  readonly id: number
  done: boolean
  title: string
}

type TodoModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): TodoModel
}

const Todo = sequelize.define('Todo', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
}) as TodoModelStatic

export default Todo
