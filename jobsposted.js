const jobPostedGet = (app, Job) => {
	app.get("/jobsposted", (req, res) => {
		if (req.isAuthenticated()) {
			if (req.user.account_type == "Employer") {
				Job.find({ currentuser: req.user._id }, (err, data) => {
					if (!err) {
						res.render("jobsposted", { data: data });
					}
				});
			} else {
				res.render("unauthorized");
			}
		} else {
			res.redirect("/login");
		}
	});
};

export default jobPostedGet;
