// Chapter - 4: Strings
// string with double quotes
let name= "Maruf"; 
console.log(name); // Output: Maruf
console.log(name.length); // Output: 5
console.log(name[0]); // Output: M 
console.log(name.toUpperCase()); // Output: MARUF

// string with single quotes
let friend = 'Jubair'; 
console.log(friend);   // Output: Jubair
console.log(friend.length); // Output: 6
console.log(friend[2]); // Output: b
console.log(friend.toLowerCase()); // Output: jubair

// Templlate literals
let boy1 = "Maruf";
let boy2 = "Jubair";
let message = `My name is ${boy1} and my friend's name is ${boy2}.`;
console.log(message); // Output: My name is Maruf and my friend's name is Jubair.

// Escape Sequence Characters
let text = "He said, \"Hello, how are you?\"";
console.log(text); // Output: He said, "Hello, how are you?"