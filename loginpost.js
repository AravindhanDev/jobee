const loginPost = (app, User, passport) => {
	app.post("/login", (req, res) => {
		const user = new User({
			username: req.body.username,
			password: req.body.password
		});

		req.login(user, (err) => {
			if (err) {
				res.send({ data: "notexist" });
			} else {
				passport.authenticate("local")(req, res, () => {
					res.send({ data: "auth" });
				});
			}
		});
	});
};

export default loginPost;
