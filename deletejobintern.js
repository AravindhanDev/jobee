const deleteJobintern = function (app, Resume) {
	app.delete("/deletejobintern/:profile/:org", async (req, res) => {
		console.log(req.params.profile);
		console.log(req.params.org);
		let currentuser = await req.user._id;

		try {
			const json = await Resume.where("currentuser")
				.equals(currentuser)
				.select("jobintern");

			const data = json[0].jobintern.filter((arr) => {
				return arr.profile != req.params.profile || arr.org != req.params.org;
			});

			json[0].jobintern = data;

			json[0].save((err) => {
				if (!err) res.send({ data: "job deleted" });
			});

			console.log(data);
		} catch (e) {
			console.log(e);
		}
	});
};

export default deleteJobintern;
