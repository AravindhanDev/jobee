const currentResumeJson = function (app, Resume) {
	app.get("/currentresume", (req, res) => {
		Resume.findOne({ currentuser: req.user._id }, (err, data) => {
			if (!err) res.send({ data: data });
		});
	});
};

export default currentResumeJson;
