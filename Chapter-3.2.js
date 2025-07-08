// Chapter - 3.1 Functions
// Function to calculate the sum of two numbers
function sum(x, y) {
    return (x + y);
}
let a = 5;
let b = 10;
console.log("The sum of a and b is: ",sum(a,b));

// Function to calculate the average of two numbers
function average(x, y) {
    console.log("Done") // This will print "Done" to the console
    return (x + y) / 2;
}
let c= 15;
let d = 25;
console.log("The average of c and d is: ",average(c,d));
console.log("The average of d and c is: ",average(d,c));
// Function to calculate the square of a number
function square(x) {
    return x * x;
}
let e = 4;
console.log("The square of e is: ",square(e));
// Function to calculate the square root of a number
function squareRoot(x) {
    return Math.sqrt(x);
}
let f = 16;
console.log("The square root of f is: ",squareRoot(f));
// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
let g = 5;
console.log("The factorial of g is: ",factorial(g));
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let h = 29;
console.log("Is h prime? ",isPrime(h));
// Function of String
function reverseString(str) {
    return str.split('').reverse().join('');
}
let str = "Hello, World!";
console.log("Reversed string is: ", reverseString(str)); // This will print "Reversed string is: !dlroW ,olleH"

// Function to convert a string to uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}
let lowerStr = "hello, world!";
console.log("Uppercase string is: ", toUpperCase(lowerStr)); // This will print "Uppercase string is: HELLO, WORLD!"

