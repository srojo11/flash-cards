
var Basic = function(front, back){
	this.front = front;
	this.back = back;

}


var quest1 = new Basic("An elephant and a rhino is called ", "Elephino");
var quest2 = new Basic("A lion and a tiger is called ", "Tigerion");

console.log(quest1.front);
console.log(quest2.back);




module.exports = Basic;