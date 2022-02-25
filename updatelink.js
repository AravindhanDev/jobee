const updateLinkPatch = (app, Resume) => {
	app.patch("/updatelink", async (req, res) => {
		let currentuser = await req.user._id;
		try {
			let flag = 0;
			let json = await Resume.where("currentuser")
				.equals(currentuser)
				.select("portfolio");

			let data = json[0].portfolio[0];

			if (req.body.blog != "") {
				data.blog = req.body.blog;
				flag += 1;
			}
			if (req.body.github != "") {
				data.github = req.body.github;
				flag += 1;
			}
			if (req.body.play != "") {
				data.play = req.body.play;
				flag += 1;
			}
			if (req.body.behance != "") {
				data.behance = req.body.behance;
				flag += 1;
			}
			if (req.body.sample != "") {
				data.sample = req.body.sample;
				flag += 1;
			}

			console.log(data);
			json[0].portfolio[0] = data;

			json[0].save((err) => {
				if (!err) res.send({ data: "updated" });
			});
		} catch (e) {
			console.error(e);
		}
	});
};

export default updateLinkPatch;
