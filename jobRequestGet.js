const JobRequestList = (app, JobRequest) => {
	app.get("/jobrequestlist", (req, res) => {
		JobRequest.find({}, (err, data) => {
			if (!err) {
				if (data.length == 0) {
					res.send({ data: 0 });
				}
			}
		});
	});
};

export default JobRequestList;
