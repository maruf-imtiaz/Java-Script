// Chapter-3 Practice problem

// 1. Write a program to print the marks of some students in a subject using for loop. 
/*let marks = {
    Maruf: 65,
    Lion: 90,
    Rifa: 85,
    Brishti: 87,
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// 2. Write the program of Question 1 using for in loop.
for(let i in marks){
    console.log("The marks of " + i + " are " + marks[i]);
}

// 3. Write a program to print "try again" until the user enters the correct number using while loop.
let correctNumber = 7;
let userNumber;
while(userNumber !== correctNumber){
    userNumber = parseInt(prompt("Enter a number:"));
    if(userNumber !== correctNumber){
        console.log("Try again");
    }
}
console.log("You entered the correct number: " + userNumber);*/

//write a function to find mean of 5 numbers using array function
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
const mean = (a,b,c,d,e) => {
    return ((a + b + c + d + e) / 5);
}
console.log("The mean of the numbers is: " + mean(a, b, c, d, e));
