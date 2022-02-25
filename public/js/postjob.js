let currentuser = "";
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let orgname = document.getElementById("orgname");
let orgcity = document.getElementById("orgcity");
let orglocality = document.getElementById("orglocality");
let orgdescription = document.getElementById("orgdescription");
let orgwebsite = document.getElementById("orgwebsite");
let orgsocial = document.getElementById("orgsocial");
let isverified = document.getElementById("isverified");
let profile = document.getElementById("profile");
let profileinput = document.getElementById("profileinput");
let type = document.getElementById("type");
let typework = document.getElementById("typework");
let jobcity = document.getElementById("jobcity");
let opening = document.getElementById("openings");
let choose_duration = document.getElementById("chooseduration");
let choose_duration_period = document.getElementById("choosedurationperiod");
let applyby = document.getElementById("applyby");
let responsibilities = document.getElementById("responsibilities");
let whocanapply = document.getElementById("whocanapply");
let salary = document.getElementById("salary");
let persalary = document.getElementById("persalary");
let isflexible = document.getElementById("isflexible");
let isdresscode = document.getElementById("isdresscode");
let isfivedays = document.getElementById("isfivedays");
let isbonus = document.getElementById("isbonus");
let ispaidleave = document.getElementById("ispaidleave");
let isinsurance = document.getElementById("isinsurance");
let isdiscount = document.getElementById("isdiscount");
let isretirement = document.getElementById("isretirement");
let istraining = document.getElementById("istraining");
let isprograms = document.getElementById("isprograms");
let skills = document.getElementById("skills");
let skillstodo = document.querySelector(".skillstodo");
let add = document.getElementById("add");
let skillsArr = [];
let orgvertab = document.getElementById("orgvertab");
let count = document.querySelector(".count");
let formText = document.querySelectorAll(".form-text");
let submit = document.getElementById("submit");
let page = document.querySelector(".page");
let note = document.querySelector(".note");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let durationdays = document.querySelector(".durationdays");
let durationperiods = document.querySelector(".durationperiods");
let extraSpace = document.querySelector(".extra-space");
var isFirstPageOver = false;
var isSecondPageOver = false;
var isFirstPageReady = true;
var isSecondPageReady = true;
// function

window.addEventListener("load", function () {
	fetchCurrentUser();
	async function fetchCurrentUser() {
		const response = await fetch("/currentuser");
		const res = await response.json();
		console.log(res.user._id);
		currentuser = res.user._id;
	}
});

add.addEventListener("click", function (e) {
	let val = capitalize(e.target.previousElementSibling.value);
	if (skillsArr.includes(capitalize(val))) {
		skills.parentElement.nextElementSibling.classList.remove("d-none");
		skills.parentElement.nextElementSibling.innerHTML = `<i class="fas fa-exclamation-circle"></i> Already There`;
		skills.value = "";
		e.target.previousElementSibling.focus();
	} else {
		skillsArr.push(val);
		skills.value = "";
		show(skillsArr);
		window.scrollTo(0, document.body.scrollHeight);
		e.target.previousElementSibling.focus();
	}
});
skills.addEventListener("keyup", function (e) {
	skills.parentElement.nextElementSibling.classList.add("d-none");
	removeFormText();
	if (skills.value != "") {
		if (e.key == "Enter") {
			let val = capitalize(e.target.value);
			if (skillsArr.includes(capitalize(val))) {
				skills.parentElement.nextElementSibling.classList.remove("d-none");
				skills.parentElement.nextElementSibling.innerHTML = `<i class="fas fa-exclamation-circle"></i> Already There`;
				skills.value = "";
				e.target.focus();
			} else {
				skillsArr.push(val);
				skills.value = "";
				show(skillsArr);
				window.scrollTo(0, document.body.scrollHeight);
			}
		}
		let val = capitalize(e.target.value);
		if (skillsArr.includes(capitalize(val))) {
			skills.parentElement.nextElementSibling.classList.remove("d-none");
			skills.parentElement.nextElementSibling.innerHTML = `<i class="fas fa-exclamation-circle"></i> Already There`;
		}
	}
});

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function show(skillsArr) {
	let html = "";
	skillsArr.map((skills, index) => {
		html += `<div class="skilllist">
					<div class="skillname">${skills}</div>
					<div class="skillcrud" onclick="deleteSkills(${index})" id="${index}">
						<i class="fas fa-trash-alt delete"></i>
					</div>
				</div>`;
	});
	console.log(skillsArr);
	skillstodo.innerHTML = html;
}

function deleteSkills(id) {
	skillsArr.splice(id, 1);
	show(skillsArr);
}

function validURL(str) {
	var pattern = new RegExp(
		"^(https?:\\/\\/)?" +
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
			"((\\d{1,3}\\.){3}\\d{1,3}))" +
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
			"(\\?[;&a-z\\d%_.~+=-]*)?" +
			"(\\#[-a-z\\d_]*)?$",
		"i"
	);
	return !!pattern.test(str);
}

function removeFormText() {
	formText.forEach((form) => {
		form.classList.add("d-none");
	});
}

typework.addEventListener("change", function (event) {
	if (event.target.value == "Internship") {
		durationdays.classList.remove("d-none");
		durationperiods.classList.remove("d-none");
		extraSpace.classList.add("d-none");
	} else {
		durationdays.classList.add("d-none");
		durationperiods.classList.add("d-none");
		extraSpace.classList.remove("d-none");
	}
});

type.addEventListener("change", function (e) {
	if (type.value == "Work from home") {
		jobcity.parentElement.parentElement.classList.add("d-none");
		return;
	}
	jobcity.parentElement.parentElement.classList.remove("d-none");
});

firstname.addEventListener("keypress", function (event) {
	removeFormText();
	var char = String.fromCharCode(event.which);
	if (!/[a-zA-Z ]/.test(char)) {
		event.preventDefault();
	}
});
lastname.addEventListener("keypress", function (event) {
	removeFormText();
	var char = String.fromCharCode(event.which);
	if (!/[a-zA-Z ]/.test(char)) {
		event.preventDefault();
	}
});
email.addEventListener("keypress", function (event) {
	removeFormText();
	var char = String.fromCharCode(event.which);
	if (!/[a-zA-Z0-9@. ]/.test(char)) {
		event.preventDefault();
	}
});
mobile.addEventListener("keypress", function (event) {
	removeFormText();
	var char = String.fromCharCode(event.which);
	if (mobile.value == "") {
		if (char == 0) event.preventDefault();
	}
	if (mobile.value.length > 9) {
		event.preventDefault();
	}
	if (!/[0-9]/.test(char)) {
		event.preventDefault();
	}
});
orgname.addEventListener("keypress", function (event) {
	removeFormText();
	var char = String.fromCharCode(event.which);
	if (!/[a-zA-Z ]/.test(char)) {
		event.preventDefault();
	}
});
orgcity.addEventListener("keypress", function (event) {
	removeFormText();
	var char = String.fromCharCode(event.which);
	if (!/[a-zA-Z ]/.test(char)) {
		event.preventDefault();
	}
});
orglocality.addEventListener("keypress", removeFormText);
orgdescription.addEventListener("keyup", function (event) {
	removeFormText();
	count.textContent = orgdescription.value.length;
});

orgwebsite.addEventListener("keyup", function (event) {
	removeFormText();
	orgsocial.value = "";
	let url = event.target.value;
	let isvalid = validURL(url);
	if (isvalid) {
		orgvertab.classList.remove("d-none");
		isverified.checked = false;
	} else {
		orgvertab.classList.add("d-none");
		isverified.checked = true;
	}
	note.classList.add("d-none");
});
orgsocial.addEventListener("keyup", function (event) {
	removeFormText();
	orgwebsite.value = "";
	let url = event.target.value;
	let isvalid = validURL(url);
	if (isvalid) {
		orgvertab.classList.remove("d-none");
		isverified.checked = false;
	} else {
		orgvertab.classList.add("d-none");
		isverified.checked = true;
	}
	note.classList.add("d-none");
});
isverified.addEventListener("click", function () {
	if (isverified.checked) {
		removeFormText();
		orgwebsite.value = "";
		orgsocial.value = "";
		note.classList.remove("d-none");
		orgvertab.classList.add("d-none");
		window.scrollTo(0, document.body.scrollHeight);
	} else {
		removeFormText();
		orgwebsite.value = "";
		orgsocial.value = "";
		note.classList.add("d-none");
		orgvertab.classList.add("d-none");
		window.scrollTo(0, document.body.scrollHeight);
	}
});
profile.addEventListener("change", function (event) {
	removeFormText();
	if (event.target.value == "Other") {
		event.target.classList.add("d-none");
		event.target.nextElementSibling.classList.remove("d-none");
		event.target.nextElementSibling.focus();
	}
});
profileinput.addEventListener("keypress", function (event) {
	removeFormText();
	var char = String.fromCharCode(event.which);
	if (!/[a-zA-Z ]/.test(char)) {
		event.preventDefault();
	}
});
type.addEventListener("change", removeFormText);
jobcity.addEventListener("keypress", removeFormText);
openings.addEventListener("keypress", removeFormText);
choose_duration.addEventListener("change", removeFormText);
choose_duration_period.addEventListener("change", removeFormText);
applyby.addEventListener("change", removeFormText);
responsibilities.addEventListener("keypress", removeFormText);
whocanapply.addEventListener("keypress", removeFormText);
salary.addEventListener("keyup", function (event) {
	removeFormText();
	var char = String.fromCharCode(event.which);
	if (salary.value == "") {
		if (char == 0) event.preventDefault();
	}
	if (salary.value.length > 8) {
		event.preventDefault();
	}
	if (!/[0-9]/.test(char)) {
		event.preventDefault();
	}
});

persalary.addEventListener("change", removeFormText);
isflexible.addEventListener("change", removeFormText);
isdresscode.addEventListener("change", removeFormText);
isfivedays.addEventListener("change", removeFormText);
isbonus.addEventListener("change", removeFormText);
ispaidleave.addEventListener("change", removeFormText);
isinsurance.addEventListener("change", removeFormText);
isdiscount.addEventListener("change", removeFormText);
isretirement.addEventListener("change", removeFormText);
istraining.addEventListener("change", removeFormText);
isprograms.addEventListener("change", removeFormText);
skills.addEventListener("keypress", removeFormText);

prev.addEventListener("click", function (event) {
	submit.innerText = "Next";
	page.innerText = `1 / 2`;
	removeFormText();
	document.querySelector(".section1").classList.remove("d-none");
	document.querySelector(".section2").classList.remove("d-none");
	document.querySelector(".section3").classList.remove("d-none");
	document.querySelector(".section4").classList.add("d-none");
	document.querySelector(".section5").classList.add("d-none");
	document.querySelector(".section6").classList.add("d-none");
	document.querySelector(".section7").classList.add("d-none");
	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	prev.classList.add("d-none");
	submit.classList.add("d-none");
	next.classList.remove("d-none");
});
next.addEventListener("click", function (event) {
	submit.innerText = "Posting Job";
	page.innerText = `2 / 2`;
	removeFormText();
	document.querySelector(".section1").classList.add("d-none");
	document.querySelector(".section2").classList.add("d-none");
	document.querySelector(".section3").classList.add("d-none");
	document.querySelector(".section4").classList.remove("d-none");
	document.querySelector(".section5").classList.remove("d-none");
	document.querySelector(".section6").classList.remove("d-none");
	document.querySelector(".section7").classList.remove("d-none");
	prev.classList.remove("d-none");
	submit.classList.remove("d-none");
	next.classList.add("d-none");
});

submit.addEventListener("click", function (event) {
	isFirstPageReady = true;
	isSecondPageReady = true;
	let cfirstname = firstname.value;
	let clastname = lastname.value;
	let cemail = email.value;
	let cmobile = mobile.value;
	let corgname = orgname.value;
	let corgcity = orgcity.value;
	let corglocality = orglocality.value;
	let corgdescription = orgdescription.value;
	let corgwebsite = orgwebsite.value;
	let corgsocial = orgsocial.value;
	let cisverified = isverified.checked ? false : true;
	let cprofile = profile.value;
	let cprofileinput = profileinput.value;
	let ctype = type.value;
	let ctypework = typework.value;
	let cjobcity = jobcity.value;
	let copening = opening.value;
	let cchoose_duration = choose_duration.value;
	let cchoose_duration_period = choose_duration_period.value;
	let capplyby = applyby.value;
	let cresponsibilities = responsibilities.value;
	let cwhocanapply = whocanapply.value;
	let csalary = salary.value;
	let cpersalary = persalary.value;
	let cisflexible = isflexible.checked;
	let cisdresscode = isdresscode.checked;
	let cisfivedays = isfivedays.checked;
	let cisbonus = isbonus.checked;
	let cispaidleave = ispaidleave.checked;
	let cisinsurance = isinsurance.checked;
	let cisdiscount = isdiscount.checked;
	let cisretirement = isretirement.checked;
	let cistraining = istraining.checked;
	let cisprograms = isprograms.checked;

	console.log(capplyby);

	if (cfirstname == "") {
		firstname.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isFirstPageReady = false;
	}
	if (clastname == "") {
		lastname.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isFirstPageReady = false;
	}
	if (cemail == "") {
		email.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isFirstPageReady = false;
	} else {
		if (!cemail.includes("@") || !cemail.includes(".")) {
			email.nextElementSibling.classList.remove("d-none");
			email.nextElementSibling.innerHTML = `<i class="fas fa-exclamation-circle"></i> Not a Valid Email`;
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
			isFirstPageReady = false;
		}
	}
	if (corgname == "") {
		orgname.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isFirstPageReady = false;
	}

	if (corgcity == "") {
		orgcity.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isFirstPageReady = false;
	}

	if (corglocality == "") {
		orglocality.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isFirstPageReady = false;
	}
	if (corgdescription == "") {
		orgdescription.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isFirstPageReady = false;
	}
	if (cmobile == "") {
		mobile.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isFirstPageReady = false;
	} else {
		if (cmobile.length < 10) {
			mobile.nextElementSibling.classList.remove("d-none");
			mobile.nextElementSibling.innerHTML = `<i class="fas fa-exclamation-circle"></i> Not a Valid Mobile Number`;
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
			isFirstPageReady = false;
		}
	}
	if (cprofile == "Other") {
		if (cprofileinput == "") {
			profileinput.nextElementSibling.classList.remove("d-none");
			isSecondPageReady = false;
		}
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}
	if (ctype != "Work from home") {
		if (cjobcity == "") {
			jobcity.nextElementSibling.classList.remove("d-none");
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
			isSecondPageReady = false;
		}
	}
	if (cwhocanapply == "") {
		whocanapply.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isSecondPageReady = false;
	}
	if (capplyby == "") {
		applyby.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isSecondPageReady = false;
	}
	if (csalary == "") {
		salary.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isSecondPageReady = false;
	}
	if (skillsArr.length == 0) {
		skills.parentElement.nextElementSibling.classList.remove("d-none");
		window.scrollTo(0, document.body.scrollHeight);
		isSecondPageReady = false;
	}
	if (!isFirstPageReady) {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}
	if (isFirstPageReady) {
		isFirstPageOver = true;
		submit.innerText = "Posting Job";
		page.innerText = `2 / 2`;
		prev.classList.remove("d-none");
		if (isSecondPageReady) {
			removeFormText();
			window.scrollTo(0, document.body.scrollHeight);
		}
		if (!isSecondPageReady) {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		}
	}
	if (isSecondPageReady) {
		window.scrollTo(0, document.body.scrollHeight);
		isSecondPageOver = true;
	}
	if (isFirstPageOver) {
		document.querySelector(".section1").classList.add("d-none");
		document.querySelector(".section2").classList.add("d-none");
		document.querySelector(".section3").classList.add("d-none");
		document.querySelector(".section4").classList.remove("d-none");
		document.querySelector(".section5").classList.remove("d-none");
		document.querySelector(".section6").classList.remove("d-none");
		document.querySelector(".section7").classList.remove("d-none");
	}
	if (isSecondPageOver) {
		submit.innerHTML = `<i class="fas fa-hourglass-half time"></i> &nbsp;&nbsp; Posting...`;
		window.scrollTo(0, document.body.scrollHeight);
		console.log(cisverified);
		async function callApi() {
			let options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					firstname: cfirstname,
					lastname: clastname,
					email: cemail,
					mobile: cmobile,
					orgname: corgname,
					orgcity: corgcity,
					orglocality: corglocality,
					orgdescription: corgdescription,
					orgwebsite: corgwebsite,
					orgsocial: corgsocial,
					isverified: cisverified,
					profile: cprofile,
					profileinput: cprofileinput,
					type: ctype,
					typework: ctypework,
					jobcity: cjobcity,
					opening: copening,
					choose_duration: cchoose_duration,
					choose_duration_period: cchoose_duration_period,
					applyby: capplyby,
					responsibilities: cresponsibilities,
					whocanapply: cwhocanapply,
					salary: csalary,
					persalary: cpersalary,
					isflexible: cisflexible,
					isdresscode: cisdresscode,
					isfivedays: cisfivedays,
					isbonus: cisbonus,
					ispaidleave: cispaidleave,
					isinsurance: cisinsurance,
					isdiscount: cisdiscount,
					isretirement: cisretirement,
					istraining: cistraining,
					isprograms: cisprograms,
					skillsArr: skillsArr,
					currentuser: currentuser,
					dateTime: new Date().toLocaleDateString("en-us")
				})
			};

			const response = await fetch("/postjob", options);
			const res = await response.json();
			console.log(res);
			if (res.status == "created") {
				location.href = "/joblistings";
			}
		}
		callApi();
	}
});
