// Primitive

// 7 types: String, Number, String, Null, Boolen, undefind Symbol, BigInt

//  Reference (Non primitive) Type return type is all function

// array, Objects, Functions

// symbol type

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ==anotherId)

console.log(id);
const bigNumber = 3553353235363633553n


const heros = ['shaktiman','naagraj','doga']
let myObj={
    name: "deepak",
    age:22,
}
const myFunction =function(){
    console.log("hello world");
}

console.log(typeof myFunction );




// ++++++++++++++++++++Memory++++++++++++++++++++++

// Stack (Primitive)  copy of data

// Heap (non Primitive) reference of data


let myYoutubename = "ai wala"


let anothername = myYoutubename;
anothername="chai with deepak"
console.log(myYoutubename);
console.log(anothername);



let user1 = {
    email: "user@google.com",
    upi:"705@ybl"
}



let user2= user1;

user2.email = "deepak@google.com";

console.log(user1.email);
console.log(user2.email);