const updateJobPatch = function (app, Resume) {
	app.patch("/updatejob", async (req, res) => {
		let currentuser = await req.user._id;

		try {
			let json = await Resume.where("currentuser")
				.equals(currentuser)
				.select("jobintern");
			if (req.body.isupdate) {
				console.log(req.body.prevTitle, req.body.profile);
				console.log(req.body.profile, req.body.prevTitle);
				if (req.body.prevTitle != req.body.profile) {
					let data = json[0].jobintern.filter((arr) => {
						return arr.profile != req.body.prevTitle;
					});

					let new_data = json[0].jobintern.filter((arr) => {
						return arr.profile == req.body.prevTitle;
					});

					console.log(new_data);

					new_data[0].profile = req.body.profile;
					new_data[0].org = req.body.org;
					new_data[0].remote = req.body.remote;
					new_data[0].location = req.body.location;
					new_data[0].startdate = req.body.startdate;
					new_data[0].enddate = req.body.endate;
					new_data[0].current = req.body.current;
					new_data[0].desc = req.body.desc;

					json[0].jobintern = data;
					json[0].jobintern.push(new_data[0]);

					json[0].save((err) => {
						if (!err) res.send({ data: "patch updated" });
					});
				} else {
					let data = json[0].jobintern.filter((arr) => {
						return arr.profile != req.body.profile;
					});

					json[0].jobintern = data;

					json[0].jobintern.push(req.body);

					json[0].save((err) => {
						if (!err) res.send({ data: "put updated" });
					});
				}
			} else {
				json[0].jobintern.push(req.body);

				json[0].save((err) => {
					if (!err) res.send({ data: "added" });
				});
			}
		} catch (e) {
			console.log(e);
		}
	});
};

export default updateJobPatch;
