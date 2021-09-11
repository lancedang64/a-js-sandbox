// Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.
// After you do it, such code should work:
'use strict ';

let f = function () {
	console.log(`Hello! The f prototype atm is: ${f.__proto__} `);
};

function defer(ms) {
	const start = Date.now();
	while (Date.now() - start < 1000) {}
	this();
}

const deferProto = {
	defer,
};
// won't work because these does not exist! (only exist as Object.prototype and so on...)
// f.prototype.defer = defer;
// f.prototype = defer;
//----------------------------------------

// will work
// set property defer of f prototype (which is Function.prototype) (discouraged unless for polyfilling)
f.__proto__.defer = defer;
console.log('f.__proto__.defer = defer');
console.log(
	'f.__proto__ === Function.prototype ',
	f.__proto__ === Function.prototype
); // true
console.log('f.__proto__ ', f.__proto__);
f.defer(1000); // shows "Hello!" after 1 second

f = function () {
	console.log(`Hello! The f prototype atm is: ${f.__proto__} `);
};
// set f prototype to be object deferProto
f.__proto__ = deferProto;
console.log('\nf.__proto__ = deferProto');
console.log(
	'f.__proto__ === Object.prototype ',
	f.__proto__ === Object.prototype
); // false cause should be deferProto
console.log('f.__proto__ === deferProto ', f.__proto__ === deferProto); // true
console.log('f.__proto__ ', f.__proto__);
f.defer(1000); // shows "Hello!" after 1 second

// add to Function.prototype (discouraged unless for polyfilling)
Function.prototype.defer = function (ms) {
	setTimeout(this, ms);
};
f = function () {
	console.log(`Hello! The f prototype atm is: ${f.__proto__} `);
};
f.defer(1000);
