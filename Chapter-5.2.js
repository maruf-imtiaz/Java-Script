// Chapter - 5.2 Loops with Arrays

let num = [3, 25, 18, 7, 9, 12, 15, 20];
for (let i=0; i<num.length; i++){
    console.log(num[i]); // Output each element in the array
}

// For Each Loopk
num.forEach((element) => {
    console.log(element * element); // Output the square of each element
})

//Array.form
let name = "Maruf";
let arr = Array.from(name); // Convert string to array
console.log(arr); // Output: ["M", "a", "r", "u", "f"]

// for...of Loop
for (let i of num){
    console.log(i); // Output each element in the array
}

// for...in Loop
for (let i in num){
    console.log(num[i]); // Output each element in the array
}