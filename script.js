const ARRAY_BARS = document.getElementById("array-bars-container");

for (let i = 1; i <= 100; i++) {
	let arrayBar = ARRAY_BARS.appendChild(document.createElement("div"));

	arrayBar.classList.add("array-bar");

	randomBarHeight = Math.floor(Math.random() * (500 - 5 + 1)) + 5;

	arrayBar.style.height = randomBarHeight.toString() + "px";
}
