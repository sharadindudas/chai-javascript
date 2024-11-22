class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        return (`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password;
    }

    addCourse(){
        return (`Adding a new course by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@teacher.com",123)
console.log(chai.logMe())

const masalaChai = new User("masalaChai")
// console.log(masalaChai.addCourse()) -> It doesn't have the access to it
console.log(masalaChai.logMe())

// console.log(chai instanceof Teacher)
// console.log(chai instanceof User)
// console.log(masalaChai instanceof Teacher)