const postJobGet = function (app) {
	app.get("/postjob", (req, res) => {
		if (req.isAuthenticated()) {
			if (
				req.user.account_type == "Employer" ||
				req.user.account_type == "Admin"
			) {
				res.render("postjob");
			} else {
				res.render("unauthorized");
			}
		} else {
			res.redirect("/login");
		}
	});
};

export default postJobGet;
