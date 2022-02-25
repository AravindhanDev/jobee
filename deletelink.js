const deleteLink = (app, Resume) => {
	app.delete("/deletelink", async (req, res) => {
		let currentuser = await req.user._id;
		console.log(req.query.url);

		try {
			const json = await Resume.where("currentuser")
				.equals(currentuser)
				.select("portfolio");

			let type = req.query.type;

			const data = json[0].portfolio[0];
			data[type] = "";

			json[0].portfolio[0] = data;

			json[0].save((err) => {
				if (!err) res.send({ data: "link deleted" });
			});
		} catch (e) {
			console.error(e);
		}
	});
};

export default deleteLink;
