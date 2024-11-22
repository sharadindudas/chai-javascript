const date = new Date();
// console.log(date.toString());
// console.log(date.toLocaleString())
// console.log(date.toLocaleDateString())
// console.log(typeof date)

// let mydate = new Date(2000, 0, 11)
// console.log(mydate.toLocaleString())
// console.log(mydate.toDateString())

let mydate = new Date("01-11-2000");
// console.log(mydate.toLocaleString())

let mytimestamp = Date.now();
// console.log(mytimestamp)
// console.log(mydate.getTime())

// convertion to seconds 
// console.log(Math.round(Date.now()/1000))

console.log(date.toLocaleTimeString('default', {
    weekday : "long",
}));