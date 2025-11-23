// function add(num1, num2) {
//     console.log(num1 + num2);
    
// }
// add -> reference
// add() -> execution
// add(3,6)
// add(4, "a")


function add(num1, num2) {
     return num1 + num2
    
 }
let result = add(3, 9)
// console.log("Result: ", result);

function loginUserMessage(username) {
    if(username === undefined) {
        // console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`  
    
}
// console.log(loginUserMessage("Rishav"));
// console.log(loginUserMessage());
// console.log(loginUserMessage(""));


function calcualteCartPrice(...num1) {
    return num1
}
// console.log(calcualteCartPrice(200, 600, 300))

const user = {
    username: "Rishav",
    price: 300
}

function handleObj(anyobj) {
    // console.log(`User name is ${anyobj.username} and price is ${anyobj.price}`);
}

handleObj(user);

const myArray = [200, 400, 500]
function returnsecondArr(getArray) {
    return getArray[1]
}

console.log(returnsecondArr(myArray));





