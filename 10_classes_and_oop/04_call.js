function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function CreateUser(username,email,password){
    SetUsername.call(this, username) 
    this.email = email;
    this.password = password;
}

const chai = new CreateUser("chai", "chai@google.com", "123")
console.log(chai)

// call method is used to pass the reference of the outerfunc so that once the innerfunc is gone then it will still have the reference of the outerfunc and have access to its values