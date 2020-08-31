const express = require('express');
const expressLayots = require('express-ejs-layouts');

const app = express();

//EJS
app.use(expressLayots);
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./Controller/index'))
app.use('/users', require('./Controller/user'))

const PORT = process.env.PORT || 5000;

app.listen(PORT,
  console.log(`Server started at port ${PORT}`));