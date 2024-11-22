const accountId = 15576
let accountEmail = "remo@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState

// accountId = 2 // not allowed

// Prefer not to use var because of issue in block and functional scope

accountEmail = "lol@gmail.com"
accountPassword = "21345"
accountCity = "Mumbai"

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])