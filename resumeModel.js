import mongoose from "mongoose";

const resumseSchema = new mongoose.Schema({
	name: String,
	city: String,
	locality: String,
	email: String,
	mobile: String,
	otherlink: String,
	education: Array,
	jobintern: Array,
	training: Array,
	project: Array,
	skills: Array,
	portfolio: Array,
	currentuser: String,
	dateTime: String
});

const Resume = new mongoose.model("Resume", resumseSchema);

export default Resume;
