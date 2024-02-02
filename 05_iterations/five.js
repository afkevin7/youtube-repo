// For each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {   // Syntax for normal callback function
//     console.log(val);
// } 
// )

// coding.forEach( (item) => {    // Syntax for arrow function 
//     console.log(item);
// }
// )

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)

coding.forEach( (value, index, arr) => {
    // console.log(value, index, arr);
}

)

const myCoding = [
    {
        language: "Javascript",
        languageFileName: "Js"
    },
    {
        language: "Java",
        languageFileName: "Java"
    },
    {
        language: "Python",
        languageFileName: "py"
    }

]

myCoding.forEach( (item) => {
    console.log(item.language);
    console.log(item.languageFileName);
}

)