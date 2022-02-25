const checkIfApplied = (app, JobApplied) => {
	app.post("/checkifapplied", (req, res) => {
		console.log(req.body);
		JobApplied.findOne(
			{
				employeeId: req.body.employeeId,
				jobId: req.body.jobId
			},
			(err, data) => {
				if (err) {
					res.send({ exist: false });
					return;
				}
				if (data == null) {
					res.send({ exist: false });
					return;
				}
				res.send({ data: data, exist: true });
			}
		);
	});
};

export default checkIfApplied;
