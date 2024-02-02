//For of

myArr = [1,2,3,4,5]

// for (const i of myArr) {
//     console.log(`Value is ${i}`);
// }

const greetings = "Hello World"
// for (const i of greetings) {
//     console.log(`Each char is ${i}`);
// }

// Map

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

for (const [key, value] of map) {
    // console.log(`${key}: ${value} `);
}

const myObj = {
    "Game1": "NFS",
    "Game2": "GTA"
}

// for (const [key, values] of myObj) {       //Will not iterate for objects
//     console.log(`${key}: ${value} `);
// }

