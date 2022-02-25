const update = document.getElementById("update");

update.addEventListener("change", function (e) {
	let status = e.target.value;
	let resume = e.target.nextElementSibling.innerText;
	let job = e.target.nextElementSibling.nextElementSibling.innerText;

	console.log(status);
	async function fetchApi() {
		let options = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				status: status,
				resume: resume,
				job: job
			})
		};
		const response = await fetch("/updatestatus", options);
		const res = await response.json();
		console.log(res);
		if (res.data == "updated") {
			$("#table").load(window.location.href + " #table");
		}
	}
	fetchApi();
});
