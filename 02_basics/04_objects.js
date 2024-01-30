// const tinderUser = new Object()

tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "kevin@gmail.com",
    fullname: {
        userFullname: {
            firstName: "A F",
            lastName: "Kevin"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "kevin@mail.com"
    },
    {
        id: 1,
        email: "kevin12@mail.com"
    },
    {
        id: 1,
        email: "kevin@mail.com"
    },
    {
        id: 1,
        email: "kevin@mail.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    courseNAme: "JS",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

