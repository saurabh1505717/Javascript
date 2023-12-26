const accountId = 144553
let accountEmail = "saurabh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sk@google.com"
accountPassword = "212121221"
accountCity = "Bangaluru"

console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);