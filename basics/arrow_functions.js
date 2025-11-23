// ##############  This function  ###########

const user = {
    username: "Rishav",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this)
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
// console.log(this);

// ################ Arrow function ##############

function chai() {
    let username = "rishav"
    // console.log(this.username); --> undefined
    
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 9));


// implicit return
const addTwo = (num1, num2) =>  (num1 + num2)
 

//  console.log(addTwo(3, 9));


// ################    IIFE    ##############


(function chai() {
    console.log(`DB connected`);  
})();


 ( () => {
     console.log(`DB Connected Two `);
    
 })();


 ( (name) => {
     console.log(`DB Connected Three ${name}`);
    
 })('rishav');



