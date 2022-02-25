const singleListingsGet = function (app, Job) {
	app.get("/singlelistings/:id", (req, res) => {
		if (req.isAuthenticated()) {
			let currenttype = req.user.account_type;
			let id = req.params.id;
			Job.findOne({ _id: id }, (err, data) => {
				if (!err) {
					res.render("singlelistings", {
						id: data._id,
						data: data,
						skills: data.skillsArr,
						user: req.user.account_type,
						currentEmployer: data.currentuser,
						currentStudent: req.user._id,
						acctype: currenttype
					});
				}
			});
		} else {
			res.redirect("/login");
		}
	});
};

export default singleListingsGet;
