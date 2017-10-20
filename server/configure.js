var path = require('path'),
    routes = require('./routes'),
    hbs = require('express-handlebars');
    express = require('express'),
    router = express.Router(),
    morgan = require('morgan'),
    request = require('request'),
    //methodOverride = require('method-override'),
    errorHandler = require('errorhandler');

module.exports = function (app) {
    
    //configuration 
    //setting Handlebars as the rendering engine of choice
    app.engine('hbs', hbs.create({
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials'],
    //     // helpers: {
    //     //     timeago: function (timestamp) {
    //     //         return moment(timestamp).startOf('minute').fromNow();
    //     //     }
    //     // }
     }).engine);
     app.set('view engine', 'hbs');

    routes.initialize(app, new express.Router());

    app.use('/public/', express.static(path.join(__dirname, '../public')));
    app.use(morgan('dev'));
    if ('development' === app.get('env')) {
       app.use(errorHandler());
    }

    return app;
};