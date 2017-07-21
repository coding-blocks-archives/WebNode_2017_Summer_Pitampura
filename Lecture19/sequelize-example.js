/**
 * Created by championswimmer on 21/07/17.
 */

const Product = db.define('product', {
  id: {
    primaryKey: true,
    type: Sequelize.DataTypes.Integer
  },
  name: Sequelize.DataTypes.STRING,
})

const User = db.define('user', {
  name: {},
  id: {}
});


const UserProduct = db.define('userproduct', {
  id: {}
})

UserProduct.belongsTo(User);
UserProduct.belongsTo(Product);
User.hasMany(UserProduct);
Product.hasMany(UserProduct);


UserProduct.find({
  where: {
    userId: 4
  },
  includes: [User, Product]
}).then(function(userProducts) {
  for (let up of userProducts) {
    let user = up.user;
    let product = up.product;
  }
})
