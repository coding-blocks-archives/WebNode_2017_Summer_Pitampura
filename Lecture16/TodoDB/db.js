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
  task: Sequelize.DataTypes.STRING
})

db.sync().then(function () {
  console.log("Database is ready");
})

module.exports = {
  Todos
}