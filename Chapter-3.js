//Chapter-3 Loops & Functions 
// 1. Loops (For loop, While loop, Do While loop, For Each loop, For Of loop)

// 1.1 For loop example
for (let i = 0; i < 501; i++) {
    console.log("Love u " + i); // This will print "Love u" followed by the current value of i
    break; // This will stop the loop after the first iteration
}
// Program to add first n natural numbers
let sum = 0;
let n = prompt("Enter a number: ");
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first " + n + " natural numbers is: " + sum);  

let obj = {
    Maruf: 25,
    Brishty: 86,
    Lion: 90,
    Rifa: 88,
}
for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a]); // This will print the name and marks of each student in the object
} 
// 1.2 For of loop
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value); // This will print each value in the array
}
let str = "Maruf";
for (let char of str) {
    console.log(char); // This will print each character in the string
}
// 1.3 While loop
let i = 0;
while (i < 5) {
    console.log("Iteration " + i);
    i++;
}
// 1.4 Do-While loop
let j = 0;
do {
    console.log("Iteration " + j);
    j++;
}
while (j < 5);

// 1.5 For-Each loop
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number); // This will print each number in the array
});



