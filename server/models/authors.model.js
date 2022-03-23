const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "This is a required field."],
		minLength: [3, "The author's name should be more than 3 characters."]
	}
}, {timestamps: true});

module.exports.Author = mongoose.model("Project", AuthorSchema);
