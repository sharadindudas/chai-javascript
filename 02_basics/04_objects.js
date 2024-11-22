//! objects using constructor  
// const user = new Object();
// console.log(user);

const user = {
    name : "Remo",
    age : 23,
    country : "India",
    fullname : {
        userfullname : {
            firstname : "Sharadindu",
            lastname : "Das"
        }
    }
}

// console.log(user.fullname.userfullname.firstname)

const obj1 = {
    0 : "a",
    1 : "b"
}

const obj2 = {
    2 : "a",
    3 : "b"
}

// const obj3 = {obj1, obj2}; //! This is wrong
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({}, obj1,obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    },
    {
        id : 3,
        email : "c@gmail.com"
    },
    {
        id : 4,
        email : "d@gmail.com"
    },
]

// console.log(users[1].email)

const tinderUser = {
    id : "123abc",
    name : "Harsh",
    isLoggedIn : false
}

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName : "React full tutorial",
    price : "Rs 999",
    courseInstructor : "Sharadindu"
}

const {courseName,price, courseInstructor: instructor} = course;
// console.log(courseName,price,courseInstructor);
// console.log(instructor);

//! Basic React
// const navbar = ({company}) => {
// }
// navbar(company = "Remo")

//! API
// Values that comes from backend and how we show that data in frontend and value comes in the form of JSON 

//! JSON (Javascript Object Notation)
// {
//     "name" : "Remo",
//     "coursename" : "react full tutorial",
//     "price" : "Rs 999"
// }

//! Array of Objects (JSON)
[
    {},
    {},
    {}
]