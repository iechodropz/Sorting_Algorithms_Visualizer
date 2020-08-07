const ARRAY_BARS = document.getElementById("array-bars-container");
const ARRAY_SIZE = document.getElementById("array-size");
const NEW_ARRAY = document.getElementById("new-array");
const ALGORITHM = document.getElementById("algorithm");

NEW_ARRAY.addEventListener("click", newArray);
ARRAY_SIZE.addEventListener("input", adjustArraySize);

let COPY_ARRAY_BARS = [];

start();

function adjustArraySize(e) {
	arraySize = e.target;

	clear();

	for (let i = 1; i <= arraySize.value; i++) {
		let arrayBar = ARRAY_BARS.appendChild(document.createElement("div"));

		arrayBar.classList.add("array-bar");

		randomBarHeight = Math.floor(Math.random() * (500 - 5 + 1)) + 5;

		arrayBar.style.height = randomBarHeight.toString() + "px";

		COPY_ARRAY_BARS.push(randomBarHeight);
	}
}

function start() {
	for (let i = 1; i <= ARRAY_SIZE.value; i++) {
		let arrayBar = ARRAY_BARS.appendChild(document.createElement("div"));

		arrayBar.classList.add("array-bar");

		randomBarHeight = Math.floor(Math.random() * (500 - 5 + 1)) + 5;

		arrayBar.style.height = randomBarHeight.toString() + "px";

		COPY_ARRAY_BARS.push(randomBarHeight);
	}
}

function clear() {
	COPY_ARRAY_BARS = [];

	while (ARRAY_BARS.firstChild) {
		ARRAY_BARS.removeChild(ARRAY_BARS.firstChild);
	}
}

function newArray(e) {
	clear();

	for (let i = 1; i <= ARRAY_SIZE.value; i++) {
		let arrayBar = ARRAY_BARS.appendChild(document.createElement("div"));

		arrayBar.classList.add("array-bar");

		randomBarHeight = Math.floor(Math.random() * (500 - 5 + 1)) + 5;

		arrayBar.style.height = randomBarHeight.toString() + "px";

		COPY_ARRAY_BARS.push(randomBarHeight);
	}
}
