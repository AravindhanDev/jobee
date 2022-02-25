const btn = document.getElementById("register");
const username = document.getElementById("username");
const password = document.getElementById("password");
const userWarn = document.querySelectorAll(".form-text");
const warning = document.querySelector(".warning");
const eye = document.querySelector(".eye");

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

username.addEventListener("keyup", function (e) {
	var char = String.fromCharCode(e.which);
	if (!/[a-zA-Z0-9 ]/.test(char)) {
		e.preventDefault();
	}
	warning.classList.add("d-none");
});

password.addEventListener("keyup", function (e) {
	warning.classList.add("d-none");
});

btn.addEventListener("click", function () {
	let user = username.value;
	let pass = password.value;
	if (user == "") {
		warning.classList.remove("d-none");
	}
	if (pass == "") {
		warning.classList.remove("d-none");
	} else {
		btn.innerHTML = `<i class="fas fa-spinner spin"></i>`;
		async function callApi() {
			let options = {
				method: "post",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					username: user,
					password: pass
				})
			};

			const response = await fetch("/login", options);
			console.log(response);
			if (response.status == 401) {
				btn.innerHTML = `Login`;
				warning.classList.remove("d-none");
				username.value = "";
				password.value = "";
			}
			if (response.status == 200) {
				warning.classList.add("d-none");
				const res = await response.json();
				console.log(res);
				if (res.data == "auth") {
					location.href = "/joblistings";
				}
			}
		}
		callApi(); // calling the callApi function to send post request using fetch API
	}
});
