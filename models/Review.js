const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
	property: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Property',
		required: true,
	},
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	rating: { type: Number, required: true },
	comment: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Review', ReviewSchema);
