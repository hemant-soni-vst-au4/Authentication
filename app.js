const express = require('express');
const expressLayots = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();

//Db connection
const db = require('./config/keys.js').MongoURI;

//connecting to Mongo
mongoose.connect(db, { useNewUrlParser: true})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
//EJS
app.use(expressLayots);
app.set('view engine', 'ejs');

//BodyParser
app.use(express.urlencoded({ extended: false}));

//Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// connect flash
app.use(flash());

//global variable
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
})

//Routes
app.use('/', require('./Controller/index'))
app.use('/users', require('./Controller/user'))

const PORT = process.env.PORT || 5000;

app.listen(PORT,
  console.log(`Server started at port ${PORT}`));