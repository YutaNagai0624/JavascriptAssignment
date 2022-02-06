// Bodlogo 1 
const numberOne = parseInt(prompt('Enter a natural number / Problem - 1: '));
let sum = 0;
for (let i = 1; i <= numberOne; i++) {
    sum += i;
}
document.getElementById("text-1").innerHTML = 'The sum of natural numbers: ' + sum 
// 
// Bodlogo 2 
const numberTwo = parseInt(prompt('Enter a number / Problem - 2: '));
let average = 0;
for (let i = 1; i <= numberTwo; i++) {
    average += i;
}
document.getElementById("text-2").innerHTML = 'The sum of natural numbers: ' + average / numberTwo
// 
// Bodlogo 3 
const table = parseInt(prompt("Enter a number / Problem - 3"));
var length = 10;

document.getElementById("text-3").innerHTML = "Multiplication table of "+ table
for(i=1; i <= length; i++)
 document.write("<br>"+i+" * "+table+" = " +(i * table));
// 
// Bodlogo 4
const limit = parseInt(prompt('Enter a limit: '));
const divisible = parseInt(prompt('Enter a divisible: '));

function countDivisibles(limit, divisible){
let counter = 0; 

for (let i = 1; i <= limit; i++)
    if (i % divisible == 0)
        counter++;
    return counter;
}
document.getElementById("text-4").innerHTML = "There is " + countDivisibles(limit, divisible) + " divisible numbers withing the given limit"
//  
   