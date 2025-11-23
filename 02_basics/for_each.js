const coding = ['js', 'ruby', 'java', 'py','cpp']

// coding.forEach( function name() {} )

coding.forEach( function (item) {
    // console.log(item);
    
} )

coding.forEach( (val) => {
    // console.log(val);
    
} )

function printMe(item) {
    // console.log(item);
    
}
// coding.forEach(printMe)

coding.forEach( (val, index, arr) => {
    // console.log(val, index, arr);
    
} )

const myCoding = [
    {
        name: 'javascript',
        file: 'js'
    },

    {
        name: 'java',
        file: 'java'
    },

    {
        name: 'python',
        file: 'py'
    },
]

myCoding.forEach( (item) => {
    // console.log(item.name);
    console.log(item.file);
    
} )