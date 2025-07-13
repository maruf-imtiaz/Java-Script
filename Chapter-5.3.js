// Chapter - 5.3 Map, Filter and Reduce

// Array Map Method
let arr = [45, 4, 9, 16, 25];
let a = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value + 1; // Increment each element by 1
})
console.log(a);

// Array Filter Method
let arr2 = [ 56, 32, 45, 67, 89, 12, 34 ];
let a2 = arr2.filter((a)=>{
    return a<60;
})
console.log(a2);

// Array Reduce Method
let arr3 = [ 26, 32, 45, 67, 89, 12, 34 ];
let a3 = arr3.reduce((M1, M2)=>{
    return M1 + M2;
})
console.log(a3);

let arr4 = [ 26, 32, 45, 67, 89, 12, 34 ];
const reduce_func = (M3, M4) => {
    return M3 + M4;
}
let a4 = arr4.reduce(reduce_func);
console.log(a4);