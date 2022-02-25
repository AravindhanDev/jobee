const createResumePost = (app, Resume) => {
	app.post("/createresume", (req, res) => {
		Resume.create(req.body, (err, data) => {
			if (!err) {
				res.send({ data: data, status: "created" });
			} else {
				res.send({ status: "notcreated" });
			}
		});
	});
};

export default createResumePost;
