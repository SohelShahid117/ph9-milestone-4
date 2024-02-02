const x = `hello`;
const y = 'HeLlo';
if(x===y){
    console.log(`booth r equal`);
}else{
    console.log(`booth r not equal`);
}

if(x.toUpperCase()===y.toUpperCase()){
    console.log(`booth r equal`);
}else{
    console.log(`booth r not equal`);
}

const a = `Hello world`;
const b = 'Hello';
console.log(a.includes(b));
const c = "World";
console.log(a.includes(c));
console.log(a.toLowerCase().includes(c.toLowerCase()));

let x1 = `hello    `;
let x2 = `    Hello  `;
if(x1===x2){
    console.log("both r same");
}else{
    console.log("both r not same");
}

if(x1.trim()===x2.trim()){
    console.log("both r same");
}else{
    console.log("both r not same");
}

if(x1.trim().toLowerCase()===x2.trim().toLowerCase()){
    console.log("both r same");
}else{
    console.log("both r not same");
}