var clickHere = document.getElementsByTagName("button")[0];
var logoOver = document.getElementsByClassName("logoname")[0];
var avatar = document.getElementsByClassName("avatar")[0];

function logoScale() {
	avatar.style.transform = "scale(1.5)";
	avatar.style.filter = "saturate(100%)";
}

function logoScaleNull() {
	avatar.style.transform = "";
	avatar.style.filter = "";
}

// Listens for click on button element as defined by variable clickHere
// and returns an alert box with text string

clickHere.addEventListener("click", function() {
	alert("This is a test of the addEventListener event click")
})

// Listens for mouse enter and leave on logoname class as defined by
// variable logoOver and changes scale and saturation on avatar class
// with functions logoScale and logoScaleNull

logoOver.addEventListener("mouseenter", logoScale);

logoOver.addEventListener("mouseleave", logoScaleNull);