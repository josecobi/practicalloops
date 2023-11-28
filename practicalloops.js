// Loop through all numbers from 1 to 100
// console.log("\n>>>>>>>>>>>>>>>>Loop through all numbers from 1 to 100<<<<<<<<<<<<<<<<<<<");
// for( let i = 1 ; i <= 100; i++){
//     console.log(i);
// }

//If a number is divisible by 3, log “Fizz.”
console.log("\n>>>>>>>>>>>>>>>>If a number is divisible by 3, log “Fizz<<<<<<<<<<<<<<<<<<<");
for( let i = 1 ; i <= 100; i++){
    if(i % 3 == 0){
        console.log("Fizz")
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else if (i % 3 == 0 && i % 5 == 0){
        console.log("Fizz Buzz");
    }
}