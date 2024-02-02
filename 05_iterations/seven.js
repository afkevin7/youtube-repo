const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

// const newNums = nums.map( (val) => { return val+10 } )
// console.log(newNums);

//Chaining

const newNums = nums.map( (num) => num * 10 )
                    .map( (num) => num + 10 )
                    .filter( (num) => num > 40 )           
                    
console.log(newNums);