var express = require('express'),
    //config = require('./server/configure'),
    app = express();

	app.set('port', process.env.PORT || 3300);
	//app.set('views', __dirname + '/views');
	//app = config(app);

	app.get('/', function (req, res) {
  		res.send('Hello World!')
	})

// Creating an HTTP server using our app object and tell it to listen
// to connections
var server = app.listen(app.get('port'), function () {
    console.log('Server is running at: http://localhost:' +
        app.get('port'));
    console.log('May node be with you.');
});