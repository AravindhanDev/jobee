const updateStatusPatch = function (app, JobApplied, JobRequest) {
	app.patch("/updatestatus", async (req, res) => {
		let currentuser = await req.user._id;
		let status = req.body.status;
		let resume = req.body.resume;
		let job = req.body.job;
		try {
			console.log(status);
			let appliedJson = await JobApplied.where("jobId")
				.equals(job)
				.where("resumeId")
				.equals(resume);

			let requestedJson = await JobRequest.where("jobId")
				.equals(job)
				.where("resumeId")
				.equals(resume);

			requestedJson[0].status = status;

			requestedJson[0].save((err) => {
				if (!err) console.log("updated");
			});

			appliedJson[0].status = status;

			appliedJson[0].save((err) => {
				if (!err) res.send({ data: "updated" });
			});
		} catch (e) {
			console.error(e);
		}
	});
};

export default updateStatusPatch;
