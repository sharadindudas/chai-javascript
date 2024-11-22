const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((item) => item * 10)
// console.log(newNums)

const newNums = myNums
    .map((item) => item * 10)
    .map((item) => item + 5)
    .filter((item) => item > 30)
console.log(newNums)


