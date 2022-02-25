const jobsAppliedGet = function (app, JobApplied) {
	app.get("/jobsapplied", async (req, res) => {
		if (req.isAuthenticated()) {
			if (req.user.account_type == "Student") {
				let currentuser = req.user._id;
				try {
					let json = await JobApplied.where("employeeId").equals(currentuser);
					console.log(json);
					res.render("jobsapplied", { data: json });
				} catch (e) {
					console.error(e);
				}
			} else {
				res.render("unauthorized");
			}
		} else {
			res.redirect("/login");
		}
	});
};

export default jobsAppliedGet;
