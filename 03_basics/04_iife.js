//! Immediately Invoked Function Expressions (IIFE)
// The function will immediately run as soon as we define it

/* Example :

1) File for DB connection so that once the app loads, the DB connection should be done immediately.
2) To Be Safe from Global Scope Pollution (Accessing Global scope values inside the functions)

*/

//! Named IIFE 
// (function DbConnect(){
//     console.log("DB Connected");
// })();

//! Unnamed IIFE 
// (
//     () => {
//         console.log("DB Connected 2");
//     }
// )();

//! passing arguments and getting the value in parameters 
(function DbConnect(dbname){
    console.log(`${dbname} DB is Connected`);
})("Remo");