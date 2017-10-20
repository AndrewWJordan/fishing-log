// Pulling in logs from Cockpit CMS
var request = require('request');
request('localhost/cockpit-master/api/collections/get/logs?token=31e1edc3b2b4fcaf5a11173b2b8b88', function(error, response, body) {
	console.log(error);
	console.log('response && response.statusCode');
	console.log(body);
})