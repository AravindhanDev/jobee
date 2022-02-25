const btn = document.getElementById("register");
const acctype = document.getElementById("acctype");
const username = document.getElementById("username");
const password = document.getElementById("password");
const userWarn = document.querySelectorAll(".form-text");
const eye = document.querySelector(".eye");
const warning = document.querySelector(".warning");
let isReady = true;

eye.addEventListener("click", function (e) {
	let type = e.currentTarget.previousElementSibling.getAttribute("type");
	console.log(type);
	if (type == "password") {
		e.currentTarget.previousElementSibling.setAttribute("type", "text");
		e.currentTarget.firstChild.classList.remove("fa-eye");
		e.currentTarget.firstChild.classList.add("fa-eye-slash");
	} else if (type == "text") {
		e.currentTarget.previousElementSibling.setAttribute("type", "password");
		e.currentTarget.firstChild.classList.remove("fa-eye-slash");
		e.currentTarget.firstChild.classList.add("fa-eye");
	}
});

acctype.addEventListener("change", function (e) {
	userWarn.forEach((user) => {
		user.classList.add("d-none");
	});
	warning.classList.add("d-none");
});

username.addEventListener("keyup", function (e) {
	var char = String.fromCharCode(e.which);
	if (!/[a-zA-Z0-9 ]/.test(char)) {
		e.preventDefault();
	}

	userWarn.forEach((user) => {
		user.classList.add("d-none");
	});
	warning.classList.add("d-none");
});

password.addEventListener("keyup", function (e) {
	userWarn.forEach((user) => {
		user.classList.add("d-none");
	});
	warning.classList.add("d-none");
});

btn.addEventListener("click", function () {
	isReady = true;
	let acc = acctype.value;
	let user = username.value;
	let pass = password.value;
	if (acc == "") {
		acctype.nextElementSibling.classList.remove("d-none");
		isReady = false;
	}
	if (user == "") {
		username.nextElementSibling.classList.remove("d-none");
		isReady = false;
	}
	if (pass == "") {
		password.parentNode.nextElementSibling.classList.remove("d-none");
		isReady = false;
	}
	if (isReady) {
		async function callApi() {
			let options = {
				method: "post",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					account_type: acc,
					username: user,
					password: pass
				})
			};
			const response = await fetch("/", options);
			const res = await response.json();
			console.log(res);
			if (res.data == "new") {
				if (res.type == "Student") {
					location.href = "/createresume";
				} else {
					location.href = "/postjob";
				}
				warning.classList.add("d-none");
			} else {
				warning.classList.remove("d-none");
			}
		}
		callApi();
	}
});
