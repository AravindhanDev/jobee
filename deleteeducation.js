const deleteEducation = (app, Resume) => {
	app.delete("/deleteeducation/:degree", async (req, res) => {
		let currentuser = await req.user._id;

		try {
			const json = await Resume.where("currentuser")
				.equals(currentuser)
				.select("education");

			const data = json[0].education.filter((arr) => {
				return arr.degree != req.params.degree;
			});

			json[0].education = data;

			json[0].save((err) => {
				if (!err) res.send({ data: "education deleted" });
			});
		} catch (e) {
			console.log(e);
		}
	});
};

export default deleteEducation;
