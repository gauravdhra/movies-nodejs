var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const moviesSchema = new Schema({
	name: { type: String },
	publisher: { type: String },
	date: { type: String },
	noofplayers: { type: Number },
	platform: { type: String },
	genre: { type: String },
	artbox: { type: String },
});

// Export the model
module.exports = mongoose.model('games', moviesSchema);

