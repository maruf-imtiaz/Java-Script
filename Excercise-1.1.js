//Guess the number
let a = Math.random()*100;
a = Number.parseInt(a);
let inp;
let score = 100;
while (inp !== a){
   score = score - 1;
   inp = prompt("Enter a number: ");
   if (inp == a){
    console.log("Congratulation...!!! You guess the correct number.");
    console.log(`you guess the correct number in ${100 - score} chances`);
   }
   else if (inp > a && inp < 100){
    console.log("Your number is greater than the actual number");
   }
   else if (inp < a && inp > 100){
    console.log("Your number is smaller than the actual number");
   }
   else {
    console.log("Enter number between 1-100");
   }
}

