const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
	location: { type: String, required: true },
	price: { type: Number, required: true },
	images: [{ type: String }],
	available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Property', PropertySchema);
