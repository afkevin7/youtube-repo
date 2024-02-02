const myNums = [1,2,3,4]

// const newNums = myNums.reduce( function (accumulator, currentValue) {
//     console.log(`Accumulator : ${accumulator}, CurrentValue : ${currentValue}`);
//     return accumulator + currentValue 
// },0 )

// console.log(newNums);


const total = myNums.reduce( (acc, currValue) => (acc + currValue), 0 )

// console.log(total);

const shoppingCart = [
    {
        name: "JS",
        price: 2999
    },
    {
        name: "Py",
        price: 999
    },
    {
        name: "Flutter",
        price: 5999
    },
    {
        name: "Data",
        price: 3999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => (acc + item.price), 0 )

console.log(totalPrice);