const mongoose = require('mongoose');

const ThemeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	properties: { type: Object, required: true }, // Assuming properties as an object for CSS properties
});

module.exports = mongoose.model('Theme', ThemeSchema);
