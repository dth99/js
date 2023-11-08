const name = "Deepak"
const repoCount = 12;

// console.log(name + repoCount + " value") old way

console.log(`Hello my name is ${name} and repo count is ${repoCount}`);


// string declaration second way
const gameName = new String('deepak-K-112'); 


console.log(gameName[0]);
console.log(gameName.__proto__) //prototype


console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3));
console.log(gameName.indexOf('p'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4); // slice allow to use -ve value too
console.log(anotherString);



const newStringOne = " javascript    ";
console.log(newStringOne);
console.log(newStringOne.trim());  // trim use to remove white space
// example

const url = "https://deepak.com/deep%112k";

console.log(url.replace('%112','-'))

console.log(url.includes('kumar'))



console.log(gameName.split('-'))