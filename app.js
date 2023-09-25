var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes');
var usersRouter = require('./routes/users.route');
var loginRouter = require('./routes/login.route');
var brandRoute = require('./routes/brand.route');
var categoryRoute = require('./routes/category.route');
var productRoute = require('./routes/product.route')

const { errorHandler } = require('./middlewares/errorHandler.middleware');
const { authMiddleware } = require('./middlewares/auth.middleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/brands', brandRoute);
app.use('/category', categoryRoute);
app.use('/products', productRoute);

app.use(authMiddleware)
app.use(errorHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
}); 


module.exports = app;
