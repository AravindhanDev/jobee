const deleteProject = (app, Resume) => {
	app.delete("/deleteproject/:title", async (req, res) => {
		let currentuser = await req.user._id;

		try {
			const json = await Resume.where("currentuser")
				.equals(currentuser)
				.select("project");

			const data = json[0].project.filter((arr) => {
				return arr.title != req.params.title;
			});

			json[0].project = data;

			json[0].save((err) => {
				if (!err) res.send({ data: "project deleted" });
			});
		} catch (e) {
			console.log(e);
		}
	});
};

export default deleteProject;
