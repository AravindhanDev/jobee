const resumeDetailsGet = (app, Resume) => {
	app.get("/resumedetails", (req, res) => {
		if (req.isAuthenticated()) {
			Resume.findOne({ currentuser: req.user._id }, (err, data) => {
				if (!err) {
					if (req.user.account_type == "Student") {
						res.render("resumedetails", {
							data: data
						});
					} else {
						res.render("unauthorized");
					}
				}
			});
		} else {
			res.redirect("/login");
		}
	});
};

export default resumeDetailsGet;
