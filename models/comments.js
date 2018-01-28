const mongoose =require("mongoose");  
const Schema = mongoose.Schema;

const commentsSchema = new Schema({  
    notes: String,
    update: { type: Date, default: Date.now }
});

module.exports = commentsSchema