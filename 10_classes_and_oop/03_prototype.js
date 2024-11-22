// let myName = "hitesh     "
// let mychannel = "chai     "
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Object.assign() -> These are factory functions which are available by default

/* 
    So we can provide some custom function to the Object's prototype as function/array/string everyone has access to the Object's prototype
*/

Object.prototype.remo = function(){
    console.log(`Remo is present in all objects`);
}

/* 
    Now we have a global method/function which we can access from Array/Function/String as they have the access to the Object's prototype
*/

// heroPower.remo();
// myHeros.remo();

// Lets share the power to Array
Array.prototype.heyRemo = function(){
    console.log(`Remo says Hello`)
}

// myHeros.heyRemo()
// heroPower.heyRemo(); -> This will throw error as we gave the custom function to the Array's prototype and not everyone else unlike we gave the power to Object's prototype

// inheritance

/*
    Inheriting the same properties from some other object
*/
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);
// console.log(TeachingSupport.makeVideo)

// Let's make a custom function which trims the blank spaces of any string and counts the length of the string provided 

const username = "Remo       ";

String.prototype.truelength = function(){
    console.log(`True length of the string is ${this.trim().length}`)
}

username.truelength()
"Sharadindu              ".truelength();