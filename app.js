import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ejs from "ejs";
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
// dbmodels
import Resume from "./resumeModel.js";
import Job from "./jobModel.js";
import JobApplied from "./jobappliedjson.js";
import JobRequest from "./jobrequestjson.js";
// files get
import rootGet from "./register.js";
import loginGet from "./login.js";
import createResumeGet from "./createresume.js";
import postJobGet from "./postjob.js";
import jobListingsGet from "./joblistings.js";
import singleListingsGet from "./singlelistings.js";
import coverLetterGet from "./coverletter.js";
import jobsAppliedGet from "./jobsapplied.js";
import jobsRequestGet from "./jobsrequest.js";
import jobPostedGet from "./jobsposted.js";
import currentUserJobs from "./currentuserjobs.js";
import JobRequestList from "./jobRequestGet.js";
import resumeDetailsGet from "./studentdetailsget.js";
// json get
import currentUserJson from "./currentuser.js";
import jobListJson from "./joblist.js";
import singleJobJson from "./singlejob.js";
import currentResumeJson from "./currentresume.js";
// files post
import registerPost from "./registerpost.js";
import loginPost from "./loginpost.js";
import createResumePost from "./createresumepost.js";
import postJobPost from "./postjobpost.js";
import jobAppliedPost from "./jobappliedpost.js";
import jobRequestPost from "./jobrequestpost.js";
import checkIfApplied from "./checkifapplied.js";
//patch request
import updateEducationPatch from "./updateeducation.js";
import updateJobPatch from "./updatejob.js";
import updateTrainingPatch from "./updatetraining.js";
import updateProjectPatch from "./updateproject.js";
import updateSkillPatch from "./updateskill.js";
import updateLinkPatch from "./updatelink.js";
//delete request
import deleteEducation from "./deleteeducation.js";
import deleteJobintern from "./deletejobintern.js";
import deleteTraining from "./deletetraining.js";
import deleteProject from "./deleteproject.js";
import deleteSkill from "./deleteskill.js";
import deleteLink from "./deletelink.js";
import updateStatusPatch from "./updatestatus.js";
import fetchCategoryGet from "./fetchcategory.js";
import appliedStudentResume from "./appliedstudentresume.js";
import logOut from "./logout.js";
import notFound from "./notfound.js";

//filter

// create express sever
const app = express();

// env url
const connection_url = process.env.CONNECTION_URL;
const port = process.env.PORT || 3000;

//middleswares
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: { _expires: 900000000000000 }
	})
);

app.use(passport.initialize());
app.use(passport.session());

//database connection url

mongoose.connect(connection_url);

const userSchema = new mongoose.Schema({
	account_type: String,
	username: {
		type: String,
		unique: true
	},
	password: String
});

userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//get request (its all render page)
rootGet(app); // root get route
loginGet(app); // login get route
createResumeGet(app); // createresume get route
postJobGet(app); // postjob get router
jobListingsGet(app, Job); // joblistings get route
singleListingsGet(app, Job); // singlelistings get route
coverLetterGet(app, Job); // coverletter get route
jobsAppliedGet(app, JobApplied); // jobsapplied get route
jobsRequestGet(app, JobRequest); // jobsrequest get route
jobPostedGet(app, Job); // jobsposted get route
currentUserJobs(app, Job); // current user jobs
JobRequestList(app, JobRequest); // job request list
resumeDetailsGet(app, Resume); // resume details get
appliedStudentResume(app, Job, Resume, JobRequest); // applied student resume

//get request (json)
currentUserJson(app);
jobListJson(app, Job);
singleJobJson(app, Job);
currentResumeJson(app, Resume);

//post request
registerPost(app, User, passport); // root post route
loginPost(app, User, passport); // login post route
createResumePost(app, Resume); // createresume post route
postJobPost(app, Job); // postjob
jobAppliedPost(app, JobApplied);
jobRequestPost(app, JobRequest);
checkIfApplied(app, JobApplied);

//patch request
updateEducationPatch(app, Resume);
updateJobPatch(app, Resume);
updateTrainingPatch(app, Resume);
updateProjectPatch(app, Resume);
updateSkillPatch(app, Resume);
updateLinkPatch(app, Resume);
updateStatusPatch(app, JobApplied, JobRequest);

//delete request
deleteEducation(app, Resume);
deleteJobintern(app, Resume);
deleteTraining(app, Resume);
deleteProject(app, Resume);
deleteSkill(app, Resume);
deleteLink(app, Resume);

// logout
logOut(app);
notFound(app);

// post listening
app.listen(port, () => console.log(`Server started on port ${port}`));
