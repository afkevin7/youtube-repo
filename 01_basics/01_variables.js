const accountId=23546
let accountEmail="kevin@gmail.com"
var accountPassword="12345"
accountCity="Delhi"
let accountState;

// accountId=2 // not allowed

accountEmail="afkevin@gmail.com"
accountPassword="54321"
accountCity="Kerala"

console.log(accountId);

/* 
Prefer not to use var
beacuse of the issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])