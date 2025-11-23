const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    // console.log(element);
    
}

const greetings = "Hello Rishav"

for(const greet of greetings) {
    // console.log(greet);
    
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', 'America')
map.set('FR', 'France')
map.set('USA', 'America')

// console.log(map);

for(const key of map) {
    // console.log(key);    
}
for(const [key, value] of map) {
    // console.log(key, ':-', value);    
}

// ######### OBJECTS #########

const myObj = {
    'game1': "PUBG",
    'game2': "spiderman"
}

for (const [key, value] of myObj) {
    // console.log(key, ':-', value); 
    
}



