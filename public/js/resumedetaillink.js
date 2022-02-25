const linkblog = document.getElementById("linkblog");
const linkgithub = document.getElementById("linkgithub");
const linkplay = document.getElementById("linkplay");
const linkbehance = document.getElementById("linkbehance");
const linksample = document.getElementById("linksample");
const linkAddBtn = document.getElementById("linkAddBtn");
const linkDelete = document.querySelectorAll(".linkdelete");
let isLinkUpdate = false;
let link = "";
let type = "";

$("body").on("click", ".linkdelete", function (e) {
	link = e.currentTarget.nextElementSibling.innerText;
	type = e.currentTarget.nextElementSibling.nextElementSibling.innerText;
});

$("body").on("click", ".linkdelete2", function (e) {
	async function deleteLink() {
		let options = {
			method: "DELETE"
		};

		const response = await fetch(
			`/deletelink?type=${type}&url=${link}`,
			options
		);
		const res = await response.json();
		console.log(res);
		if (res.data == "link deleted") {
			$("#portfolio-box").load(window.location.href + " #portfolio-box");
			document.getElementById("link" + type).value = "";
			document.querySelector(".alert-msg").classList.remove("d-none");
			document.querySelector(".message").innerText = "Successfully deleted";
			setTimeout(() => {
				document.querySelector(".alert-msg").classList.add("d-none");
			}, 2500);
		}
	}
	deleteLink();
});

$("body").on("click", ".linkupdate", function (e) {
	isLinkUpdate = true;
});

$("body").on("click", "#portfolioBtn", function (e) {
	isLinkUpdate = false;
});

linkAddBtn.addEventListener("click", function () {
	let blog = linkblog.value;
	let github = linkgithub.value;
	let play = linkplay.value;
	let behance = linkbehance.value;
	let sample = linksample.value;

	async function fetchApi() {
		let options = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				blog: blog,
				github: github,
				play: play,
				behance: behance,
				sample: sample
			})
		};
		const response = await fetch("/updatelink", options);
		const res = await response.json();
		console.log(res);
		if (res.data == "updated") {
			$("#portfolio-box").load(window.location.href + " #portfolio-box");
			document.querySelector(".alert-msg").classList.remove("d-none");
			document.querySelector(".message").innerText = "Successfully updated";
			setTimeout(() => {
				document.querySelector(".alert-msg").classList.add("d-none");
			}, 2500);
		}
	}
	fetchApi();
});
