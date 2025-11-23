const myNums = [1, 2, 3]

// const result = myNums.reduce( (acc, currval) =>  acc + currval, 0  )
// console.log(result);

// const result = myNums.reduce( (acc, currval) => { 
//     console.log(`acc: ${acc} and currVal: ${currval}`);
//     return acc + currval}, 9 )
// console.log(result);


let shoppingCart = [
    {
        course: 'js course',
        price: 999
    },
    {
        course: 'py course',
        price: 599
    },
    {
        course: 'cpp course',
        price: 1999
    },
    {
        course: 'ruby course',
        price: 1500
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);
