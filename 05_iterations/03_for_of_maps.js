//! for of

// ["", "", ""]
// [{}, {}, {}]

const array = [1, 2, 3, 4, 5];
for(const num of array){
    // console.log(num)
}

const greetings = "Hello world"
for(const greet of greetings){
    // console.log(greet)
}

//! Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map)

for(const [key,value] of map){
    // console.log(`${key} => ${value}`)
}

const myObj = {
    name : "Remo",
    age : 23,
    place : "India",
    food : "Biriyani"
}

// Object is not iterable using for of loop 

for(const [key,value] of myObj){
    // console.log(`${key} => ${value}`)
}