//! falsy values
// false, "", 0, -0, BigInt(0n), null, undefined, NaN 

//! truthy values
// [], "0", "false", " ", {}, function(){}

const users = [];

// if(users.length === 0){
//     console.log("Array is Empty");
// }

const obj = {}

// if(Object.keys(obj).length === 0){
//     console.log("Object is Empty");
// }

//! Interesting 
// console.log(false == 0)
// console.log(false == "")
// console.log(0 == "")

// Nullish Coalescing Operator (??)
// The Nullish Coalescing Operator (???) is a logical operator that returns the right operand if the left operand is null or undefined; otherwise, it returns the left operand.

let val1 = null;
let val2 = 10;
let val3 = undefined;
let compare1 = val1 ?? val2;
let compare2 = val3 ?? val2;
// console.log(compare1)
// console.log(compare2)

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
