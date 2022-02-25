const updateEducationPatch = function (app, Resume) {
	app.patch("/updateeducation", async (req, res) => {
		let currentuser = await req.user._id;

		try {
			const json = await Resume.where("currentuser")
				.equals(currentuser)
				.select("education");

			console.log(req.body.isupdate);

			if (req.body.isupdate) {
				const data = json[0].education.filter((arr) => {
					return arr.degree != req.body.degree;
				});
				json[0].education = data;
				json[0].education.push(req.body);
				json[0].save((err) => {
					if (!err) res.send({ data: "updated" });
				});
			} else {
				let found = json[0].education.find((arr) => {
					return arr.degree == req.body.degree;
				});

				if (found == undefined) {
					json[0].education.push(req.body);
					json[0].save((err) => {
						if (!err) res.send({ data: "new" });
					});
				} else {
					res.send({ data: "exist" });
				}
			}
		} catch (e) {
			console.log(e);
		}
	});
};

export default updateEducationPatch;
