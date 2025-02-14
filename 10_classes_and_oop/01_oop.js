//! Object literal => Literally a object
const user = {
    username: "sharadindu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from db");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
};
// console.log(user.username);
// console.log(user["loginCount"]);
// user.getUserDetails();

// this => Referring to the current context
// console.log(this); // this on browser provides window object globally but on node.js it gives empty object {}

//! new => calling the constructor function to use one object literal to create new instances of objects and also to refer to new context (this)

// function User(username, loginCount, isLoggedIn) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;
//     this.greetings = function () {
//         return `Hello ${this.username}`;
//     };
//     return this;
// }
// const userOne = new User("remo", 16, true);
// const userTwo = new User("ram", 11, false);
// console.log(userOne);
// console.log(userTwo);

// What happens we use "new" keyword
// 1. empty object (this) will be created
// 2. Values are pushed inside the "this" object
// 3. "this" object is returned automatically

// console.log(userOne.greetings());
// console.log(userTwo.greetings());

// console.log(userOne.constructor); // Referring to the constructor function (User)

function User(username, email) {
    this.username = username;
    this.email = email;
    return this;
}

User.prototype.greetings = function(){
    return `Hello ${this.username}`
}

const userOne = new User("Remo", "remo@gmail.com");
const userTwo = new User("Ramu", "ramu@gmail.com");
