var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},

	subject: {
		type: String,
		default: 'No subject',
		required: true
	},

	message: {
		type: String,
		required: true
	},

	dateCreated: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Message', messageSchema);