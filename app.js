const express = require('express');
const expressLayots = require('express-ejs-layouts');
const mongoose = require('mongoose');
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

//Routes
app.use('/', require('./Controller/index'))
app.use('/users', require('./Controller/user'))

const PORT = process.env.PORT || 5000;

app.listen(PORT,
  console.log(`Server started at port ${PORT}`));