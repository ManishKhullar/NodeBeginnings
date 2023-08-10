var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require('http')
const fs = require('fs')

/*FIXME: Database congifuration
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var mysql = require("mysql")
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  //password: "Scriptlanes@1",
  password: "root",
  database: "Manish"
})
global.mysqldbconnection = {
  query: function () {
    var sql_args = [];
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    var callback = args[args.length - 1]; //last arg is callback

    pool.getConnection(function (err, connection) {
      if (err) {
        console.log(err);
        return callback(err);
      }
      if (args.length > 2) {
        sql_args = args[1];
      }

      connection.query(args[0], sql_args, function (err, results) {
        connection.release(); // always put connection back in pool after last query
        if (err) {
          console.log(err);
          return callback(err);
        }
        callback(null, results);
      });
    });
  }
};

//Req, Res and Next are handlers of the application level middleware
//global.dbquery = dbquery;
console.log("Server started successfully");
var app = express();
//app.use() loads middleware function
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return next(createError(404));
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

module.exports = app;
 */


//TODO: fs module example

const server = http.createServer(
  (request, response) => {
     response.writeHead(200, {'Content-Type': 'text/html'})
     fs.readFile('C:/Users/Aryabhatta/Documents/bookmarks_06_08_2022.html',(err,file) =>{
      response.end(file);
     })
     //response.end("Hello World") 
    })
server.listen(8000)


//TODO: HTTP Request Lifecycle example

const port = process.env.PORT || 8020;

function hardWorker(req, res, workerID, sleepTime, cb){
  setTimeout(()=>{
    res.end(`hello no ${workerID} from server\n`);
    cb();
  }, sleepTime * 1000);
}

let numOfWorkers = 0;

const servere = http.createServer((req, res)=>{
  const workerID = ++numOfWorkers;
  const sleepTime = Math.floor(Math.random() * (10 - 3 + 1) + 3)
  console.log(`Welcome! ${workerID} (${sleepTime}s)`);
  hardWorker(req, res, workerID, sleepTime, () => {
    console.log(`done ${workerID}`);
  });
});

  servere.listen(port, () => {
    console.log(`sever is running: http://localhost:${port}`);
  });
