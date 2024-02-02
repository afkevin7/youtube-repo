// For in

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const program = ["js", "rb", "py", "java", "cpp"]

// for (const key in program) {  // By default arrays have keys but in numbers starting from 0
//         console.log(key);  // In For_in loop, when an array is iterated, the key is shown whereas in For_of loop the value of key is shown!
//     }

for (const key in program) {
        // console.log(program[key]);
    }


const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

for (const key in map) {
    console.log(key);   //Map cannot be iterated by for_in and for_of
}