const express = require('express')
const router = require('./routes/index');

var app = express();

// use body parsers and routes declared in index.js
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendStatus(err.status || 500);
  res.render('error');
});

module.exports = {
  app
}