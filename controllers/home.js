//var LogModel = require('../models').Logs; 

module.exports = {
	index: function (req, res) {
		var url = 'http://localhost/cockpit-master/api/collections/get/test?token=31e1edc3b2b4fcaf5a11173b2b8b88';

		request(url, function (err, response, body) {
			if(err) {
				res.render('index', {story: null, error: 'Holy moly! Something went wrong!'});
			} else {
				var stories = JSON.parse(body);
				console.log(stories);
				if(stories == undefined) {
					res.render('index', {story: null, error: "Man! We're striking out!"});
				} else {
					console.log(stories.entries);
					res.render('index', {story: stories.entries, error: 'No errors!'});
				}
			}
		})
	}
}