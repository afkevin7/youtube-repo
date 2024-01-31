// Singleton
// Object.create (Using Constructor)

// object Literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Kevin",
    "full name": "A F Kevin",
    [mySym]: "myKey1", // Always define Symbol in [] brackets
    age: 18,
    location: "delhi",
    email: "kevin@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); // We cannot access "full name" by using juUser.fullName
// console.log(typeof(jsUser.mySym));

jsUser.email = "afkevin@gmail.com"
// console.log(jsUser.email);
// Object.freeze(jsUser)
jsUser.email = "afkevin@yahoo.com"
// console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("Hello User");
} 

jsUser.greeting2 = function(){
    console.log(`Hello User, ${this.name}`);
} 


console.log(jsUser.greeting());

console.log(jsUser.greeting2());