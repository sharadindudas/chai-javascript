console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)

// Comparison operator converts null to a number, treating it as 0 so that's why this result happens 

// This type of comparison can lead to confusion so avoiding it is much better