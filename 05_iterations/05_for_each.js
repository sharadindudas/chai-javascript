const coding = ["js", "ruby", "java", "python", "cpp"]

// callback function doesn't have a name (anonymous function) / arrow function

coding.forEach((item) => {
    // console.log(item)
})

function printMe(item){
    console.log(item)
}

// coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item,index,arr) => {
     console.log(`${item.languageFileName} shortcut is for ${item.languageName}`)
} )