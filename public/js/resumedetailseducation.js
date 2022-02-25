// education section
const epursuing = document.getElementById("pursuing");
const ecomplete = document.getElementById("complete");
const educollege = document.getElementById("educollege");
const eduschool = document.getElementById("eduschool");
const edudegree = document.getElementById("edudegree");
const edustream = document.getElementById("edustream");
const educomplete = document.getElementById("educomplete");
const edustartyear = document.getElementById("edustartyear");
const eduendyear = document.getElementById("eduendyear");
const edumarktype = document.getElementById("edumarktype");
const edumark = document.getElementById("edumark");
const eduAddBtn = document.getElementById("eduAddBtn");
const formText = document.querySelectorAll(".form-text");
const educationUpdate = document.querySelectorAll(".educationupdate");
const educationDelete = document.querySelectorAll(".educationdelete");
const educationBox = document.getElementById("education-box");
let isEducationUpdate = false;
let degree = "";

const educationBtn = document.querySelector(".educationBtn");

$("body").on("click", "#educationBtn", function (e) {
	epursuing.checked = true;
	ecomplete.checked = false;
	educollege.value = "";
	eduschool.value = "";
	edudegree.value = "Under Graduation";
	edustream.value = "";
	educomplete.selectedIndex = 0;
	edustartyear.selectedIndex = 0;
	eduendyear.selectedIndex = 0;
	edumarktype.selectedIndex = "";
	edumark.value = "";

	epursuing.parentElement.classList.remove("d-none");
	ecomplete.parentElement.classList.remove("d-none");
	educollege.parentElement.classList.remove("d-none");
	eduschool.parentElement.classList.add("d-none");
	edudegree.parentElement.classList.remove("d-none");
	edustream.parentElement.classList.remove("d-none");
	educomplete.parentElement.classList.add("d-none");
	edustartyear.parentElement.classList.remove("d-none");
	eduendyear.parentElement.classList.remove("d-none");
	edumarktype.parentElement.classList.remove("d-none");
	edumark.parentElement.classList.remove("d-none");
});

$("body").on("click", ".educationupdate", function (e) {
	let childArr = e.currentTarget.parentElement.childNodes;
	let degree = childArr[7].innerText;
	let stream = childArr[9].innerText;
	let college = childArr[11].innerText;
	let school = childArr[13].innerText;
	let startyear = childArr[15].innerText;
	let endyear = childArr[17].innerText;
	let marktype = childArr[19].innerText;
	let mark = childArr[21].innerText;
	let complete = childArr[23].innerText;
	let e_complete = childArr[25].innerText;
	let e_pursuing = childArr[27].innerText;

	epursuing.checked = e_pursuing === "true" ? true : false;
	ecomplete.checked = e_complete === "true" ? true : false;
	educollege.value = college;
	eduschool.value = school;
	edudegree.value = degree;
	edustream.value = stream;
	educomplete.value = complete;
	edustartyear.value = startyear;
	eduendyear.value = endyear;
	edumarktype.value = marktype;
	edumark.value = mark;

	isEducationUpdate = true;

	if (ecomplete.checked) {
		educomplete.parentElement.classList.remove("d-none");
		edustartyear.parentElement.classList.add("d-none");
		eduendyear.parentElement.classList.add("d-none");
	}

	if (epursuing.checked) {
		educomplete.parentElement.classList.add("d-none");
		edustartyear.parentElement.classList.remove("d-none");
		eduendyear.parentElement.classList.remove("d-none");
	}

	if (
		edudegree.value != "Senior Secondary (XII)" ||
		edudegree.value != "Secondary (X)"
	) {
		eduschool.parentElement.classList.add("d-none");
		educollege.parentElement.classList.remove("d-none");
		edustream.parentElement.classList.remove("d-none");
	}

	if (edudegree.value == "Senior Secondary (XII)") {
		eduschool.parentElement.classList.remove("d-none");
		educollege.parentElement.classList.add("d-none");
		edustream.parentElement.classList.remove("d-none");
	}

	if (edudegree.value == "Secondary (X)") {
		eduschool.parentElement.classList.remove("d-none");
		educollege.parentElement.classList.add("d-none");
		edustream.parentElement.classList.add("d-none");
	}
});

$("body").on("click", ".educationdelete", function (e) {
	degree = e.currentTarget.nextElementSibling.innerText;
});

$("body").on("click", ".educationdelete2", function (e) {
	async function deleteEducation() {
		let options = {
			method: "DELETE"
		};
		const response = await fetch(`/deleteeducation/${degree}`, options);
		const res = await response.json();
		console.log(res);
		if (res.data == "education deleted") {
			$("#education-box").load(window.location.href + " #education-box");
			document.querySelector(".alert-msg").classList.remove("d-none");
			document.querySelector(".message").innerText = "Successfully deleted";
			setTimeout(() => {
				document.querySelector(".alert-msg").classList.add("d-none");
			}, 2500);
		}
	}
	deleteEducation();
});

function checkfocus() {
	if (educollege.value == "") {
		educollege.nextElementSibling.classList.remove("d-none");
		educollege.style.border = "1px solid #f90716";
	} else {
		educollege.nextElementSibling.classList.add("d-none");
		educollege.style.border = "1px solid #ddd";
	}
	if (eduschool.value == "") {
		eduschool.style.border = "1px solid #f90716";
		eduschool.nextElementSibling.classList.remove("d-none");
	} else {
		eduschool.style.border = "1px solid #ddd";
		eduschool.nextElementSibling.classList.add("d-none");
	}
}

function removeText() {
	formText.formEach((form) => {
		form.classList.add("d-none");
	});
}

epursuing.addEventListener("click", function () {
	educomplete.parentElement.classList.add("d-none");
	edustartyear.parentElement.classList.remove("d-none");
	eduendyear.parentElement.classList.remove("d-none");
});

ecomplete.addEventListener("click", function () {
	educomplete.parentElement.classList.remove("d-none");
	edustartyear.parentElement.classList.add("d-none");
	eduendyear.parentElement.classList.add("d-none");
});

eduschool.addEventListener("keypress", function () {
	ecomplete.checked = true;
	checkfocus();
});

educollege.addEventListener("keypress", function () {
	checkfocus();
});

educollege.addEventListener("focusout", function () {
	checkfocus();
});

eduendyear.addEventListener("change", function (e) {
	let current = e.target.value;
	if (new Date().getFullYear() > current) {
		ecomplete.checked = true;
	} else {
		epursuing.checked = true;
	}
	console.log(ecomplete.checked, epursuing.checked);
});

edudegree.addEventListener("change", function (e) {
	if (
		e.target.value == "Senior Secondary (XII)" ||
		e.target.value == "Secondary (X)"
	) {
		educomplete.parentElement.classList.remove("d-none");
		edustartyear.parentElement.classList.add("d-none");
		eduendyear.parentElement.classList.add("d-none");
		educollege.parentElement.classList.add("d-none");
		eduschool.parentElement.classList.remove("d-none");
		ecomplete.checked = true;
	} else {
		educomplete.parentElement.classList.add("d-none");
		edustartyear.parentElement.classList.remove("d-none");
		eduendyear.parentElement.classList.remove("d-none");
		educollege.parentElement.classList.remove("d-none");
		eduschool.parentElement.classList.add("d-none");
		epursuing.checked = true;
	}

	if (e.target.value == "Secondary (X)") {
		edustream.parentElement.classList.add("d-none");
		edustream.value = "";
	} else {
		edustream.parentElement.classList.remove("d-none");
	}
});

eduAddBtn.addEventListener("click", function () {
	let e_pursuing = epursuing.checked;
	let e_complete = ecomplete.checked;
	let college = educollege.value;
	let school = eduschool.value;
	let degree = edudegree.value;
	let stream = edustream.value;
	let complete = educomplete.value;
	let startyear = edustartyear.value;
	let endyear = eduendyear.value;
	let marktype = edumarktype.value;
	let mark = edumark.value;
	let isReady = true;

	if (degree == "Senior Secondary (XII)" || degree == "Secondary (X)") {
		if (school == "") {
			eduschool.nextElementSibling.classList.remove("d-none");
			isReady = false;
		}
	} else {
		if (college == "") {
			educollege.nextElementSibling.classList.remove("d-none");
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
					e_pursuing: e_pursuing,
					e_complete: e_complete,
					college: college,
					school: school,
					degree: degree,
					stream: stream,
					complete: complete,
					startyear: startyear,
					endyear: endyear,
					marktype: marktype,
					mark: mark,
					isupdate: isEducationUpdate
				})
			};
			const response = await fetch("/updateeducation", options);
			const res = await response.json();
			console.log(res);

			if (res.data == "updated") {
				$("#education-box").load(window.location.href + " #education-box");
				document.querySelector(".alert-msg").classList.remove("d-none");
				document.querySelector(".message").innerText = "Successfully updated";
				setTimeout(() => {
					document.querySelector(".alert-msg").classList.add("d-none");
				}, 2500);
			}
			if (res.data == "new") {
				$("#education-box").load(window.location.href + " #education-box");
				document.querySelector(".alert-msg").classList.remove("d-none");
				document.querySelector(".message").innerText = "Successfully added";
				setTimeout(() => {
					document.querySelector(".alert-msg").classList.add("d-none");
				}, 2500);
			}
			if (res.data == "exist") {
				document.querySelector(".alert-msg").classList.remove("d-none");
				document.querySelector(".message").innerText = "Already There";
				setTimeout(() => {
					document.querySelector(".alert-msg").classList.add("d-none");
				}, 2500);
			}
		}
		fetchApi();
	}
});
