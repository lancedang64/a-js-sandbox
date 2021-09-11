// The difference between calls
// importance: 5
// Let’s create a new rabbit object:

function Rabbit(name) {
	this.name = name;
}
// This declare Function.prototype sayHi method
console.log('Rabbit.prototype before ', Rabbit.prototype);
Rabbit.prototype.sayHi = function () {
	console.log(this.name);
};
console.log('Rabbit.prototype ', Rabbit.prototype);
let rabbit = new Rabbit('Rabbit');

// These calls do the same thing or not?
// no, because

//The first call has this == rabbit, the other ones have this equal to Rabbit.prototype, because it’s actually the object before the dot.
// So only the first call shows Rabbit, other ones show undefined:

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
