const sym = Symbol('key1')
// let obj = {
//     name: "Rishav",
//     age: 22,
//     course: "MCA",
//     location: "Noida",
//     [sym]: "mySymbol"
// }
// obj.color =  "brown"

// obj.age = 24
// obj.location= "Bihar"

// // console.log(obj.name);
// // console.log(obj.age);
// // console.log(obj["location"]);
// // console.log(obj[sym]);


// console.log("name" in obj);
// console.log(obj.hasOwnProperty("color"));

const mySym = Symbol("s1")
// const obj = {
//     name: "Rishav",
//     age: 23,
//     caste: "Rajput",
//     Place: "Bihar",
//     [mySym]: "Key1",
// }

// obj.religion = "Hindu"

// console.log(obj.name);
// console.log(obj.religion);
// console.log("age" in obj);
// console.log(obj[mySym]);
// console.log(obj["caste"]);

// const obj1 = new Object()

// obj1.name = "Rishav"
// obj1.age = 25
// obj1.isloggedIn = false

// console.log(obj1.name);
// console.log(obj1.isloggedIn);
// console.log(obj1.isPrototypeOf);


const obj1 = {"1": "a", "2": "b"}
const obj2 = {"3": "c", "4": "d"}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const obj4 = Object.assign({}, obj1, obj2) 
console.log(obj4);








 