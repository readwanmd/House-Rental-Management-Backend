const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
	property: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Property',
		required: true,
	},
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	status: {
		type: String,
		enum: ['pending', 'confirmed', 'cancelled'],
		default: 'pending',
	},
	totalAmount: { type: Number, required: true },
});

module.exports = mongoose.model('Booking', BookingSchema);
