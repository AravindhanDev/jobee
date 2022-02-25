const jobAppliedPost = (app, JobApplied) => {
	app.post("/jobsappliedpost", (req, res) => {
		console.log(req.body);
		JobApplied.create(req.body, (err, data) => {
			if (!err) {
				res.send({ data: data });
			} else {
				res.send({ data: "not created" });
			}
		});
	});
};

export default jobAppliedPost;
