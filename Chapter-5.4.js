// Chapter - 5.4 (Practice Problems)

// 1. Create an array  of numbers and take input from the user to old numbers to this array.
let arr = [1, 2, 3, 4, 5];
let a = prompt("Enter a number");
a= Number.parseInt(a);
arr.push(a);
console.log(arr); 

//Keep adding numbers to the array in 1 until 0 is added to the array.
let number = [6, 7, 8, 9, 10];
let a;
do{
        a = prompt("Enter a Number")
        a= Number.parseInt(a);
        number.push(a);
}while (a != 0);
        console.log(number);

let a = [1, 2, 10, 8, 30, 40]
let n = a.filter((x)=>{
        return x % 10==0
})
console.log(n)

// Create an array of square of given numbers.
let b = [1, 2, 10, 8, 30, 40]
let m = b.map((x)=>{
        return x * x
})
console.log(m)

// Use reduce to calculate factorial of a given number from an array of first (n natural whose factorial needs to be calculated).
let c = [1, 5, 6, 8, 12]
let o = c.reduce((x1, x2)=>{
        return x1 * x2
})
console.log(o)