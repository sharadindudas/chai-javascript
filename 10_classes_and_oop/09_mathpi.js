const mynewObj = {username : "Remo"}
// console.log(Math.PI)

// We cannot change the value of PI as it cannot be changed 
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

//! This will loop the object as the object is iterable now
for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}

//! but if we define the property to not to be iterable then just do this

Object.defineProperty(chai, "name", {
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))
