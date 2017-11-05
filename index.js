var express = require('express'),
    config = require('./server/configure'),
    app = express();

// set the port
var port = process.env.PORT || 7500;

//app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

// Creating an HTTP server using our app object and tell it to listen
// to connections
var server = app.listen(port, function () {
    console.log('Server is running at: http://localhost:' + port);
    console.log('May node be with you. c[_]');
});