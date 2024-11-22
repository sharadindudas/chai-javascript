/*
 Promise object is basically an object which receives a task in the queue and gives a response (may be success or failure) but it will give response and it won't be done instantly it may take some time (asynchronous operation) but it will definitely provide you the response and using then,catch,finally we basically consume the promise that we create

Eg : Access to the file from the system
     Requesting data from the DB
     Network calls
*/

// Promise 1
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async task 1 is completed")
        resolve()
    },1000);
})

promiseOne.then(function(){
    console.log("Async task 1 is consumed/resolved");
})

// Promise 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Async task 2 is consumed/resolved");
})

// Promise 3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username : "Remo", email : "remo@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// Promise 4
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Remo", password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(`Logged in as ${username}`)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("The promise is either resolved or rejected")
})

// Promise 5
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Remo", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//! async await:
// waits for the task to get completed if it is done then it proceeds otherwise it will give error then only
// async await is great to handle the response easily by awaiting it but if the error comes we need to handle it inside try catch block
// we have to await the response using the fetch method and even the response takes some time to convert into a json so we will have to use await there as well

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(err){
        console.log(err)
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response)
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

fetch("https://api.github.com/users/R3MODAS").then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})