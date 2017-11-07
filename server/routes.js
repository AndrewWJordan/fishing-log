var home = require('../controllers/home');
var form = require('../controllers/form');

module.exports.initialize = function(app, router) {
	router.get('/', home.index);
	app.use('/', router);
	router.get('/form', form.index);
}
