const loginGet = function (app) {
	app.get("/login", (req, res) => {
		res.render("login");
	});
};

export default loginGet;
