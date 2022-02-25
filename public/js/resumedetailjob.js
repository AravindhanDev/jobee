const jobprofile = document.getElementById("jobprofile");
const joborg = document.getElementById("joborg");
const jobremote = document.getElementById("jobremote");
const joblocation = document.getElementById("joblocation");
const jobstartdate = document.getElementById("jobstartdate");
const jobenddate = document.getElementById("jobenddate");
const jobcurrent = document.getElementById("jobcurrent");
const jobdesc = document.getElementById("jobdesc");
const jobAddBtn = document.getElementById("jobAddBtn");
const jobFormText = document.querySelectorAll(".form-text");
const jobupdate = document.querySelectorAll(".jobupdate");
const jobdelete = document.querySelectorAll(".jobdelete");
const jobInternBox = document.getElementById(".jobintern-box");
let isjobupdate = false;
let prevJobTitle = "";
let jprofile = "";
let jorg = "";

$("body").on("click", "#jobBtn", function (e) {
	jobprofile.value = "";
	joborg.value = "";
	jobremote.checked = false;
	joblocation.value = "";
	jobstartdate.value = "";
	jobenddate.value = "";
	jobcurrent.checked = false;
	jobdesc.value = "";

	jobprofile.parentElement.classList.remove("d-none");
	joborg.parentElement.classList.remove("d-none");
	jobremote.parentElement.classList.remove("d-none");
	joblocation.parentElement.classList.remove("d-none");
	jobstartdate.parentElement.classList.remove("d-none");
	jobenddate.parentElement.classList.remove("d-none");
	jobcurrent.parentElement.classList.remove("d-none");
	jobdesc.parentElement.classList.remove("d-none");

	isjobupdate = false;
});

$("body").on("click", ".jobupdate", function (e) {
	let childArr = e.currentTarget.parentElement.childNodes;
	prevJobTitle = childArr[7].innerText;
	let org = childArr[9].innerText;
	let remote = childArr[11].innerText;
	let loc = childArr[13].innerText;
	let startdate = childArr[15].innerText;
	let enddate = childArr[17].innerText;
	let current = childArr[19].innerText;
	let desc = childArr[21].innerText;

	jobprofile.value = prevJobTitle;
	joborg.value = org;
	jobremote.checked = remote === "true" ? true : false;
	joblocation.value = loc;
	jobstartdate.value = startdate;
	jobenddate.value = enddate;
	jobcurrent.checked = current === "true" ? true : false;
	jobdesc.value = desc;

	if (jobremote.checked) {
		joblocation.parentElement.classList.add("d-none");
	}

	if (jobcurrent.checked) {
		jobenddate.parentElement.classList.add("d-none");
	}

	isjobupdate = true;
});

$("body").on("click", ".jobdelete", function (e) {
	let childArr = e.currentTarget.parentElement.childNodes;
	jprofile = childArr[7].innerText;
	jorg = childArr[9].innerText;
});

$("body").on("click", ".jobdelete2", function (e) {
	async function deleteJob() {
		let options = {
			method: "DELETE"
		};
		const response = await fetch(
			`/deletejobintern/${jprofile}/${jorg}`,
			options
		);
		const res = await response.json();
		console.log(res);
		if (res.data == "job deleted") {
			$("#jobintern-box").load(window.location.href + " #jobintern-box");
			document.querySelector(".alert-msg").classList.remove("d-none");
			document.querySelector(".message").innerText = "Successfully deleted";
			setTimeout(() => {
				document.querySelector(".alert-msg").classList.add("d-none");
			}, 2500);
		}
	}
	deleteJob();
});

function addText() {
	if (jobprofile.value == "") {
		jobprofile.nextElementSibling.classList.remove("d-none");
		jobprofile.style.border = "1px solid #f90716";
	}
	if (joborg.value == "") {
		joborg.nextElementSibling.classList.remove("d-none");
		joborg.style.border = "1px solid #f90716";
	}
	if (joblocation.value == "") {
		joblocation.nextElementSibling.classList.remove("d-none");
		joblocation.style.border = "1px solid #f90716";
	}
	if (jobstartdate.value == "") {
		jobstartdate.nextElementSibling.classList.remove("d-none");
		jobstartdate.style.border = "1px solid #f90716";
	}
	if (jobenddate.value == "") {
		jobenddate.nextElementSibling.classList.remove("d-none");
		jobenddate.style.border = "1px solid #f90716";
	}
}

function removeText() {
	jobprofile.nextElementSibling.classList.add("d-none");
	joborg.nextElementSibling.classList.add("d-none");
	joblocation.nextElementSibling.classList.add("d-none");
	jobstartdate.nextElementSibling.classList.add("d-none");
	jobenddate.nextElementSibling.classList.add("d-none");
	jobprofile.style.border = "1px solid #ddd";
	joborg.style.border = "1px solid #ddd";
	joblocation.style.border = "1px solid #ddd";
	jobstartdate.style.border = "1px solid #ddd";
	jobenddate.style.border = "1px solid #ddd";
}

jobremote.addEventListener("click", function () {
	if (jobremote.checked) {
		joblocation.parentElement.classList.add("d-none");
		joblocation.value = "";
	} else {
		joblocation.parentElement.classList.remove("d-none");
	}
});

jobcurrent.addEventListener("click", function () {
	if (jobcurrent.checked) {
		jobenddate.parentElement.classList.add("d-none");
		jobenddate.value = "";
	} else {
		jobenddate.parentElement.classList.remove("d-none");
	}
});

jobprofile.addEventListener("keyup", removeText);
joborg.addEventListener("keyup", removeText);
joblocation.addEventListener("keyup", removeText);
jobstartdate.addEventListener("keyup", removeText);
jobenddate.addEventListener("keyup", removeText);

jobprofile.addEventListener("focusout", addText);
joborg.addEventListener("focusout", addText);
joblocation.addEventListener("focusout", addText);
jobstartdate.addEventListener("focusout", addText);
jobenddate.addEventListener("focusout", addText);

jobAddBtn.addEventListener("click", function (e) {
	let isReady = true;
	let profile = jobprofile.value;
	let org = joborg.value;
	let remote = jobremote.checked;
	let loc = joblocation.value;
	let startdate = jobstartdate.value;
	let enddate = jobenddate.value;
	let current = jobcurrent.checked;
	let desc = jobdesc.value;

	if (profile == "") {
		jobprofile.nextElementSibling.classList.remove("d-none");
		jobprofile.style.border = "1px solid #f90716";
		isReady = false;
	}
	if (org == "") {
		joborg.nextElementSibling.classList.remove("d-none");
		joborg.style.border = "1px solid #f90716";
		isReady = false;
	}
	if (!remote) {
		if (loc == "") {
			joblocation.nextElementSibling.classList.remove("d-none");
			joblocation.style.border = "1px solid #f90716";
			isReady = false;
		}
	}
	if (startdate == "") {
		jobstartdate.nextElementSibling.classList.remove("d-none");
		jobstartdate.style.border = "1px solid #f90716";
		isReady = false;
	}
	if (!current) {
		if (enddate == "") {
			jobenddate.nextElementSibling.classList.remove("d-none");
			jobenddate.style.border = "1px solid #f90716";
			isReady = false;
		}
	}
	if (isReady) {
		async function fetchApi() {
			let options = {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					prevTitle: prevJobTitle,
					profile: profile,
					org: org,
					remote: remote,
					location: loc,
					startdate: startdate,
					enddate: enddate,
					current: current,
					desc: desc,
					isupdate: isjobupdate
				})
			};
			const response = await fetch("/updatejob", options);
			const res = await response.json();
			console.log(res);
			if (res.data == "patch updated") {
				$("#jobintern-box").load(window.location.href + " #jobintern-box");
				document.querySelector(".alert-msg").classList.remove("d-none");
				document.querySelector(".message").innerText = "Successfully updated";
				setTimeout(() => {
					document.querySelector(".alert-msg").classList.add("d-none");
				}, 2500);
			}
			if (res.data == "put updated") {
				$("#jobintern-box").load(window.location.href + " #jobintern-box");
				document.querySelector(".alert-msg").classList.remove("d-none");
				document.querySelector(".message").innerText = "Successfully updated";
				setTimeout(() => {
					document.querySelector(".alert-msg").classList.add("d-none");
				}, 2500);
			}
			if (res.data == "added") {
				$("#jobintern-box").load(window.location.href + " #jobintern-box");
				document.querySelector(".alert-msg").classList.remove("d-none");
				document.querySelector(".message").innerText = "Successfully added";
				setTimeout(() => {
					document.querySelector(".alert-msg").classList.add("d-none");
				}, 2500);
			}
		}
		fetchApi();
	}
});
