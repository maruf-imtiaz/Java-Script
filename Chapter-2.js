// Chapter-2.1: Expressions and Conditionals
//Using logical operators to find whether the age of a person lies between 10 and 20?
let age = prompt("What is your age?");
if (age >= 10 && age <= 20) {
    console.log("Your age lies between 10 and 20.");
}
else {
    console.log("Your age does not lie between 10 and 20.");
}
//Demonstrate the use of switch case statements in JavaScript.
let a= prompt("What is your age?");
switch (a){
    case '12':
      console.log("Your age is 12.");
        break; // Break statement to exit the switch case
    case '13':
        console.log("Your age is 13.");
        break; 
    case '14': 
        console.log("Your age is 14.");
        break;
    case '15':
        console.log("Your age is 15.");
        break;
    default:
        console.log("Your age is not Special.");
        break;
}

//Write a JavaScript program to find whether a number is divisible by 2 and 3.
let num= prompt("What is your number?");
num= Number.parseInt(num);
if (num % 2 === 0 && num % 3 === 0) {
    console.log("The number is divisible by both 2 and 3.");
}
else {
    console.log("The number is not divisible by both 2 and 3.//");
}

// Write a JavaScript program to find whether a number is Divisible by either 2 or 3.
let number = prompt("What is your number?");
number = Number.parseInt(number);
if (number % 2 === 0 || number % 3 === 0) {
    console.log("The number is divisible by either 2 or 3.");
}
else {
   console.log("The number is not divisible by either 2 or 3.");
}

//Print "you can Drive" or You cannot Drive" based on age being greater than 18 using ternary operator.
let aage = 19
let b = aage> 18? "You can Drive" : "You cannot Drive";
console.log(b) 
let bage = 17
let c = bage > 18 ? "You can Drive" : "You cannot Drive";
console.log(c);
