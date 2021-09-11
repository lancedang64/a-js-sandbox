// Add to the prototype of all functions the method defer(ms), that returns a wrapper, delaying the call by ms milliseconds.
// Here’s an example of how it should work:

// Function.prototype.defer = function (ms) {
// 	const start = Date.now();
// 	while (Date.now() - start < ms) {}
// 	return this;
// };

Function.prototype.defer = function (ms) {
	let f = this;
	return function (...args) {
		setTimeout(() => f.apply(this, args), ms);
	};
};

function f(a, b) {
	console.log(a + b);
}

f.defer(1000)(1, 2); // shows 3 after 1 second
// Please note that the arguments should be passed to the original function.
