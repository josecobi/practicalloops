// Part1: Fizz Buuzz
//Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// console.log("\n>>>>>>>>>>>>>>>>>>>>Fizz Buzz<<<<<<<<<<<<<<<<<<<<<<<<<<<")
// for( let i = 1 ; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("Fizz Buzz");
//     }
//     else if(i % 3 == 0){
//         console.log("Fizz")
//     }
//     else if(i % 5 == 0){
//         console.log("Buzz");
//     }
   
//     else {
//         console.log(i);
//     }
// }

//Part 2: Prime Time
// let n = 23;
// debugger;
// whileTrueLoop: while (true) {
//     n++;
//     for (let j = 2 ; j <= n ; j++){
//         if(j === n){
//             console.log(n + " is prime.");
//             break whileTrueLoop;
//         }
//         else if(n % j === 0){
//             break;
//         }
//     }  
// }

//Part 3: Feeling Loopy
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.
debugger
const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cell1 = ""; 
let cell2 = ""; 
let cell3 = "";
let cell4 = "";


let commaCounter = 0;
for (let k of csvString){
    if(k === "\n"){
        console.log(`${cell1}, ${cell2}, ${cell3}, ${cell4}`)
        commaCounter = 0;

    }
    else if(k === ","){
        commaCounter++;
    }
    
    if(commaCounter === 0){
        cell1 += k;
    }
    else if(commaCounter === 1 && k !== ","){
        cell2 += k;
    }
    else if(commaCounter === 2 && k !== ","){
        cell3 += k;
    }
    else if(commaCounter === 3 && k !== ",") {
        cell4 += k;
    }  
}