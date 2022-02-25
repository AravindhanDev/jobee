const postJobPost = (app, Job) => {
	app.post("/postjob", (req, res) => {
		Job.create(req.body, (err, data) => {
			if (!err) {
				res.send({ data: data, status: "created" });
			} else {
				res.send({ status: "notcreated" });
			}
		});
	});
};

export default postJobPost;
