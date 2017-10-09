"use strict";

const dom = require('./dom');

// $("#all").mouseover(() => {
// 	console.log("Shit");
// 	$("#all").toggleClass("big");
	
// });

// $('body').on("mouseenter", '.whole', (event) => {
// 	$(event.target).addClass("big");
// });

$('body').on("click", '.whole', (event) => {
	$(event.target).parentsUntil(".crap").toggleClass("big");
});
// $("body").on("mouseleave", '.whole', (event) => {
// 	$(event.target.parent).removeClass("big");
// });



module.exports = {};