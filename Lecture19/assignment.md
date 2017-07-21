# Assignment Lecture 19
## Shopping Cart (with user authentication)

### Pages - 
 - `/` : Shopping Product list
 - `/signup` : Register new user
 - `/login` : Login
 - `/cart` : Cart of user (redirect to `/login` if not logged in)


### Products - 
 - Should have 
  - Name  
  - Photo
  - Price
  - Available Quantity

 - When user adds product to cart, available quantity to decrease
 - When avlbl qty < 1, don't allow adding to cart. 

### Cart Products - 
Should have userId, so that we can find products in a user's cart by using `cartProduct.findOne({where: {userId: req.user.id}})`

