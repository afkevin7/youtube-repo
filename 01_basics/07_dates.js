// Dates

let myDates = new Date()

// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toISOString());
// console.log(myDates.toJSON());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toLocaleString());
// console.log(myDates.toLocaleTimeString());

let myCreateDate = new Date(2022, 0, 5)
// console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date(2022, 0, 5, 3, 5)
// console.log(myCreateDate1.toLocaleString());

let myCreateDate2 = new Date("2022-3-17")
// console.log(myCreateDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());