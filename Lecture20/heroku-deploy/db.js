const Sequelize = require('sequelize');

process.env.DATABASE_URL =
  process.env.DATABASE_URL || `${dialect}://${user}:${pass}@${host}:@${port}/${database}`

// postgres://user:pass@domain:port/dbname
const db = new Sequelize(process.env.DATABASE_URL);

const Product = db.define('product', {
  id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.DataTypes.STRING,
  price: Sequelize.DataTypes.FLOAT
});

const User = db.define('user', {
  id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.DataTypes.STRING,
  email: Sequelize.DataTypes.STRING
});

const UserProduct = db.define('cart', {
  id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

User.belongsTo(UserProduct)
UserProduct.hasMany(User)

Product.belongsTo(UserProduct)
UserProduct.hasMany(Product)

Product.find({
  where: {
    '$userproduct.user.email$': 'a@cb.lk'
  },
  attributes: ['id', 'price', 'name'],
  includes: [{model: UserProduct, includes:[User]}]
}).then((products) => {

})
