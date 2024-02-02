// For

for (let i = 0; i < 10; i++) {
    const element = i
    if (element == 5) {
        // console.log("5 is the best");
    }
    // console.log(element);
}

// console.log(element);

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop value is ${j} outer loop value is ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
    
// }

// Break and Continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break
//     }
//     console.log(`Value is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`Value is ${index}`);
    
}