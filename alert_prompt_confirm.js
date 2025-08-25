console.log(window);
console.log(document.body);
document.body.style.background = "lightgreen";
alert("Enter the value of a");
let a = prompt("Enter the value of a", "100");
a = parseInt(a);
alert("You enter a type of " + (typeof a));
let write = confirm("Do you want to write the value of a on the document?");
if (write){
    document.write(a);
    alert("Maruf Imtiaz Pial");
    location.href = "https://www.facebook.com/maruf.imtiaz.pial";
}
else{
    alert("you choose not to write the value of  a on the document");
}


