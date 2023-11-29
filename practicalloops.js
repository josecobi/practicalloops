// Part1: Fizz Buuzz
console.log("\n>>>>>>>>>>>>>>>>>>>>Part 1:Fizz Buzz<<<<<<<<<<<<<<<<<<<<<<<<<<<")

for( let i = 1 ; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("Fizz Buzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz")
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
   
    else {
        console.log(i);
    }
}

//Part 2: Prime Time
console.log("\n>>>>>>>>>>>>>>>>>>>>Part 2: Prime Time<<<<<<<<<<<<<<<<<<<<<<<<<<<")

let n = 23;

whileTrueLoop: while (true) {
    n++;
    for (let j = 2 ; j <= n ; j++){
        if(j === n){
            console.log(n + " is prime.");
            break whileTrueLoop;
        }
        else if(n % j === 0){
            break;
        }
    }  
}

//Part 3: Feeling Loopy
console.log("\n>>>>>>>>>>>>>>>>>>>>Part 3: Feeling Loopy<<<<<<<<<<<<<<<<<<<<<<<<<<<")

const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let cell1 = ""; 
let cell2 = ""; 
let cell3 = "";
let cell4 = "";
let commaCounter = 0;

for (let k of csvString){
    if(k === "\n"){
        console.log(`${cell1}, ${cell2}, ${cell3}, ${cell4}`)
        commaCounter = 0;
        cell1 = ""; 
        cell2 = ""; 
        cell3 = "";
        cell4 = "";
    }
    else if(k === ","){
        commaCounter++;
        continue;
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