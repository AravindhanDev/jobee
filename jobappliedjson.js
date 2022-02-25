import mongoose from "mongoose";

const jobAppliedJson = new mongoose.Schema({
	company: String,
	profile: String,
	openings: String,
	coverletter: String,
	availability: String,
	employeeId: String,
	employerId: String,
	jobId: String,
	resumeId: String,
	status: String,
	appliedOn: String
});

const JobApplied = new mongoose.model("JobApplied", jobAppliedJson);

export default JobApplied;
