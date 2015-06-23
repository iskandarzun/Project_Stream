var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videoSchema = new Schema({
	name : String,
	uploader : String,
	type : String,
	duration : Number,
	day: String,
	schedule_start: Date,
	schedule_finish: Date,
	status: String,
	cron : String
});

module.exports = mongoose.model('video', videoSchema, 'video');
