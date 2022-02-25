const deleteSkill = (app, Resume) => {
	app.delete("/deleteskill/:skill", async (req, res) => {
		const currentuser = req.user._id;

		try {
			const json = await Resume.where("currentuser")
				.equals(currentuser)
				.select("skills");

			const data = json[0].skills.filter((arr) => {
				return arr.skill != req.params.skill;
			});

			json[0].skills = data;

			json[0].save((err) => {
				if (!err) res.send({ data: "skill deleted" });
			});
		} catch (e) {
			console.log(e);
		}
	});
};

export default deleteSkill;
