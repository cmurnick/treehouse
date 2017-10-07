"use strict";


const dom = require('./dom');

let badges = [];


$.ajax({method: 'GET', url:`https://teamtreehouse.com/caitlinmurnick.json`}).done((data) => {
	badges = data.badges;
	dom.createDomString(badges);
	
}).fail((error) => {
	console.log(error);
});



module.exports = {};