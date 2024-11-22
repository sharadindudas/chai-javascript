//! Object Literal - literally making a object

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails(){
        // console.log(`Username is ${this.username} and has logged in ${this.loginCount} times.`);
        // console.log(this)
    }
}

// user.getUserDetails();
// console.log(this)

// const promiseOne = new Promise()
// const date = new Date()

//! new keyword is constructor function as it helps to create multiple instances (copy) of the object from a single object literal

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this; //! it implicitly returns this whatsoever
}


// const userOne = User("Remo", 12, true)
// const userTwo = User("Sharadindu", 11, false) //! This overrides the previous values so to avoid the overriding the prev values we can use "new" keyword to make a copy of an object and make multiple objects using that structure
// console.log(userOne)

const userOne = new User("Remo", 12, true)
const userTwo = new User("Sharadindu", 11, false)
// console.log(userOne, userTwo)

/* 
Q. What happens when new keyword is used ?
- empty Object is created (this)
- constructor function is called (packs the arguments and all and gives it to us)
- the values are injected from the arguments and all to the "this" object
- returns the this object automatically
*/

console.log(userOne.constructor) // Reference of its own function