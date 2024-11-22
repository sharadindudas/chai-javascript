/*
    Prototype
    ---------
    Array -> Object -> null
    String -> Object -> null
    Function -> Object -> null

*/

function mul5(num){
    return num * 5
}

// console.log(mul5(5))

// Function is function + object
// console.log(mul5.prototype)

// What happens when we use new keyword
function CreateUser(username, email, password){
    // const this = {} // this object is created by new keyword
    this.username = username;
    this.email = email;
    this.password = password;
    // this object is returned automatically
}

// we get access to its prototype so we can inject our custom functions and use them
CreateUser.prototype.printName = function(){
    console.log(`Hello, I am ${this.username}`)
}

const Remo = new CreateUser("Remo","abc@gmail.com",12345);