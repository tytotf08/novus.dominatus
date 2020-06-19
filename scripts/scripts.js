var start = function(){
	var redirectHome = function() {
		location.replace("/");
	}
	if(document.querySelector("body").innerHTML != "") {
		console.log("Welcome to Novus Dominatus.");
	} else {
		alert("this page has no content, and is therefore not legible for publicity. now redirecting you to the homepage...")
		setTimeout(1000, redirectHome)
	}
};
window.onload = start;