const registerPost = (app, User, passport) => {
	app.post("/", (req, res) => {
		User.register(
			{ username: req.body.username, account_type: req.body.account_type },
			req.body.password,
			(err, user) => {
				if (err) {
					res.send({ data: "exist" });
				} else {
					passport.authenticate("local")(req, res, () => {
						res.send({ data: "new", type: req.body.account_type });
					});
				}
			}
		);
	});
};

export default registerPost;
