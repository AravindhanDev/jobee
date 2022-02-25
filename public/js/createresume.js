// section 1
let currentuser = "";
let student_name = document.getElementById("name");
let student_city = document.getElementById("city");
let locality = document.getElementById("locality");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let otherlink = document.getElementById("otherlink");
let formText = document.querySelectorAll(".form-text");

// others
let submit = document.getElementById("submit");
let isReady = true;

window.addEventListener("load", function () {
	fetchCurrentUser();
	async function fetchCurrentUser() {
		const response = await fetch("/currentuser");
		const res = await response.json();
		console.log(res.user._id);
		currentuser = res.user._id;
	}
});

function removeFormText() {
	formText.forEach((form) => {
		form.classList.add("d-none");
	});
}

student_name.addEventListener("keypress", function (event) {
	removeFormText();
	var char = String.fromCharCode(event.which);
	if (!/[a-zA-Z ]/.test(char)) {
		event.preventDefault();
	}
});

student_city.addEventListener("keypress", function (event) {
	removeFormText();
	var char = String.fromCharCode(event.which);
	if (!/[a-zA-Z ]/.test(char)) {
		event.preventDefault();
	}
});
locality.addEventListener("keypress", removeFormText);
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
otherlink.addEventListener("keypress", function (event) {
	removeFormText();
});

function validURL(str) {
	var pattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$",
		"i"
	); // fragment locator
	return !!pattern.test(str);
}

submit.addEventListener("click", function (e) {
	let sname = student_name.value;
	let scity = student_city.value;
	let slocality = locality.value;
	let semail = email.value;
	let smobile = mobile.value;
	let sotherlink = otherlink.value;
	isReady = true;

	if (sname == "") {
		student_name.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isReady = false;
	}
	if (slocality == "") {
		locality.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}
	if (scity == "") {
		student_city.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isReady = false;
	}
	if (!semail.includes("@") || !semail.includes(".")) {
		email.nextElementSibling.classList.remove("d-none");
		email.nextElementSibling.innerHTML = `<i class="fas fa-exclamation-circle"></i> Not a Valid Email`;
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isReady = false;
	}
	if (semail == "") {
		email.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isReady = false;
	}
	if (smobile.length < 10) {
		mobile.nextElementSibling.classList.remove("d-none");
		mobile.nextElementSibling.innerHTML = `<i class="fas fa-exclamation-circle"></i> Not a Valid Phone No`;
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isReady = false;
	}
	if (smobile == "") {
		mobile.nextElementSibling.classList.remove("d-none");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		isReady = false;
	}
	if (isReady) {
		console.log(currentuser);
		submit.innerHTML = `<i class="fas fa-paper-plane"></i>&nbsp;&nbsp;Posting Details&nbsp;...`;
		async function callApi() {
			let options = {
				method: "post",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: sname,
					city: scity,
					locality: slocality,
					email: semail,
					mobile: smobile,
					otherlink: sotherlink,
					currentuser: currentuser,
					portfolio: [
						{
							blog: "",
							github: "",
							behance: "",
							play: "",
							sample: ""
						}
					],
					dateTime: new Date().toLocaleDateString("en-us")
				})
			};
			const response = await fetch("/createresume", options);
			const res = await response.json();
			console.log(res);
			if (res.status == "created") {
				location.href = "/resumedetails";
			}
		}
		callApi();
	}
});
