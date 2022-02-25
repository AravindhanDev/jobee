const currentUserJobs = (app, Job) => {
	app.get("/currentuserjobs", (req, res) => {
		Job.find({ currentuser: req.user._id }, (err, data) => {
			if (!err) {
				res.render("jobsposted", { data: data });
			}
		});
	});
};

export default currentUserJobs;
