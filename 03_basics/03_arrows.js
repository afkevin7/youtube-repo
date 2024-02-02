const user = {
    username: "Kevin",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Kevin"
//     console.log(this.username);
//     console.log(this);
// }

// chai()

//Basic Arrow Function
// const addTwo = (num1, num2) => {       // If u are using curly braces then u should write return (Explicit)
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 //Implicit

// const addTwo = (num1, num2) => (num1 + num2) 

const addTwo = (num1, num2) => ({username: "Kevin"}) //If u want to give object implicitly, enclose with the brackets

console.log(addTwo(3,4))