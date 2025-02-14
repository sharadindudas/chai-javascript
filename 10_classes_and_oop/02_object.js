//! Javascript has prototypal behaviour => Prototype inheritance
// function multiplyBy5(num) {
//     return num * 5;
// }
// multiplyBy5.power = 2;
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

//! Function is also object and everything string, array, function has object as prototype and object points to null
const userOne = {
    name: "Sharadindu",
    age: 25
};

const userTwo = {
    hobby: "random",
    place: "kolkata"
};

userOne.__proto__ = userTwo;

function User(username, age) {
    this.username = username;
    this.age = age;
    return this;
}

User.prototype.greetings = function () {
    return `Hello ${this.username}`;
};

User.prototype.getAge = function () {
    return `${this.username} is ${this.age} years old`;
};

const remo = new User("remo", 25);
const sree = new User("sree", 26);
console.log(remo);
console.log(sree);

//! What actually happens when new keyword is called
// 1. Creates a new object
// 2. Sets the new object prototype to constructor function (User) prototype
// 3. Call the constructor function with context to the new object
// 4. Return the new object
// 5. Assigns the new object to the place where it was called

// const newObj = {}
// newObj.__proto__ = User.prototype
// User.call(newObj, "remo", 25)
// return newObj
// const remo = newObj
