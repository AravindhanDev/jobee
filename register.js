const rootGet = function (app) {
	app.get("/", (req, res) => {
		res.render("register");
	});
};

export default rootGet;
