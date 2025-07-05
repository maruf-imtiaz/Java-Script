//Conditional Statements
//Sometimes we might have to execute a block of code based off some condition. For example a prompt might ask for the age of the user and if its greater than 18 display a special message.
// In JavaScript we have three forms of if....else statements.

// 1. if statement
let a = prompt("Enter your age:");
a = Number.parseInt(a); // Convert the input to a number
if (a > 18) {
    console.log("You are eligible to vote.");
}

// 2. if...else statement
let b = prompt("Enter your age:");
b = Number.parseInt(a); // Convert the input to a number
if (b > 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}

// 3. if...else if...else statement
let c = prompt("Enter your age:");
c = Number.parseInt(c); // Convert the input to a number
if (c > 18) {
    console.log("You are eligible to vote.");
}
else if (c === 18) {
    console.log("You are just eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}

// 4. Switch statement
const expr= 'Papayas';
switch (expr) {
    case 'Apples':
        console.log("Apples are $1.00 per pound.");
        break;
    case 'Bananas':
        console.log("You chose Bananas.");
        break;
    case 'Mangoes':
    case 'Guavas':
        console.log("Mangoes and Guavas are $2.89 per pound.");
        break;
    default:
        console.log("Unknown fruit.");
}

// JavaScript Ternary Operator
// The ternary operator is a shorthand for the if...else statement.
let age = prompt("Enter your age:");
age = Number.parseInt(age); // Convert the input to a number
console.log(age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.");