var proVerbs;
proVerbs = [
	"Be happy, because life is very short.",
	"To win is not to not lose, but to make your enemy lose."
];
var selectProverb = function(how) {
	if (how == "random") {
		var proverb = proVerbs[Math.floor(Math.random() * proVerbs.length)];
		console.log(proverb);
	}
}
var start = function() {
	var redirectHome = function() { location.replace("/"); }
	if (document.querySelector("body").innerHTML !== "") {
		console.log("Welcome to Novus Dominatus.");
	} else {
		alert("this page has no content, and is therefore not legible for publicity. now redirecting you to the homepage...");
		setTimeout(1000, redirectHome);
	}
};
window.onload = start;