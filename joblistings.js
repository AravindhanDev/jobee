const jobListingsGet = function (app, Job) {
	let category = "";
	let locality = "";
	let internships = "";
	let remotejobs = "";
	let search = "";
	let clearall = "";
	let data = [];
	app.get("/joblistings", async (req, res) => {
		if (req.isAuthenticated()) {
			data = await Job.find();
			if (category != "") {
				data = data.filter((arr) => {
					let profile = arr.profile;
					profile = profile.toLowerCase();
					return profile.includes(category.toLowerCase());
				});
			}
			if (locality != "") {
				data = data.filter((arr) => {
					let loc = arr.jobcity;
					loc = loc.toLowerCase();
					return loc.includes(locality.toLowerCase());
				});
			}
			if (remotejobs != "") {
				data = data.filter((arr) => {
					return arr.type == remotejobs;
				});
				console.log(data);
			}
			if (internships != "") {
				data = data.filter((arr) => {
					return arr.typework == internships;
				});
			}
			if (search != "") {
				console.log(search);
				data = data.filter((arr) => {
					let profile = arr.profile.toLowerCase();
					let loc = arr.jobcity.toLowerCase();
					let company = arr.orgname.toLowerCase();
					return (
						profile.includes(search.toLowerCase()) ||
						loc.includes(search.toLowerCase()) ||
						company.includes(search.toLowerCase())
					);
				});
			}
			if (
				category != "" ||
				locality != "" ||
				remotejobs != "" ||
				internships != "" ||
				search != ""
			) {
				data = data.filter((arr) => {
					let loc = arr.jobcity.toLowerCase();
					let profile = arr.profile.toLowerCase();
					let company = arr.orgname.toLowerCase();
					return (
						loc.includes(locality.toLowerCase()) ||
						profile.includes(category.toLowerCase()) ||
						company.includes(search.toLowerCase()) ||
						profile.includes(search.toLowerCase()) ||
						loc.includes(search.toLowerCase()) ||
						arr.type == remotejobs ||
						arr.typework == internships
					);
				});
			}
			if (clearall == "clear") {
				data = await Job.find();
			}
			res.render("joblistings", { data: data, acctype: req.user.account_type });
		} else {
			res.redirect("/login");
		}
	});

	app.post("/fetchcategory", (req, res) => {
		clearall = "";
		category = req.body.category;
		if (req.body.category == "") {
			res.send({ msg: "no" });
		} else {
			res.send({ msg: "exist" });
		}
	});

	app.post("/fetchlocality", (req, res) => {
		clearall = "";
		locality = req.body.locality;
		if (req.body.locality == "") {
			res.send({ msg: "no" });
		} else {
			res.send({ msg: "exist" });
		}
	});

	app.post("/remotejobs", (req, res) => {
		clearall = "";
		remotejobs = req.body.type;
		res.send({ msg: "exist" });
	});

	app.post("/internships", (req, res) => {
		clearall = "";
		internships = req.body.type;
		res.send({ msg: "exist" });
	});

	app.post("/search", (req, res) => {
		clearall = "";
		search = req.body.search;
		if (req.body.search == "") {
			res.send({ msg: "no" });
		} else {
			res.send({ msg: "exist" });
		}
	});

	app.post("/clearall", (req, res) => {
		clearall = req.body.status;
		if (req.body.status == "") {
			res.send({ msg: "no" });
		} else {
			res.send({ msg: "exist" });
		}
	});
};

export default jobListingsGet;
