//! We can declare objects using two types : Literal and Constructor

// singleton -> Object literal (We can create only one instance of a object and that instance can be accessed globally.)
// non singleton -> constructor (Multiple instances of object can be done and the change made to one instance will not affect the other)

//! Object literals
const mySym = Symbol("symbolKey");

const user = {
    name : "Remo",
    age: 23,
    "my hobbies" : ["Piano","Coding","Drums"],
    [mySym] : "I am a Symbol"
}
// console.log(user.name);
// console.log(user["name"]);
// console.log(user["my hobbies"]);
// console.log(user[mySym]);

// user.name = "Sharadindu";
// Object.freeze(user); //! freezing the object
// user.name = "Remo";

user.greeting = function(){
    return "Hello User!";
}

user.greetingUser = function(){
    return `Hello ${this.name}!`;
}

// console.log(user.greeting());
// console.log(user.greetingUser());

