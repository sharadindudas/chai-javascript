function sayMyName() {
    console.log("Hello, I am Remo!");
}
// sayMyName -> Reference of the function 
// sayMyName() -> Execution of the function

// sayMyName();

function addTwoNums(a, b) { // Parameters
    return (a + b);
}

const res = addTwoNums(10, 20); // Arguments

// console.log("Result :",res)

function loginUserMessage(username = "DefaultUser"){
    if(!username){
        return ("Please Enter a username!");
    }
    else{
        return `${username} just logged in!`;
    }
}

// console.log(loginUserMessage("Remo"))
// console.log(loginUserMessage())

//! REST operator (bundled everything in an array)
/* 
    No diff in rest or spread operator just the usecase of this matters
*/

// function calculateCartPrice(...prices){
//     console.log(prices);
// }

function calculateCartPrice(val1,val2, ...prices){
    console.log(val1, val2, prices);
}

// calculateCartPrice(100,500,400,200,700)

const user = {
    username : "Remo",
    age : 23
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and age is ${anyObj.age}`);
}

// handleObject(user);
// handleObject({
//     username : "Harshit",
//     age : 34
// });

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,400,100,600]));