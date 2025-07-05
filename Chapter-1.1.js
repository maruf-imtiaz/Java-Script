//Chapter 1.1 
 
// Create a variable type string and try to add a number to it
let a= "Maurf" //string variable
let b= "34"
console.log(a+b); //output will be Maurf34 because it concatenates the string and number variables
//Use type of operator to find the data type of the string and number variable
console.log(typeof a+b); //output will be string34
console.log(typeof (a+b)); //output will be string
//Create a const object in JavaScript. Can you change it to hold a number later?
const c={
    name: "Jubair",
    age: 22              //Now if I type let c= "Maruf"; it will throw an error because const cannot be reassigned. 
}                        //So the answer will be no, you cannot change a const object to hold a number later.
console.log(c);          //output will be { name: 'Jubair', age: 22 }
//Try to add a new key in the const object. Were you able to do it?
c['name'] = "Maruf"; //Yes, you can add a new key in the const object.
c['age'] = 23;       //Yes, you can also change the value of the existing key in the const object.
console.log(c);      //output will be { name: 'Maruf', age: 23 }
//Write a JavaScript program to create a word meaning dictionary of 5 words.
const dictionary = {
Persistence: "The quality of continuing steadily despite problems or difficulties.",
Focus: "Concentration on a particular task or goal.",
Discipline: "The practice of training oneself to follow rules or a routine to achieve success.",
Resilience: "The ability to recover quickly from difficulties or setbacks.",
Belive: "To have faith or confidence in yourself",
}
console.log(dictionary); //output will be the dictionary object with 5 words and their meanings
console.log(dictionary.Persistence); //output will be "The quality of continuing steadily despite problems or difficulties."
console.log(dictionary['Focus']); //output will be "Concentration on a particular task or goal."

//We learned about variables, data types, const objects, and how to create a dictionary in JavaScript.
// variables - (let, const)
// data types - (string, number, boolean, object, array)
// console.log(); used to print output 
