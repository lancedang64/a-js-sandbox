// Add toString to the dictionary
// importance: 5
// There’s an object dictionary, created as Object.create(null), to store any key/value pairs.
// Add method dictionary.toString() into it, that should return a comma-delimited list of keys.
// Your toString should not show up in for..in over the object.
// Here’s how it should work:

// let dictionary = Object.create(null, {
// 	toString: {
// 		// define toString property
// 		value() {
// 			// the value is a function
// 			return Object.keys(this).join();
// 		},
// 	},
// });

// your code to add dictionary.toString method (another way)
let dictionary = Object.create(null);
Object.defineProperty(dictionary, 'toString', {
	value() {
		// the value is a function
		return Object.keys(this).join();
	},
});

// add some data
dictionary.apple = 'Apple';
dictionary.__proto__ = 'test'; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (let key in dictionary) {
	console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log('\n', dictionary.toString()); // "apple,__proto__"
// alert(dictionary); when used in browser, dictionary automatically calls toString method
