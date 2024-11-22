// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `Encrypted password is ${this.password}abc`
//     }

//     userNameInUppercase(){
//         return `Uppercased name is ${this.username.toUpperCase()}`
//     }
// }

// when we use new keyword to create object, constructor method is called automatically

// const remo = new User("remo","remo@google.com",123)
// console.log(remo)
// console.log(remo.encryptPassword())
// console.log(remo.userNameInUppercase())

// Behind the Scene
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `Encrypted password is ${this.password}abc`
}

User.prototype.userNameInUppercase = function(){
    return `Uppercased name is ${this.username.toUpperCase()}`
}

const rimo = new User("rimo","rimo@microsoft.com",345)
console.log(rimo)
console.log(rimo.encryptPassword())
console.log(rimo.userNameInUppercase())