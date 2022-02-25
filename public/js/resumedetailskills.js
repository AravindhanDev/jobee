const skills = document.getElementById("skills");
const skilllevel = document.getElementById("skilllevel");
const skillupdate = document.querySelectorAll(".skillupdate");
const skilldelete = document.querySelectorAll(".skilldelete");
let isSkillUpdate = false;
let prevSkillTitle = "";
let skill = "";

$("body").on("click", "#skillBtn", function (e) {
	skills.value = "";
	isSkillUpdate = false;
});

$("body").on("click", ".skillupdate", function (e) {
	prevSkillTitle = e.currentTarget.previousElementSibling.innerText;
	skills.value = prevSkillTitle;
	skilllevel.parentElement.classList.remove("d-none");
	isSkillUpdate = true;
});

$("body").on("click", ".skilldelete", function (e) {
	skill =
		e.currentTarget.previousElementSibling.previousElementSibling.innerText;
});

$("body").on("click", ".skilldelete2", function (e) {
	async function deleteSkill() {
		let options = {
			method: "DELETE"
		};

		const response = await fetch(`/deleteskill/${skill}`, options);
		const res = await response.json();
		console.log(res);
		if (res.data == "skill deleted") {
			$("#skills-box").load(window.location.href + " #skills-box");
			document.querySelector(".alert-msg").classList.remove("d-none");
			document.querySelector(".message").innerText = "Successfully deleted";
			setTimeout(() => {
				document.querySelector(".alert-msg").classList.add("d-none");
			}, 2500);
		}
	}
	deleteSkill();
});

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

skills.addEventListener("focusout", function (e) {
	if (skills.value == "") {
		skills.nextElementSibling.classList.remove("d-none");
		skills.style.border = "1px solid #f90716";
	}
});

skills.addEventListener("keyup", function (e) {
	skills.nextElementSibling.classList.add("d-none");
	skills.style.border = "1px solid #ddd";
	if (skills.value != "") {
		skilllevel.parentElement.classList.remove("d-none");
	} else {
		skilllevel.parentElement.classList.add("d-none");
	}
});

skilllevel.addEventListener("change", function (e) {
	let skill = skills.value;
	skill = capitalize(skill);
	let skilllvl = skilllevel.value;

	async function fetchApi() {
		let options = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				isupdate: isSkillUpdate,
				prevTitle: prevSkillTitle,
				skill: skill,
				skilllevel: skilllvl
			})
		};
		const response = await fetch("/updateskill", options);
		const res = await response.json();
		console.log(res);
		if (res.data == "patch updated") {
			document.querySelector(".btn-close-skill").click();
			$("#skills-box").load(window.location.href + " #skills-box");
			document.querySelector(".alert-msg").classList.remove("d-none");
			document.querySelector(".message").innerText = "Successfully updated";
			setTimeout(() => {
				document.querySelector(".alert-msg").classList.add("d-none");
			}, 2500);
		}
		if (res.data == "put updated") {
			document.querySelector(".btn-close-skill").click();
			$("#skills-box").load(window.location.href + " #skills-box");
			document.querySelector(".alert-msg").classList.remove("d-none");
			document.querySelector(".message").innerText = "Successfully updated";
			setTimeout(() => {
				document.querySelector(".alert-msg").classList.add("d-none");
			}, 2500);
		}
		if (res.data == "added") {
			document.querySelector(".btn-close-skill").click();
			$("#skills-box").load(window.location.href + " #skills-box");
			document.querySelector(".alert-msg").classList.remove("d-none");
			document.querySelector(".message").innerText = "Successfully added";
			setTimeout(() => {
				document.querySelector(".alert-msg").classList.add("d-none");
			}, 2500);
		}
		if (res.data == "skill exist") {
			document.querySelector(".alert-msg").classList.remove("d-none");
			document.querySelector(".message").innerText = "Already There";
			setTimeout(() => {
				document.querySelector(".alert-msg").classList.add("d-none");
			}, 2500);
		}
	}
	fetchApi();
});
