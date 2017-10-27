// Pulling in logs from Cockpit CMS
var request = require('request');

 // var viewModel = {
 // 	logs: "Testing! That's it!",
 // };

 // module.exports = viewModel;

 function getLogs(req, res) {
		var viewModel = {
			logs: {}
		}
		request('http://localhost/cockpit-master/api/collections/get/logs?token=31e1edc3b2b4fcaf5a11173b2b8b88', function(error, response, body) {
			pipe(res.body);
			
		})
	}
module.export = getLogs;