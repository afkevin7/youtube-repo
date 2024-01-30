function sayMyName(){
    console.log("K")
    console.log("E")
    console.log("V")
    console.log("I")
    console.log("N")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,4)

// console.log(result)

function loginUserMessage(username="Sam") {
    if(!username){
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Kevin"));

function calculateCartPrice(...num){
    return num
}

// console.log(calculateCartPrice(200, 300, 400));

const user = {
    name: "Kevin",
    price: 240
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and the price is ${anyObject.price}`);
}

// handleObject(user)

// handleObject({
//     name: "Sam",
//     price: 140
// })

const myNewArray = [200,100,300,500]

function returnSecondVAlue(getArray){
    return getArray[1]
}

console.log(returnSecondVAlue(myNewArray));