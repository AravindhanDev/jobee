const jobBox = document.querySelector(".job-box");
const filterForm = document.querySelector(".filter-form");
const category = document.getElementById("category");
const job_location = document.getElementById("location");
const remotejobs = document.getElementById("remotejobs");
const internships = document.getElementById("internships");
const clearall = document.getElementById("clearall");
const search = document.getElementById("search");
const searchbtn = document.getElementById("searchbtn");
const filterText = document.querySelector(".filter-text");
const noContent = document.querySelector(".no-content");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");
const menubar = document.querySelector(".menubar");
let html = "";

menu.addEventListener("click", function (e) {
	menubar.classList.toggle("d-none");
});

window.addEventListener("load", function () {
	if (window.innerWidth < 992) {
		noContent.style.display = "block";
		filterForm.style.display = "none";
	}
});

window.addEventListener("resize", function () {
	if (window.innerWidth < 992) {
		noContent.style.display = "block";
		filterForm.style.display = "none";
	} else {
		noContent.style.display = "none";
		filterForm.style.display = "block";
	}
});

noContent.addEventListener("click", function (e) {
	console.log(window.innerWidth);
	if (window.innerWidth < 992) {
		noContent.style.display = "none";
		filterForm.style.display = "block";
		filterForm.style.maxHeight = "100rem";
	}
});

close.addEventListener("click", function (e) {
	noContent.style.display = "block";
	filterForm.style.display = "none";
});

filterText.addEventListener("click", function (e) {
	filterForm.style.maxHeight = "100rem";
});

category.addEventListener("keyup", function (e) {
	async function callApi() {
		let options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				category: e.target.value
			})
		};
		const response = await fetch(`/fetchcategory`, options);
		const res = await response.json();
		if (res.msg == "exist") {
			$("#job-box").load(window.location.href + " #job-box");
		}
	}
	callApi();
});

job_location.addEventListener("keyup", function (e) {
	async function callApi() {
		let options = {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				locality: e.target.value
			})
		};
		const response = await fetch("/fetchlocality", options);
		const res = await response.json();
		if (res.msg == "exist") {
			$("#job-box").load(window.location.href + " #job-box");
		}
	}
	callApi();
});

remotejobs.addEventListener("click", function (e) {
	async function callApi() {
		let options = {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				type: "Work from home"
			})
		};
		const response = await fetch("/remotejobs", options);
		const res = await response.json();
		if (res.msg == "exist") {
			$("#job-box").load(window.location.href + " #job-box");
		}
	}
	async function callApi2() {
		let options = {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				type: ""
			})
		};
		const response = await fetch("/remotejobs", options);
		const res = await response.json();
		if (res.msg == "exist") {
			$("#job-box").load(window.location.href + " #job-box");
		}
	}
	if (remotejobs.checked) {
		callApi();
	} else {
		callApi2();
	}
});

internships.addEventListener("click", function (e) {
	async function callApi() {
		let options = {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				type: "Internship"
			})
		};
		const response = await fetch("/internships", options);
		const res = await response.json();
		if (res.msg == "exist") {
			$("#job-box").load(window.location.href + " #job-box");
		}
	}
	async function callApi2() {
		let options = {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				type: ""
			})
		};
		const response = await fetch("/internships", options);
		const res = await response.json();
		if (res.msg == "exist") {
			$("#job-box").load(window.location.href + " #job-box");
		}
	}
	if (internships.checked) {
		callApi();
	} else {
		callApi2();
	}
});

clearall.addEventListener("click", function (e) {
	category.value = "";
	job_location.value = "";
	search.value = "";
	remotejobs.checked = false;
	internships.checked = false;
	async function callApi() {
		let options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				status: "clear"
			})
		};
		let response = await fetch("/clearall", options);
		let res = await response.json();
		console.log(res);
		if (res.msg == "exist") {
			$("#job-box").load(window.location.href + " #job-box");
		}
	}
	callApi();
});

search.addEventListener("keyup", function (e) {
	console.log(e.target.value);
	async function callApi() {
		let options = {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				search: e.target.value
			})
		};
		const response = await fetch("/search", options);
		const res = await response.json();
		if (res.msg == "exist") {
			$("#job-box").load(window.location.href + " #job-box");
		}
	}
	callApi();
});
