let a = 300

if (true){
    let a = 10
    const b = 20
    // console.log("Inner", a);
}
// console.log(a);
// console.log(b);

function one(){
    const username = "kevin"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()

if(true) {
    const username = "kevin"
    if (username === "kevin"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++


console.log(addOne(5))
function addOne(num){
    return num + 1
}


// console.log(addTwo(7)) //In this method, u cannot use this function before declaring the function
const addTwo = function(num){
    return num + 1
}
// console.log(addTwo(7))