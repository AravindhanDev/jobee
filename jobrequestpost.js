const jobRequestPost = (app, JobRequest) => {
	app.post("/jobsrequestpost", (req, res) => {
		console.log(req.body);
		JobRequest.create(req.body, (err, data) => {
			if (!err) {
				res.send({ data: data });
			} else {
				res.send({ data: "not created" });
			}
		});
	});
};

export default jobRequestPost;
