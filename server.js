const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const eslint = require('eslint')
const path = require('path');
const routes = require('./routes');

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({force: false}).then(() => {

app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}!`));
});
