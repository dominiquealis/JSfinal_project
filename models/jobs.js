const mongoose = require('mongoose');
const commentsSchema = require('./comments');

const Schema = mongoose.Schema;



//this was previous called Jobs, changed to jobsSchema
const jobsSchema = new Schema({
    title: String,
   	business: String,
	website_source: String,
	dateapplied: { type: Date, default: Date.now },
	location: String,
	archive: Boolean,
	comments: [commentsSchema]		

});


module.exports = mongoose.model("Jobs", jobsSchema); 

//below old code
// module.exports = Jobs;






