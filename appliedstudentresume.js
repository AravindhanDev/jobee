const appliedStudentResume = (app, Job, Resume, JobRequest) => {
	app.get("/appliedstudentresume", async (req, res) => {
		if (req.isAuthenticated()) {
			let jobId = req.query.jobId;
			let resumeId = req.query.resumeId;
			try {
				let jsonJob = await Job.where("_id").equals(jobId);
				let jsonResume = await Resume.where("_id").equals(resumeId);
				let jsonText = await JobRequest.where("jobId")
					.equals(jobId)
					.where("resumeId")
					.equals(resumeId);
				console.log(jsonJob[0]);
				console.log(jsonResume[0]);
				console.log(jsonText[0]);
				res.render("appliedstudentresume", {
					data: jsonResume[0],
					jobcity: jsonJob[0].jobcity,
					duration: jsonJob[0].choose_duration,
					duration_period: jsonJob[0].choose_duration_period,
					typework: jsonJob[0].typework,
					profile: jsonJob[0].profile,
					orgname: jsonJob[0].orgname,
					orgwebsite: jsonJob[0].orgwebsite,
					orgsocial: jsonJob[0].orgsocial,
					appliedOn: jsonText[0].appliedOn,
					jobId: jsonText[0].jobId,
					coverletter: jsonText[0].coverletter,
					acctype: req.user.account_type,
					availability: jsonText[0].availability
				});
			} catch (e) {
				console.error(e);
			}
		} else {
			res.redirect("/login");
		}
	});
};

export default appliedStudentResume;
