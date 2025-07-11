// Chapter - 4.3  Practice Set

// 1. What will the following print in JavaScript? console.log("Mar\.length");
let str= "Mar\"u";
console.log(str.length);

// 2. Explore the includes start with & ends with functions of a string.
const sentence =" Hello, welcome to the world of JavaScript!";
const word = "JavaScript";
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} present in the sentence.`);

// 3. Write a program to convert a given string to lowercase and uppercase.
let nam = "Maruf";
console.log(nam.toLowerCase()); 
console.log(nam.toUpperCase());

// 4. Extract the amount out of this string "Please pay $5000 to complete the transaction."
let transaction = "Please pay $5000 to complete the transaction.";
let amount = transaction.slice("Please pay ".length, transaction.indexOf(" to complete the transaction."));
console.log(amount);

// 5. Try to change 4th Character of a string.
let friend = "Jubair";
console.log(friend.length);
console.log(friend.replace(friend[3], 'o')); 


