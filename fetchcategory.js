const fetchCategoryGet = (app, Job) => {
	app.get("/fetchcategory/category/:category", async (req, res) => {
		let category = req.params.category;
		let json = await Job.find();
		let categoryArr = json.filter((arr) => {
			let profile = arr.profile;
			profile = profile.toLowerCase();
			return profile.includes(category.toLowerCase());
		});
		console.log(categoryArr);
		res.render("joblistings", { data: categoryArr });
	});
};

export default fetchCategoryGet;
