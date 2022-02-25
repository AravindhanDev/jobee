document.getElementById("educationBtn").classList.add("d-none");
document.getElementById("jobBtn").classList.add("d-none");
document.getElementById("trainingBtn").classList.add("d-none");
document.getElementById("projectBtn").classList.add("d-none");
document.getElementById("skillBtn").classList.add("d-none");
document.getElementById("portfolioBtn").classList.add("d-none");
// class
document.querySelectorAll(".educationupdate").forEach((arr) => {
	arr.classList.add("d-none");
});
document.querySelectorAll(".educationdelete").forEach((arr) => {
	arr.classList.add("d-none");
});
document.querySelectorAll(".jobupdate").forEach((arr) => {
	arr.classList.add("d-none");
});
document.querySelectorAll(".jobdelete").forEach((arr) => {
	arr.classList.add("d-none");
});
document.querySelectorAll(".trainingupdate").forEach((arr) => {
	arr.classList.add("d-none");
});
document.querySelectorAll(".trainingdelete").forEach((arr) => {
	arr.classList.add("d-none");
});
document.querySelectorAll(".projectupdate").forEach((arr) => {
	arr.classList.add("d-none");
});
document.querySelectorAll(".projectdelete").forEach((arr) => {
	arr.classList.add("d-none");
});
document.querySelectorAll(".skillupdate").forEach((arr) => {
	arr.classList.add("d-none");
});
document.querySelectorAll(".skilldelete").forEach((arr) => {
	arr.classList.add("d-none");
});
document.querySelectorAll(".linkupdate").forEach((arr) => {
	arr.classList.add("d-none");
});
document.querySelectorAll(".linkdelete").forEach((arr) => {
	arr.classList.add("d-none");
});
document.querySelector(".editBtn").addEventListener("click", function (e) {
	if (
		document.querySelector(".editBtn").innerHTML ==
		'<i class="bi bi-pencil-square"></i> Edit'
	) {
		document.querySelector(
			".editBtn"
		).innerHTML = `<i class="bi bi-x-lg"></i> Discard`;
	} else {
		document.querySelector(
			".editBtn"
		).innerHTML = `<i class="bi bi-pencil-square"></i> Edit`;
	}
	document.querySelector(".total-section").scrollIntoView();
	document.getElementById("educationBtn").classList.toggle("d-none");
	document.getElementById("jobBtn").classList.toggle("d-none");
	document.getElementById("trainingBtn").classList.toggle("d-none");
	document.getElementById("projectBtn").classList.toggle("d-none");
	document.getElementById("skillBtn").classList.toggle("d-none");
	document.getElementById("portfolioBtn").classList.toggle("d-none");
	document.querySelectorAll(".educationupdate").forEach((arr) => {
		arr.classList.toggle("d-none");
	});
	document.querySelectorAll(".educationdelete").forEach((arr) => {
		arr.classList.toggle("d-none");
	});
	document.querySelectorAll(".jobupdate").forEach((arr) => {
		arr.classList.toggle("d-none");
	});
	document.querySelectorAll(".jobdelete").forEach((arr) => {
		arr.classList.toggle("d-none");
	});
	document.querySelectorAll(".trainingupdate").forEach((arr) => {
		arr.classList.toggle("d-none");
	});
	document.querySelectorAll(".trainingdelete").forEach((arr) => {
		arr.classList.toggle("d-none");
	});
	document.querySelectorAll(".projectupdate").forEach((arr) => {
		arr.classList.toggle("d-none");
	});
	document.querySelectorAll(".projectdelete").forEach((arr) => {
		arr.classList.toggle("d-none");
	});
	document.querySelectorAll(".skillupdate").forEach((arr) => {
		arr.classList.toggle("d-none");
	});
	document.querySelectorAll(".skilldelete").forEach((arr) => {
		arr.classList.toggle("d-none");
	});
	document.querySelectorAll(".linkupdate").forEach((arr) => {
		arr.classList.toggle("d-none");
	});
	document.querySelectorAll(".linkdelete").forEach((arr) => {
		arr.classList.toggle("d-none");
	});
});
