module.exports = {
	index: function (req, res) {
		res.render('form', {info: 'Please fill out the following form fields.', error: null});
	}
};