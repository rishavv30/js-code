const myObj = {
    js:"javascript",
    cpp: "Cpp",
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    // console.log(key);    -> key
    
}

for (const key in myObj) {
    // console.log(myObj[key]);    -> values
    
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`); -> key value pair
    
    
}

const programmming = ['js', 'cpp', 'python', 'java', 'rb']

for(const key in programmming) {
    // console.log(key);
    
}

for(const key in programmming) {
    // console.log(programmming[key]);
    
}

for(const key  of programmming) {
    // console.log(key);
    
}


// ######### MAP #############
const map = new Map()

map.set('IN', "India")
map.set('USA', 'America')
map.set('FR', 'France')
map.set('USA', 'America')


for(const key in map) {
    console.log(key);
    
}

for(const key of map) {
    console.log(key);
    
}