const mongoose = require('mongoose');

const MaintenanceSchema = new mongoose.Schema({
	property: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Property',
		required: true,
	},
	description: { type: String, required: true },
	status: {
		type: String,
		enum: ['pending', 'in-progress', 'completed'],
		default: 'pending',
	},
	requestDate: { type: Date, default: Date.now },
	completeDate: { type: Date },
});

module.exports = mongoose.model('Maintenance', MaintenanceSchema);
