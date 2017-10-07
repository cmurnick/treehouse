"use strict";


const badges = require('./badges');

const createDomString = (badgez) => {
	let badgeString = '';
	
    for(let i=0; i<badgez.length; i++){
        let newBadge = "";
        newBadge +=	`<div class="cat-card thumbnail col-sm-6 col-md-3">`;
		newBadge +=	  `<div class="image-container ">`;
		newBadge +=	    `<img src="${badgez[i].icon_url}">`;
		newBadge +=	  `</div>`;
		newBadge +=	  `<div class="description-container">`;
		newBadge +=	    `<h3> ${badgez[i].name} </h3>`;
		newBadge +=	  `</div>`;
		newBadge +=	`</div>`;

        badgeString += newBadge;
    }
    printToDom(badgeString);
};


const printToDom = (string) => {
	$('#diffBadges').html(string);
};

module.exports = {createDomString};

