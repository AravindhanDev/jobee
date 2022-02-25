import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	email: String,
	mobile: String,
	orgname: String,
	orgcity: String,
	orglocality: String,
	orgdescription: String,
	orgwebsite: String,
	orgsocial: String,
	isverified: String,
	profile: String,
	profileinput: String,
	type: String,
	typework: String,
	jobcity: String,
	opening: String,
	choose_duration: String,
	choose_duration_period: String,
	applyby: String,
	responsibilities: String,
	whocanapply: String,
	salary: String,
	persalary: String,
	isflexible: String,
	isdresscode: String,
	isfivedays: String,
	isbonus: String,
	ispaidleave: String,
	isinsurance: String,
	isdiscount: String,
	isretirement: String,
	istraining: String,
	isprograms: String,
	skillsArr: Array,
	currentuser: String,
	dateTime: String
});

const Job = new mongoose.model("Job", jobSchema);

export default Job;
