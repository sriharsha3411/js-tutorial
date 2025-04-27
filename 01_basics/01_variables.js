const accountId = 12345;
let accountEmail = "harsha@gmail.com";
var accountPassword = "45678";
accountName = "Harsha";

let accountState;

console.log(accountId);

//accountId = 2  // not allowed because it is declared as const

/*
prefer not to use var
because of issue in block scope and functional scope
*/



console.log(accountEmail,accountPassword);


accountEmail = "sunny@gmail.com";
accountPassword = "77024"
accountName = "Sunny"



console.table([accountId, accountEmail, accountPassword, accountState]);