//! ========== Number ==========
// Defining number explicitly using Number object
const balance = new Number(600)
// console.log(balance)
// console.log(balance.toString(), typeof balance.toString())
// console.log(balance.toFixed(2))

const num = 60.50
// console.log(num.toPrecision(2)) // Returns string 

//! ========== Math ==========
// console.log(Math)
// console.log(Math.abs(-5))
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.3))
// console.log(Math.floor(4.3))
// console.log(Math.min(4,3,6,8))
// console.log(Math.max(4,3,6,8))
// console.log(Math.random()) // Range -> 0 to 1 (Default)
// console.log(Math.floor(Math.random() * 10) + 1)  // Range 1 to 10

const min = 10;
const max = 20;
// Range from 10 to 20
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
