const notFound = (app) => {
	app.get("*", function (req, res) {
		res.render("404page");
	});
};

export default notFound;
