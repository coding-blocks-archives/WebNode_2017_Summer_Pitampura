/**
 * Created by championswimmer on 16/07/17.
 */
const MongoClient = require('mongodb').MongoClient;

let mongoUrl = "mongodb://localhost:27017/elixir"

MongoClient.connect(mongoUrl, function (err, db) {
  if (err) throw err;

  console.log("Connected to mongodb");
  insertUser(db)

  //db.close();

})

async function insertUser(db) {
  const users = db.collection('users')

  users.insertOne({
    name: 'John Doe',
    age: 20,
    country: 'Wonderland'
  }).then(function (result) {
    console.log(result);
    return result;
  }).catch(function (err) {
    throw err;
  })
}