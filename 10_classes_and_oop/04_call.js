function SetUsername(username) {
    // complex DB calls
    this.username = username;
    // console.log("called");
}

function CreateUser(username, email, password) {
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new CreateUser("chai", "chai@google.com", "123");
// console.log(chai);

// call method is used to pass the reference of the outerfunc so that once the innerfunc is gone then it will still have the reference of the outerfunc and have access to its values

let user1 = {
    firstName: "Sharadindu",
    lastName: "Das"
};

let user2 = {
    firstName: "Sreeparna",
    lastName: "Das"
};

function printFullName(hometown, state) {
    console.log(`${this.firstName} ${this.lastName} from ${hometown},${state}`);
}

// printFullName.call(user1, "Kanchrapara", "West Bengal")
// printFullName.call(user2, "Kolkata", "West Bengal")
// printFullName.apply(user1, ["Kanchrapara", "West Bengal"]);
// const printMyName = printFullName.bind(user1, "Kanchrapara", "West Bengal");
