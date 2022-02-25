const coverLetterGet = function (app, Job) {
	app.get("/coverletter/:id", (req, res) => {
		if (req.isAuthenticated()) {
			Job.findOne(
				{ _id: req.params.id },
				{
					_id: 1,
					currentuser: 1,
					profile: 1,
					orgname: 1
				},
				(err, data) => {
					if (!err) {
						res.render("coverletter", {
							user: req.user.account_type,
							data: data
						});
					}
				}
			);
		} else {
			res.redirect("/login");
		}
	});
};

export default coverLetterGet;
