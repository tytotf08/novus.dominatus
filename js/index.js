// by TytoTF08
// Default scripting
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
function start() {
	console.log("page loaded");
	var objProVerbs = [
		"Be one with your fellow man and men, for together you are a force of reckoning.",
		"Victory is not to survive a massacre, but rather to massacre the enemy and <em>not</em> let them survive.",
		"Capitalism - a double edged sword.",
		"Poweria is not the state of power, but the closest imitation to it us humans can conjure up.",
		"You shan't not lose, but instead win.",
		"People don't see what you actually are, but what you try to be.",
		"The confines of society do not exist, Capitalism decrees.",
		"Achieving Poweria brings you the most success in a Capitalist world.",
		"Communism is the Satan of Economical states.",
		"Love everybody, for you are all brothers.",
		"Be a good person; you will be part of a good world."
	];
	var proverbEl = objProVerbs[Math.floor(Math.random()*objProVerbs.length)];
	document.querySelector("#quote").innerHTML += proverbEl;
}
window.onload = start;

