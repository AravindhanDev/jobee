const containerFluid = document.querySelector(".container-fluid");
const dataFluid = document.querySelector(".data-fluid");
const singleListings = document.querySelector(".single-listings");
const singleContainer = document.querySelector(".single-container");
const rowHead = document.querySelector(".row-head");
let checkapply = document.getElementById("checkapply");

window.addEventListener("load", async function () {
	let user = singleListings.getAttribute("id");
	let jobId = dataFluid.getAttribute("id");
	let employeeId = singleContainer.getAttribute("id");

	if (user == "Student") {
		async function checkApplied() {
			let options = {
				method: "post",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					employeeId: employeeId,
					jobId: jobId
				})
			};
			const response = await fetch("/checkifapplied", options);
			const res = await response.json();
			console.log(res);
			if (res.exist) {
				checkapply.disabled = true;
				checkapply.innerHTML = `<i class="bi bi-exclamation-lg"></i> You've Already Applied`;
				checkapply.style.backgroundColor = "#F14A16";
			} else {
				checkapply.disabled = false;
				checkapply.innerHTML = `Apply now`;
				checkapply.style.backgroundColor = "#6E3CBC";
			}
		}
		checkApplied();
	}
});
