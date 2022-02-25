const jobsRequestGet = function (app, JobRequest) {
	app.get("/jobsrequest/:id", (req, res) => {
		if (req.isAuthenticated()) {
			console.log(req.params.id);
			if (req.user.account_type == "Employer") {
				JobRequest.find({ jobId: req.params.id }, (err, data) => {
					if (!err) {
						res.render("jobsrequest", { data: data });
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

export default jobsRequestGet;
