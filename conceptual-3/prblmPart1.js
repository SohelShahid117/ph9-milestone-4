const x = 5;
if (x % 2 === 0) {
    console.log(`${x} is even umber`);
} else {
    console.log(`${x} is odd umber`);
}

function checkEvenOdd(x) {
    if (x % 2 === 0) {
        console.log(`${x} is even number inside the console of function`);
        return (`${x} is even numbe from return`);
    } else {
        console.log(`${x} is odd number inside the console of function`);
        return (`${x} is odd number from return`);
    }
}

let result = checkEvenOdd(8);
let result2 = checkEvenOdd(15);
console.log(result2)

function printName(x) {
    for (let i = 1; i <= x; i++) {
        console.log(`${i}-Sohel`);
    }
}
printName(5);
console.log(`---------------`);
printName(`5`);
console.log(`---------------`);
printName(`hi`);
console.log(`---------------`);
printName([5, 6, 7]);
console.log(`---------------`);
printName({ name: `sohel` });

function add(x, y) {
    return x + y;
}
console.log(add(5, 7));
console.log(`---------------`);
console.log(add("5", 7));//57 print dibe
console.log(`---------------`);
console.log(add("5", "7"));//57 print dibe
console.log(`---------------`);
console.log(add(null, 7)); //7 print dibe
console.log(`---------------`);
console.log(add(undefined, 7)); //NaN print dibe
