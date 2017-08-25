var BasicCard = require("./BasicCard.js")

var Cloze = function(text, cloze){
	this.cloze = cloze;
	this.partial = text;
	this.fullText = text + cloze;
}

var quest1 = new Cloze("An elephant and a rhino is called ", "Elephino");
var quest2 = new Cloze("A lion and a tiger is called ", "Tigerion");



console.log(quest1.fullText);
console.log(quest1.cloze);
console.log(quest1.partial);


module.exports = Cloze;


