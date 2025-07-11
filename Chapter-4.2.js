// Chapter - 4.1 Methods of Strings
let name = "Maruf";
console.log(name); // Output: Maruf
console.log(name.slice(2,4)); // Output: ru
console.log(name.slice(2)); // Output: ruf
console.log(name.replace("Maruf", "Pial")); // Output: Pial
console.log(name.replace("M", "P")); // Output: Paruf

let friend = "Jubair";
console.log(name.concat(" is a Friend of ", friend)); // Output: Maruf is a Friend of Jubair
console.log(friend.concat(" is a Friend of ", name)); // Output: Jubair is a Friend of Maruf

let friend2 = "      Elme      ";
console.log(friend2); // Output:       Elme
console.log(friend2.trim()); // Output: Elme