const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter( (word) => word.length > 7)
// console.log(result);



// ############# MAPS ############

// const myNums = [1, 2, 3, 4,5 ,6, 7, 8, 9, 10]

// const result = myNums.map( (nums) => nums+ 2 )
// console.log(result);

// const myNums = [1, 2, 3, 4,5 ,6, 7, 8, 9, 10]

// const result = myNums.map( (nums) => {return nums+ 2} )
// console.log(result);


// ##########for each #########

const myNums = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]

// const result = []
// myNums.forEach( (val) => result.push(val + 2) )
// console.log(result);

// ###########  chaining ############
const newNums = myNums
                .map( (num) => num * 10 )
                .map( (num) => num + 2 )
                .filter( (num) => num > 50 )

console.log(newNums);




