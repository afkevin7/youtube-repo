// Primitive (Call by Value)

// 7 Types: String, Number, Boolean, BigInt, Symbol, null, Undefined

// const score = 100
// const scoreValue = 100.2

// const isLoggedIn = true
// const outsideTemp = null
// let userEmail;

// const id = Symbol("123")
// const numberId = Symbol("123")

// console.log( id === numberId)

// const bigNumber = 21637643547472334n

// Reference (Call By Reference)

// Array, Objects, Functions

const heros = ["batman", "superman", "aquaman"];
let myObj = {
    name: "Kevin",
    age: 24,
}

// const myFunction = function(){
//     console.log("Hello World")
// }

// console.log("Hello");

// ***********************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName="Kevindotcom"

let anotherName= myYoutubeName
anotherName="chaiaurcode"

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

userTwo=userOne;

userTwo.email = "kevin@google.com"

console.log(userOne);
console.log(userTwo);