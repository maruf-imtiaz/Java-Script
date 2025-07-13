// Chapter - 5.1 Arrays 
// Arrays are variables which can hold multiple values.

let marks = [71, 82, 39, 95]; // Array of numbers
marks[4] = 40; // Adding a new element at index 5
marks[3] = 100; // Updating the element at index 4
console.log(marks); // Output: [71, 82, 39, 95, <1 empty item>, 40]
// Arrays with for loops
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]); // Output each element in the array
}


// Array Methods
let num = [1, 2, 3, 4, 5]; 
let b = num.toString(); // Convert array to string
console.log(b); // Output: "1,2,3,4,5"

let c = num.join(" - "); // Join array elements with a separator
console.log(c); // Output: "1 - 2 - 3 - 4 - 5"

let d = num.pop(); // Remove the last element from the array
console.log(num); // Output: [1, 2, 3, 4]
console.log(num, d); // Output: "[1, 2, 3, 4] 5"

num.push(6); // Add a new element to the end of the array
console.log(num); // Output: [1, 2, 3, 4, 6]

let e = num.shift(); // Remove the first element from the array
console.log(e); // Output: 1
console.log(num); // Output: [2, 3, 4, 6]       
console.log(num, e); // Output: "[2, 3, 4, 6] 1"

let f = num.unshift(10); // Add a new element to the beginning of the array
console.log(num); // Output: [10, 2, 3, 4, 6]


// Array Operations
let numbers = [6, 7, 8, 9, 10];
let g = delete numbers[2]; // Delete the element at index 2
console.log(g); // Output: true (indicates successful deletion)
console.log(numbers, g); // Output: "[6, 7, <empty item>, 9, 10] true"

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
let newArray = a1.concat(a2, a3); // Concatenate multiple arrays
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr = [52, 16, 78, 60, 45];
let sortedArray = arr.sort(); // Sort the array in ascending order
console.log(sortedArray); // Output: [16, 45, 52, 60, 78]



