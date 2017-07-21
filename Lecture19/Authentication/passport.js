/**
 * Created by championswimmer on 21/07/17.
 */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('./users')

passport.serializeUser(function (user, done) {
  console.log('serialize');
  done(null, user.id)
});

passport.deserializeUser(function (userId, done) {
  console.log('deserialize');
  done(null, users[userId])
});


const localStrategy = new LocalStrategy(
  function (username, password, done) {
    console.log('local strategy');
   for (let i in users) {
     if (users[i].username == username) {
       if (users[i].password == password) {
         users[i].id = i;
         done(null, users[i])
       } else {
         done(null, false, {message: 'Wrong password'})
       }
     }
   }
   done(null, false, {message: 'User not found'})
});

passport.use(localStrategy);

module.exports = passport;