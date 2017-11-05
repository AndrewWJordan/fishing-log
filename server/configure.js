var express = require('express'),
    sassMiddleware = require('node-sass-middleware'),
    path = require('path'),
    routes = require('./routes'),
    hbs = require('express-handlebars'),
    router = express.Router(),
    morgan = require('morgan'),
    //methodOverride = require('method-override'),
    errorHandler = require('errorhandler');

module.exports = function (app) {
    app.use(morgan('dev'));
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

    // Adding SASS
    app.use(sassMiddleware({
        src: 'sass',
        dest: 'public',
        debug: true,
        outputStyle: 'compressed'
    }));

    app.use('/public', express.static(path.join(__dirname, '../public')));

    if ('development' === app.get('env')) {
       app.use(errorHandler());
    }

    return app;
};