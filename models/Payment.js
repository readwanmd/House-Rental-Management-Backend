const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
	booking: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Booking',
		required: true,
	},
	amount: { type: Number, required: true },
	method: { type: String, required: true },
	status: {
		type: String,
		enum: ['pending', 'completed', 'failed'],
		default: 'pending',
	},
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', PaymentSchema);
