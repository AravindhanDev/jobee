const trprofile = document.getElementById("trprofile");
const trorg = document.getElementById("trorg");
const trremote = document.getElementById("trremote");
const trlocation = document.getElementById("trlocation");
const trstartdate = document.getElementById("trstartdate");
const trenddate = document.getElementById("trenddate");
const trcurrent = document.getElementById("trcurrent");
const trdesc = document.getElementById("trdesc");
const trAddBtn = document.getElementById("trainingAddBtn");
const trFormText = document.querySelectorAll(".form-text");
const trainingUpdate = document.querySelectorAll(".trainingupdate");
const trainingDelete = document.querySelectorAll(".trainingdelete");
let prevTrainingTitle = "";
let istrainingupdate = false;
let trainingProfile = "";
let trainingOrg = "";

$("body").on("click", "#trainingBtn", function (e) {
	trprofile.value = "";
	trorg.value = "";
	trremote.checked = false;
	trstartdate.value = "";
	trenddate.value = "";
	trlocation.value = "";
	trcurrent.checked = false;
	trdesc.value = "";

	trprofile.parentElement.classList.remove("d-none");
	trorg.parentElement.classList.remove("d-none");
	trremote.parentElement.classList.remove("d-none");
	trlocation.parentElement.classList.remove("d-none");
	trstartdate.parentElement.classList.remove("d-none");
	trenddate.parentElement.classList.remove("d-none");
	trcurrent.parentElement.classList.remove("d-none");
	trdesc.parentElement.classList.remove("d-none");

	istrainingupdate = false;
});

$("body").on("click", ".trainingupdate", function (e) {
	let childArr = e.currentTarget.parentElement.childNodes;
	prevTrainingTitle = childArr[7].innerText;
	let org = childArr[9].innerText;
	let remote = childArr[11].innerText;
	let loc = childArr[13].innerText;
	let startdate = childArr[15].innerText;
	let enddate = childArr[17].innerText;
	let current = childArr[19].innerText;
	let desc = childArr[21].innerText;

	trprofile.value = prevTrainingTitle;
	trorg.value = org;
	trremote.checked = remote === "true" ? true : false;
	trlocation.value = loc;
	trstartdate.value = startdate;
	trenddate.value = enddate;
	trcurrent.checked = current === "true" ? true : false;
	trdesc.value = desc;

	if (trremote.checked) {
		trlocation.parentElement.classList.add("d-none");
	}

	if (trcurrent.checked) {
		trenddate.parentElement.classList.add("d-none");
	} else {
		trenddate.parentElement.classList.remove("d-none");
	}

	istrainingupdate = true;
});

$("body").on("click", ".trainingdelete", function (e) {
	let childArr = e.currentTarget.parentElement.childNodes;
	trainingProfile = childArr[7].innerText;
	trainingOrg = childArr[9].innerText;
});

$("body").on("click", ".trainingdelete2", function (e) {
	async function deleteTraining() {
		let options = {
			method: "DELETE"
		};
		const response = await fetch(
			`/deletetraining/${trainingProfile}/${trainingOrg}`,
			options
		);
		const res = await response.json();
		console.log(res);
		if (res.data == "training deleted") {
			$("#training-box").load(window.location.href + " #training-box");
			document.querySelector(".alert-msg").classList.remove("d-none");
			document.querySelector(".message").innerText = "Successfully deleted";
			setTimeout(() => {
				document.querySelector(".alert-msg").classList.add("d-none");
			}, 2500);
		}
	}
	deleteTraining();
});

function addText() {
	if (trprofile.value == "") {
		trprofile.nextElementSibling.classList.remove("d-none");
		trprofile.style.border = "1px solid #f90716";
	}
	if (trorg.value == "") {
		trorg.nextElementSibling.classList.remove("d-none");
		trorg.style.border = "1px solid #f90716";
	}
	if (trlocation.value == "") {
		trlocation.nextElementSibling.classList.remove("d-none");
		trlocation.style.border = "1px solid #f90716";
	}
	if (trstartdate.value == "") {
		trstartdate.nextElementSibling.classList.remove("d-none");
		trstartdate.style.border = "1px solid #f90716";
	}
	if (trenddate.value == "") {
		trenddate.nextElementSibling.classList.remove("d-none");
		trenddate.style.border = "1px solid #f90716";
	}
}

function removeText() {
	trprofile.nextElementSibling.classList.add("d-none");
	trorg.nextElementSibling.classList.add("d-none");
	trlocation.nextElementSibling.classList.add("d-none");
	trstartdate.nextElementSibling.classList.add("d-none");
	trenddate.nextElementSibling.classList.add("d-none");
	trprofile.style.border = "1px solid #ddd";
	trorg.style.border = "1px solid #ddd";
	trlocation.style.border = "1px solid #ddd";
	trstartdate.style.border = "1px solid #ddd";
	trenddate.style.border = "1px solid #ddd";
}

trremote.addEventListener("click", function () {
	if (trremote.checked) {
		trlocation.parentElement.classList.add("d-none");
		trlocation.value = "";
	} else {
		trlocation.parentElement.classList.remove("d-none");
	}
});

trcurrent.addEventListener("click", function () {
	if (trcurrent.checked) {
		trenddate.parentElement.classList.add("d-none");
		trenddate.value = "";
	} else {
		trenddate.parentElement.classList.remove("d-none");
	}
});

trprofile.addEventListener("keyup", removeText);
trorg.addEventListener("keyup", removeText);
trlocation.addEventListener("keyup", removeText);
trstartdate.addEventListener("keyup", removeText);
trenddate.addEventListener("keyup", removeText);

trprofile.addEventListener("focusout", addText);
trorg.addEventListener("focusout", addText);
trlocation.addEventListener("focusout", addText);
trstartdate.addEventListener("focusout", addText);
trenddate.addEventListener("focusout", addText);

trAddBtn.addEventListener("click", function (e) {
	let isReady = true;
	let profile = trprofile.value;
	let org = trorg.value;
	let remote = trremote.checked;
	let loc = trlocation.value;
	let startdate = trstartdate.value;
	let enddate = trenddate.value;
	let current = trcurrent.checked;
	let desc = trdesc.value;

	if (profile == "") {
		trprofile.nextElementSibling.classList.remove("d-none");
		trprofile.style.border = "1px solid #f90716";
		isReady = false;
	}
	if (org == "") {
		trorg.nextElementSibling.classList.remove("d-none");
		trorg.style.border = "1px solid #f90716";
		isReady = false;
	}
	if (!remote) {
		if (loc == "") {
			trlocation.nextElementSibling.classList.remove("d-none");
			trlocation.style.border = "1px solid #f90716";
			isReady = false;
		}
	}
	if (startdate == "") {
		trstartdate.nextElementSibling.classList.remove("d-none");
		trstartdate.style.border = "1px solid #f90716";
		isReady = false;
	}
	if (!current) {
		if (enddate == "") {
			trenddate.nextElementSibling.classList.remove("d-none");
			trenddate.style.border = "1px solid #f90716";
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
					prevTitle: prevTrainingTitle,
					profile: profile,
					org: org,
					remote: remote,
					loc: loc,
					startdate: startdate,
					enddate: enddate,
					current: current,
					desc: desc,
					isupdate: istrainingupdate
				})
			};
			const response = await fetch("/updatetraining", options);
			const res = await response.json();
			console.log(res);
			if (res.data == "patch updated") {
				$("#training-box").load(window.location.href + " #training-box");
				document.querySelector(".alert-msg").classList.remove("d-none");
				document.querySelector(".message").innerText = "Successfully updated";
				setTimeout(() => {
					document.querySelector(".alert-msg").classList.add("d-none");
				}, 2500);
			}
			if (res.data == "put updated") {
				$("#training-box").load(window.location.href + " #training-box");
				document.querySelector(".alert-msg").classList.remove("d-none");
				document.querySelector(".message").innerText = "Successfully updated";
				setTimeout(() => {
					document.querySelector(".alert-msg").classList.add("d-none");
				}, 2500);
			}
			if (res.data == "added") {
				$("#training-box").load(window.location.href + " #training-box");
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
