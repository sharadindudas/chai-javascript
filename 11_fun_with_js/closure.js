//! Lexical Scope 
// function init() {
//     let name = "Mozilla"; 
//     function displayName() {
//         console.log(name); 
//     }
//     displayName();
// }
// init();

// function outer(){
//     let username = "Remo"
//     console.log("OUTER", secret);
//     function inner(){
//         let secret = "my123"
//         console.log("inner", username);
//     }
//     function innerTwo(){
//         console.log("innerTwo", username);
//         console.log(secret);
//     }
//     inner()
//     innerTwo()

// }
// outer()
// console.log("TOO OUTER", username);


//! Closures

// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// const myFunc = makeFunc();
// myFunc();

//! Closures and Lexical Scope (Practical Example) 

// document.getElementById("orange").onclick = function(){
//     document.body.style.backgroundColor = `orange`
// }

// document.getElementById("green").onclick = function(){
//     document.body.style.backgroundColor = `green`
// }

function clickHandler(color){
    return () => document.body.style.backgroundColor = color;
}

document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('green').onclick = clickHandler("green")