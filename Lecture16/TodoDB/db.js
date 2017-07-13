/**
 * Created by championswimmer on 11/07/17.
 */
const Sequelize = require('sequelize');

const db = new Sequelize({
  host: 'localhost',
  username: 'someuser',
  database: 'somedatabase',
  password: 'somepass',
  dialect: 'mysql'
})


const Todos = db.define('todos', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  task: Sequelize.DataTypes.STRING,
  done: Sequelize.DataTypes.BOOLEAN
})

db.sync({alter: true}).then(function () {
  console.log("Database is ready");
})

function addTodo(task) {
  return Todos.create({
    task: task,
    done: false
  })
}

function getTodos () {
  return Todos.findAll()
}

module.exports = {
  addTodo, getTodos
}