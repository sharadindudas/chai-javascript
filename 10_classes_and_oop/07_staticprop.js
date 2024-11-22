class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        return (`USERNAME is ${this.username}`)
    }

    static createId(){
        return `123`
    }

}

const remo = new User("Remo");

// To make a unique id for new user and not give access to anyone 
// console.log(remo.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com");
console.log(iphone)
console.log(iphone.logMe())
// console.log(iphone.createId())