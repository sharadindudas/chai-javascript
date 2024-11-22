const user = {
    username: "Remo",
    age: 23,
    welcomeMessage: function () {
        console.log(`Welcome to the website ${this.username}!`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Harsh"
// user.welcomeMessage()

//! Context -> values and the variables it holds inside it and that we are changing and access it using "this" keyword

// console.log(this)

/*
Here in nodejs environment, this will be empty object as we don't have access to window object
(JS Engine in server)
but in browser we have access to window which is a global object 
(JS Engine in browser)
*/

// function chai(){
//     let username = "Remo";
//     // console.log(this)
//     console.log(this.username); // Only works on object not on functions
// }

// const chai = function(){
//     console.log(this);
// }

const chai = () => {
    let username = "Remo";
    console.log(this);
}

// chai()

//! arrow function (explicit return)
// const addTwo = (a,b) => {
//     return a+b;
// }

//! arrow function with implicit return 
// const addTwo = (a, b) => (a + b);

// const addTwo = (a, b) => ({ username: "Remo" });

// console.log(addTwo(10, 20))

