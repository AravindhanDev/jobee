const singleJobJson = function (app, Job) {
	app.get("/singlejob/:id", (req, res) => {
		if (req.isAuthenticated()) {
			let id = req.params.id;
			Job.findOne({ _id: id }, (err, data) => {
				if (!err) {
					res.send({ data: data });
				}
			});
		} else {
			res.redirect("/login");
		}
	});
};

export default singleJobJson;
