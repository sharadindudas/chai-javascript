const marvel_heroes = ["Hulk", "Spiderman", "Ironman"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

//! Merging Arrays 
// const all_heroes = marvel_heroes.concat(dc_heroes); //! Concat Method 
// console.log(all_heroes)

// const all_heroes = [...marvel_heroes,...dc_heroes]; //! Spread Operator
// console.log(all_heroes)

//! Removing Array inside Array 
// const arr = [1,2,3,[4,5,6],7,[8,[9,10,11]]]; //! Flat method 
// const newArr = arr.flat(Infinity);
// console.log(newArr)

// console.log(Array.isArray("Remo")); //! Checks if it is Array or not
// console.log(Array.isArray(marvel_heroes));
// console.log(Array.from("Remo")) //! Converts to Array
// console.log(Array.from({name : "Remo"})) //! Cannot convert it to array as it is confused whether to give array on key or value so it just gives [] empty array

// const num1 = 10;
// const num2 = 20;
// const num3 = 30;
// console.log(Array.of(num1, num2, num3)); //! Making a new array using the elements