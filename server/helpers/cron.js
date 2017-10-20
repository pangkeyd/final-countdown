const cron = require('node-cron');
const sendMessage = require('./sendMessage');

module.exports = function(result) {
	cron.schedule('5 * * * *', function() {
		console.log('kirim ecemeess!');
		sendMessage(result);
	});
}