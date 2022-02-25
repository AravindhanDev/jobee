const projtitle = document.getElementById("projtitle");
const projstartdate = document.getElementById("projstartdate");
const projenddate = document.getElementById("projenddate");
const projcurrent = document.getElementById("projcurrent");
const projdesc = document.getElementById("projdesc");
const projlink = document.getElementById("projlink");
const projAddBtn = document.getElementById("projectAddBtn");
const projFormText = document.querySelectorAll(".form-text");
const projectUpdate = document.querySelectorAll(".projectupdate");
const projectDelete = document.querySelectorAll(".projectdelete");
let prevProjTitle = "";
let isprojectupdate = false;
let projectTitle = "";

$("body").on("click", "#projectBtn", function (e) {
	projtitle.value = "";
	projstartdate.value = "";
	projenddate.value = "";
	projcurrent.checked = false;
	projdesc.value = "";
	projlink.value = "";

	projtitle.parentElement.classList.remove("d-none");
	projstartdate.parentElement.classList.remove("d-none");
	projenddate.parentElement.classList.remove("d-none");
	projcurrent.parentElement.classList.remove("d-none");
	projdesc.parentElement.classList.remove("d-none");
	projlink.parentElement.classList.remove("d-none");

	isprojectupdate = false;
});

$("body").on("click", ".projectupdate", function (e) {
	let childArr = e.currentTarget.parentElement.childNodes;
	prevProjTitle = childArr[7].innerText;
	let startdate = childArr[9].innerText;
	let enddate = childArr[11].innerText;
	let current = childArr[13].innerText;
	let desc = childArr[15].innerText;
	let link = childArr[17].innerText;

	projtitle.value = prevProjTitle;
	projstartdate.value = startdate;
	projenddate.value = enddate;
	projcurrent.checked = current === "true" ? true : false;
	projdesc.value = desc;
	projlink.value = link;

	if (projcurrent.checked) {
		projenddate.parentElement.classList.add("d-none");
	} else {
		projenddate.parentElement.classList.remove("d-none");
	}

	isprojectupdate = true;
});

$("body").on("click", ".projectdelete", function (e) {
	projectTitle = e.currentTarget.nextElementSibling.innerText;
});

$("body").on("click", ".projectdelete2", function (e) {
	async function deleteProject() {
		let options = {
			method: "DELETE"
		};
		const response = await fetch(`/deleteproject/${projectTitle}`, options);
		const res = await response.json();
		console.log(res);
		if (res.data == "project deleted") {
			$("#projects-box").load(window.location.href + " #projects-box");
			document.querySelector(".alert-msg").classList.remove("d-none");
			document.querySelector(".message").innerText = "Successfully deleted";
			setTimeout(() => {
				document.querySelector(".alert-msg").classList.add("d-none");
			}, 2500);
		}
	}
	deleteProject();
});

function addText() {
	if (projtitle.value == "") {
		projtitle.nextElementSibling.classList.remove("d-none");
		projtitle.style.border = "1px solid #f90716";
	}
	if (projstartdate.value == "") {
		projstartdate.nextElementSibling.classList.remove("d-none");
		projstartdate.style.border = "1px solid #f90716";
	}
	if (projenddate.value == "") {
		projenddate.nextElementSibling.classList.remove("d-none");
		projenddate.style.border = "1px solid #f90716";
	}
}

function removeText() {
	projtitle.nextElementSibling.classList.add("d-none");
	projstartdate.nextElementSibling.classList.add("d-none");
	projenddate.nextElementSibling.classList.add("d-none");
	projtitle.style.border = "1px solid #ddd";
	projstartdate.style.border = "1px solid #ddd";
	projenddate.style.border = "1px solid #ddd";
}

projcurrent.addEventListener("click", function () {
	if (projcurrent.checked) {
		projenddate.parentElement.classList.add("d-none");
		projenddate.value = "";
	} else {
		projenddate.parentElement.classList.remove("d-none");
	}
});

projtitle.addEventListener("keyup", removeText);
projstartdate.addEventListener("keyup", removeText);
projenddate.addEventListener("keyup", removeText);

projtitle.addEventListener("focusout", addText);
projstartdate.addEventListener("focusout", addText);
projenddate.addEventListener("focusout", addText);

projAddBtn.addEventListener("click", function (e) {
	let isReady = true;
	let title = projtitle.value;
	let startdate = projstartdate.value;
	let enddate = projenddate.value;
	let current = projcurrent.checked;
	let desc = projdesc.value;
	let link = projlink.value;

	if (title == "") {
		projtitle.nextElementSibling.classList.remove("d-none");
		projtitle.style.border = "1px solid #f90716";
		isReady = false;
	}
	if (startdate == "") {
		projstartdate.nextElementSibling.classList.remove("d-none");
		projstartdate.style.border = "1px solid #f90716";
		isReady = false;
	}
	if (!current) {
		if (enddate == "") {
			projenddate.nextElementSibling.classList.remove("d-none");
			projenddate.style.border = "1px solid #f90716";
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
					prevTitle: prevProjTitle,
					title: title,
					startdate: startdate,
					enddate: enddate,
					current: current,
					desc: desc,
					link: link,
					isupdate: isprojectupdate
				})
			};
			const response = await fetch("/updateproject", options);
			const res = await response.json();
			console.log(res);
			if (res.data == "patch updated") {
				$("#projects-box").load(window.location.href + " #projects-box");
				document.querySelector(".alert-msg").classList.remove("d-none");
				document.querySelector(".message").innerText = "Successfully updated";
				setTimeout(() => {
					document.querySelector(".alert-msg").classList.add("d-none");
				}, 2500);
			}
			if (res.data == "put updated") {
				$("#projects-box").load(window.location.href + " #projects-box");
				document.querySelector(".alert-msg").classList.remove("d-none");
				document.querySelector(".message").innerText = "Successfully updated";
				setTimeout(() => {
					document.querySelector(".alert-msg").classList.add("d-none");
				}, 2500);
			}
			if (res.data == "added") {
				$("#projects-box").load(window.location.href + " #projects-box");
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
