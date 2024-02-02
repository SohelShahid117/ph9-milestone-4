const computer = {
    brand : `Apple`,
    price : 70000,
    hdd:`512gb`,
    processor:'intel'
}
const keysObject = Object.keys(computer);
console.log(keysObject);

const valuesObject = Object.values(computer);
console.log(valuesObject);

for(let item in computer){
    console.log(item);
    console.log(computer[item]);
}

const key = Object.keys(computer);
console.log(key);
// for(x in key){
//     console.log(x);
//     console.log(key[x]);
// }
for(x of key){
    console.log(x); // key
    console.log(key[x]);//undefine
    console.log(computer[key]); //undefined
    console.log(computer[x]); //value
    console.log(x,":",computer[x]);  //key:value
}