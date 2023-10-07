const accountId = 14453
let accountEmail = "deep@gmail.com"
let accountPassword = "12345"
accountCity = "Jaipur" //do use this

let accountState; //undefined
// accountId = 2; // const change not allowed

console.log(accountId);

accountEmail = "test@gmail.com"
accountPassword = "Password"
accountCity = "Ludhiana"


/*
    Prefer not to use var
    because of issue in block and function scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

