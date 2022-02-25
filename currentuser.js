const currentUserJson = function (app) {
	app.get("/currentuser", (req, res) => {
		res.send({ user: req.user });
	});
};

export default currentUserJson;
