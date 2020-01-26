const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const recipesRouter = require('./routes/recipes');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: '*/*' })); //todo: why dont i get proper app/json from client?
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/meal-planner', { useNewUrlParser: true});
var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', indexRouter);
app.use('/recipes', recipesRouter);

module.exports = app;
