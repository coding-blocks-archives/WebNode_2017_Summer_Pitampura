/**
 * Created by championswimmer on 21/07/17.
 */
const express = require('express');
const path = require('path');
const session = require('express-session')
const cp = require('cookie-parser');
const bp = require('body-parser');
const passport = require('./passport.js')

const app = express();


app.use(cp('somesecret'));
app.use(session({
  secret: 'somesecret',
  resave: false,
  saveUninitialized: true
}));
app.use(bp.urlencoded({extended: true}))
app.use(bp.json())

app.use(passport.initialize());
app.use(passport.session());

app.use((r,s,n) => {
  console.log(r.user); n();
})

function checkLoggedIn(req, res, next) {
  console.log('check logged in');
  if (req.user) {
      next();
  } else {
      res.status(404).send('Unauthorised')
  }
}


app.use('/public', express.static(path.join(__dirname, "public")))
app.use('/private', checkLoggedIn, express.static(path.join(__dirname, "private")))

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/public',
    successRedirect: '/private'
  }),
);

app.listen(1234, function () {
    console.log("Server started on http://localhost:1234");
});