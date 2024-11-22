// How the data is stored in the memory and accessed on basis of that, data is categories into two parts Primitive and Non primitive. (call by value and call by reference)

// Primitive Datatype (call by value)
// Here the copy of the value is provided not the original value 

// NNSSBBU - null(empty), Number, String, Symbol (to make any value unique), Boolean, BigInt, undefined(variable declared but no value is assigned yet)

const score = 100
const scoreValue = 80.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123")
const number = BigInt(230435356);
// console.log(id, anotherId)
// console.log(id === anotherId)

//! Symbol are always unique values and even if we pass the same values in Symbol, they will still not be equal/same. 

// Non primitive Datatype (call by reference)
// Here the original value is provided as we have the access to the memory location directly

// Objects, Array, Functions

//! To master js we need to know Objects and Browser Events :)

//! JS is dynamically typed language as we don't need to define its type

const heroes = ["Superman", "Batman", "Spiderman"]
let myObj = {
    name : "Remo",
    age : 23
}

const myFunction = function(){
    console.log("Hello world !")
}
// console.log(typeof myFunction)
// console.log(typeof number)

//! typeof null -> object 
//! typeof function -> function object


// ****************** Memory in Javascript ****************

// Stack (Primitive), Heap (Non-Primitive)

let firstName = "Sharadindu"
let anotherName = firstName
anotherName = "Remo"

// console.log(firstName, anotherName)

let userOne = {
    name : "Remo",
    age : 23,
    email : "remo@gmail.com"
}

let userTwo = userOne
userTwo.name = "Rimo"
// console.log(userOne, userTwo)