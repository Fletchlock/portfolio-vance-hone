const clickHere = document.getElementsByTagName("button")[0];
const logoOver = document.getElementsByClassName("logoname")[0];
const avatar = document.getElementsByClassName("avatar")[0];

const logoScale = () => {
	avatar.style.transform = "scale(1.5)";
	avatar.style.filter = "saturate(100%)";
}

const logoScaleNull = () => {
	avatar.style.transform = "";
	avatar.style.filter = "";
}

// Listens for click on button element as defined by const clickHere
// and returns an alert box with text string

clickHere.addEventListener("click", function() {
	alert("This is a test of the addEventListener event click")
})

// Listens for mouse enter and leave on logoname class as defined by
// const logoOver and changes scale and saturation on avatar class
// with functions logoScale and logoScaleNull

logoOver.addEventListener("mouseenter", logoScale);

logoOver.addEventListener("mouseleave", logoScaleNull);