"use strict";


const dom = require('./dom');

let cats = [];

const catsLoad = (catValue) => { 
$.ajax({url:`https://teamtreehouse.com/caitlinmurnick.json`}).done((data) => {
	cats = data.cats;
	dom.createDomString(cats);
	
}).fail((error) => {
	console.log(error);
});
};



module.exports = {catsLoad};