import mongoose from "mongoose";

const jobRequestSchema = new mongoose.Schema({
	name: String,
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

const JobRequest = new mongoose.model("JobRequest", jobRequestSchema);

export default JobRequest;

// {
//     "name": "Aravindhan",
// 	"profile": "Web Developer",
// 	"openings": "5",
// 	"coverletter": "Hello",
// 	"availability": "Always",
// 	"employeeId": "29398723592837",
// 	"employerId": "23409832409234098",
// 	"jobId": "903924092349823094",
// 	"resumeId": "09237498324897234",
// 	"appliedOn": "12/05/2022"
// }
