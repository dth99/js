// use conversionOperation very carefully in js
// after conversion check every value usin console.log
let score = "33"

console.log(typeof score);
console.log(typeof(score));



let valueInNumber = Number(score);
console.log(typeof valueInNumber);


let score1 = "33ac"

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);

// we are still getting score1 type is number
console.log(valueInNumber1);
// value of score is NaN after conversion
// Not a number (NaN) still gives type number. js issues


let score2 = null
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);
// null after conversion gives 0


let score3 = undefined
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);
// undefined after conversion gives NaN


// "33" => 33
// "33abc" => NaN
// ture => 1; false => 0



let isLoggedIn = 1

let boolenIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof boolenIsLoggedIn);
console.log(boolenIsLoggedIn);


// boolen conversion

// 1 => ture; 0=> false
// "" => false
// "hitesh" => true


let someNumber= 33
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);





// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);


let str1 = "hello"
let str2 = " deepak"

let str3= str1+str2
console.log(str3);



console.log("1" +2 );
console.log(1+"2");

console.log("1" + 2 + 2); //122

console.log(1 + 2 + "2"); //32 
// ToPrimitive

console.log(+true);  //1
// console.log(true+); // errer
console.log(+""); // 0



