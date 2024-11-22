// let a = 10;
// const b = 20;
// var c = 30;

// scope -> {}
//! Global Scope and Block Scope 
// var c = 300
let a = 300
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;

    // console.log("Inner :", a)
}

// console.log("Outer :", a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Remo";

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two();
}
one();

if(true){
    const username = "Remo";
    if(username === "Remo"){
        const website = " youtube";
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//! ++++++++++++++++++++++ Interesting +++++++++++++++++++
// console.log(addOne(5))
function addOne(num){
    return num + 1;
}


// console.log(addTwo(5)) //! This gives Error due to Hoisting
// function expression
const addTwo = function(num){
    return num + 1;
}
