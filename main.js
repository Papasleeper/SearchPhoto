function appendImageElem(keyword, index) {
	const imgElem = document.createElement("img");
	imgElem.src = `http://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

	const galleryElem = document.querySelector(".photo");
	galleryElem.appendChild(imgElem);
}

function remove() {
	const galleryElem = document.querySelector(".photo");
	galleryElem.innerHTML = "";
}

function searchPhoto(event) {
	const keyword = event.target.value;

	if (event.key === "Enter" && keyword) {
		remove();
		for (let i = 1; i < 10; i++) {
			appendImageElem(keyword, i);
		}
	}
}

function run() {
	const inputElem = document.querySelector("input");
	inputElem.addEventListener("keydown", searchPhoto);
}

run();
