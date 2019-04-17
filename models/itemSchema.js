const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
	{
		name: String,
		amount: Number
	}
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;