import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import logger from 'morgan';

import cookRouter from './routes';

var app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/cooks', cookRouter);

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
  res.status(err.status || 500);
  res.render('error');
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});