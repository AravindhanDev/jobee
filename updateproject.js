const updateProjectPatch = function (app, Resume) {
	app.patch("/updateproject", async (req, res) => {
		let currentuser = await req.user._id;

		try {
			if (req.body.isupdate) {
				const json = await Resume.where("currentuser")
					.equals(currentuser)
					.select("project");

				if (req.body.prevTitle != req.body.title) {
					const data = json[0].project.filter((arr) => {
						return arr.title != req.body.prevTitle;
					});

					const new_data = json[0].project.filter((arr) => {
						return arr.title == req.body.prevTitle;
					});

					new_data[0].title = req.body.title;
					new_data[0].startdate = req.body.startdate;
					new_data[0].enddate = req.body.enddate;
					new_data[0].current = req.body.current;
					new_data[0].desc = req.body.desc;
					new_data[0].link = req.body.link;

					json[0].project = data;
					json[0].project.push(new_data[0]);

					console.log(json[0].project);

					json[0].save((err) => {
						if (!err) res.send({ data: "patch updated" });
					});
				} else {
					const data = json[0].project.filter((arr) => {
						return arr.title != req.body.title;
					});

					json[0].project = data;

					json[0].project.push(req.body);

					json[0].save((err) => {
						if (!err) res.send({ data: "put updated" });
					});
				}
			} else {
				const json = await Resume.where("currentuser")
					.equals(currentuser)
					.select("project");

				json[0].project.push(req.body);

				json[0].save((err) => {
					if (!err) res.send({ data: "added" });
				});
			}
		} catch (e) {
			console.log(e);
		}
	});
};

export default updateProjectPatch;
