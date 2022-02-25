const createResumeGet = function (app) {
	app.get("/createresume", (req, res) => {
		console.log(req.user);
		if (req.isAuthenticated()) {
			if (
				req.user.account_type == "Student" ||
				req.user.account_type == "Admin"
			) {
				res.render("createresume", { id: req.user._id });
			} else {
				res.render("unauthorized");
			}
		} else {
			res.redirect("/login");
		}
	});
};

export default createResumeGet;
