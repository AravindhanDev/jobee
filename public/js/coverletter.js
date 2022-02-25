const submit = document.getElementById("submit");
const whyhired = document.getElementById("coverletter");
const available = document.getElementById("availability");
const formText = document.querySelectorAll(".form-text");
const containerFluid = document.querySelector(".container-fluid");
const coverLetter = document.querySelector(".cover-letter");
let studentDetails = {};
let jobDetails = {};
let jobId = "";
let isReady = true;
let isclicked = false;

function removeFormText() {
	formText.forEach((form) => {
		form.classList.add("d-none");
	});
}

window.addEventListener("load", function () {
	jobId = coverLetter.getAttribute("id");
	async function fetchApiToJob() {
		const response = await fetch(`/singlejob/${jobId}`);
		const res = await response.json();
		jobDetails = res.data;
	}
	fetchApiToJob();
	async function fetchApiToResume() {
		const response = await fetch("/currentresume");
		const res = await response.json();
		studentDetails = res.data;
	}
	fetchApiToResume();
});

whyhired.addEventListener("keyup", removeFormText);

available.addEventListener("keyup", removeFormText);

submit.addEventListener("click", function (e) {
	isReady = true;
	// job info
	let company = jobDetails.orgname;
	let profile = jobDetails.profile;
	let no_applicants = jobDetails.opening;
	let jobId = jobDetails._id;
	let employer = jobDetails.currentuser;
	// student info
	let name = studentDetails.name;
	let resumeId = studentDetails._id;
	let student = studentDetails.currentuser;
	// cover info
	let coverletter = whyhired.value;
	let availability = available.value;

	if (coverletter == "") {
		whyhired.nextElementSibling.classList.remove("d-none");
		isReady = false;
	}
	if (availability == "") {
		available.nextElementSibling.classList.remove("d-none");
		isReady = false;
	}
	if (isReady) {
		submit.innerHTML = `<i class="fas fa-spinner spin"></i>`;
		async function callApiToJob() {
			let options = {
				method: "post",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: name,
					profile: profile,
					openings: no_applicants,
					coverletter: coverletter,
					availability: availability,
					employeeId: student,
					employerId: employer,
					jobId: jobId,
					resumeId: resumeId,
					status: "Applied",
					appliedOn: new Date().toLocaleDateString("en-us")
				})
			};
			const response = await fetch("/jobsrequestpost", options);
			const res = await response.json();
			console.log(res.data);
		}
		callApiToJob();

		async function callApiToResume() {
			let options = {
				method: "post",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					company: company,
					profile: profile,
					openings: no_applicants,
					coverletter: coverletter,
					availability: availability,
					employeeId: student,
					employerId: employer,
					jobId: jobId,
					resumeId: resumeId,
					status: "Applied",
					appliedOn: new Date().toLocaleDateString("en-us")
				})
			};
			const response = await fetch("/jobsappliedpost", options);
			const res = await response.json();
			console.log(res.data);
			submit.innerHTML = `Applied &nbsp; <i class="fas fa-check"></i> `;
			submit.style.backgroundColor = "#4AA96C";
			location.href = "/jobsapplied";
		}
		callApiToResume();
	}
});
