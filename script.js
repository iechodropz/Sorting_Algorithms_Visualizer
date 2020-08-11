const ARRAY_BARS = document.getElementById("array-bars-container");
const ARRAY_SIZE = document.getElementById("array-size");
const NEW_ARRAY = document.getElementById("new-array");
const ALGORITHM = document.getElementById("algorithm");
const SORT = document.getElementById("sort");

NEW_ARRAY.addEventListener("click", newArray);
ARRAY_SIZE.addEventListener("input", adjustArraySize);
SORT.addEventListener("click", beginSorting);

let COPY_ARRAY_BARS = [];

start();

function adjustArraySize(e) {
	arraySize = e.target;

	clear();

	for (let i = 0; i < arraySize.value; i++) {
		let arrayBar = ARRAY_BARS.appendChild(document.createElement("div"));

		arrayBar.classList.add("array-bar");

		randomBarHeight = Math.floor(Math.random() * (500 - 5 + 1)) + 5;

		arrayBar.style.height = randomBarHeight.toString() + "px";

		COPY_ARRAY_BARS.push(randomBarHeight);
	}
}

function beginSorting() {
	if (ALGORITHM.value === "Selection Sort") {
		selectionSort(COPY_ARRAY_BARS);
	}
}

function clear() {
	COPY_ARRAY_BARS = [];

	while (ARRAY_BARS.firstChild) {
		ARRAY_BARS.removeChild(ARRAY_BARS.firstChild);
	}
}

function newArray() {
	clear();

	for (let i = 1; i <= ARRAY_SIZE.value; i++) {
		let arrayBar = ARRAY_BARS.appendChild(document.createElement("div"));

		arrayBar.classList.add("array-bar");

		randomBarHeight = Math.floor(Math.random() * (500 - 5 + 1)) + 5;

		arrayBar.style.height = randomBarHeight.toString() + "px";

		COPY_ARRAY_BARS.push(randomBarHeight);
	}
}

async function selectionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		let minElementIndex = i;

		ARRAY_BARS.childNodes[i].style.backgroundColor = "blue";

		for (let j = i + 1; j < array.length; j++) {
			ARRAY_BARS.childNodes[j].style.backgroundColor = "red";

			if (array[j] < array[minElementIndex]) {
				minElementIndex = j;
			}

			await sleep(5);

			ARRAY_BARS.childNodes[j].style.backgroundColor = "white";
		}

		let temp = array[i];
		array[i] = array[minElementIndex];
		ARRAY_BARS.childNodes[i].style.height = array[minElementIndex].toString() + "px";
		array[minElementIndex] = temp;
		ARRAY_BARS.childNodes[minElementIndex].style.height = temp.toString() + "px";

		ARRAY_BARS.childNodes[i].style.backgroundColor = "white";
	}
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function start() {
	for (let i = 0; i < ARRAY_SIZE.value; i++) {
		let arrayBar = ARRAY_BARS.appendChild(document.createElement("div"));

		arrayBar.classList.add("array-bar");

		randomBarHeight = Math.floor(Math.random() * (500 - 5 + 1)) + 5;

		arrayBar.style.height = randomBarHeight.toString() + "px";

		COPY_ARRAY_BARS.push(randomBarHeight);
	}
}
