const updateSkillPatch = function (app, Resume) {
	app.patch("/updateskill", async (req, res) => {
		let currentuser = await req.user._id;

		try {
			const json = await Resume.where("currentuser")
				.equals(currentuser)
				.select("skills");
			if (req.body.isupdate) {
				console.log(req.body.prevTitle, req.body.skill);
				if (req.body.prevTitle != req.body.skill) {
					const data = json[0].skills.filter((arr) => {
						return arr.skill != req.body.prevTitle;
					});

					const new_data = json[0].skills.filter((arr) => {
						return arr.skill == req.body.prevTitle;
					});

					new_data[0].skill = req.body.skill;
					new_data[0].skilllevel = req.body.skilllevel;

					json[0].skills = data;
					json[0].skills.push(new_data[0]);

					json[0].save((err) => {
						if (!err) res.send({ data: "patch updated" });
					});
				} else {
					const data = json[0].skills.filter((arr) => {
						return arr.skill != req.body.prevTitle;
					});

					json[0].skills = data;

					json[0].skills.push(req.body);

					json[0].save((err) => {
						if (!err) res.send({ data: "put updated" });
					});
				}
			} else {
				const found = json[0].skills.find((arr) => {
					return arr.skill == req.body.skill;
				});

				if (found == undefined) {
					json[0].skills.push(req.body);

					json[0].save((err) => {
						if (!err) res.send({ data: "added" });
					});
				} else {
					res.send({ data: "skill exist" });
				}
			}
		} catch (e) {
			console.log(e);
		}
	});
};

export default updateSkillPatch;
