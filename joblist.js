const jobListJson = function (app, Job) {
	app.get("/joblist", (req, res) => {
		Job.find(
			{},
			{
				_id: 1,
				profile: 1,
				orgname: 1,
				orgcity: 1,
				salary: 1,
				applyby: 1,
				type: 1,
				typework: 1,
				isverified: 1,
				persalary: 1
			},
			(err, data) => {
				if (!err) {
					res.send({ data: data });
				} else {
					res.statusCode(404);
				}
			}
		);
	});
};

export default jobListJson;
