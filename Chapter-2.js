//Chapter 2 - Expressions & Conditionals
// A fragments of code that produces a value is called an expression. Every Value Written literally is an expression for ex: 77; or "Maruf"

//Operators in JavaScript

//1. Arithmetic Operators (+,-,*,/,**,%,++,--)
let a=45;
let b=4;
console.log("a+b", a+b); //Addition
console.log("a-b", a-b); //Subtraction 
console.log("a*b", a*b); //Multiplication
console.log("a/b", a/b); //Division
console.log("a**b", a**b); //Exponentiation
console.log("a%b", a%b); //Modulus 
console.log("a++ =", a++); //Increment
console.log("a-- =", a--); //Decrement

//2. Assignment Operators (=, +=, -=, *=, /=, %=, **=)
let c = 10;
let d = 20;
let e = 30;
let f = 40;
let g = 50;
let h = 60;
c += 5; // c = c + 5
d -= 2; // c = c - 2
e *= 2; // c = c * 2
f /= 2; // c = c / 2
g %= 3; // c = c % 3
h **= 2; // c = c ** 2
console.log(c); // Ans:15
console.log(d); // Ans:18
console.log(e); // Ans:60
console.log(f); // Ans:20
console.log(g); // Ans:2
console.log(h); // Ans:3600

//3. Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
let x = 10;
let y = 10;
let z = 12;
let w = "10";
let v= 12; 13;
console.log("x == y", x == y); // true, equal value
console.log("x === y", x===y); // true, equal value and type
console.log("x != z", x!=z); // true, not equal value
console.log("x !== w", x!==w); // true, not equal value or type
console.log("z > x", z>x); // true, z is greater than x
console.log("v >= z", v>+z); // true, v is greater than or equal to z
console.log("z !== w", z!==w); // true, different types
console.log("x === w", x === w); // false, different types
console.log("z < y", z<y); // false, z is not less than y

//4. Logical Operators (&&, ||, !)
let p=10;
let q=20;
//truth table for And (&&) operator
console.log("p < q && p==10", p < q && p == 10); // true, both conditions are true
console.log("p > q && p == 10", p > q && p == 10); // false, first condition is false
//truth table for Or (||) operator
console.log("p < q || p == 10", p < q || p == 10); // true, at least one condition is true
console.log("p > q || p == 10", p > q || p == 10); // false, both conditions are false
//truth table for Not (!) operator
console.log("! (p < q)", !(p < q)); // false, negation of true is false
console.log("! (p > q)", !(p > q)); // true, negation of false is true


