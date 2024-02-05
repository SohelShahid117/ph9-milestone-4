//VDO-20-5:recap & conditional return
function add(price1, price2) {
    const bill = price1 + price2;
    return bill;
}
const bill = add(5, 80)
console.log(bill);

function add2(price1, price2) {
    // const bill = price1 + price2;
    return price1 + price2;
}
const bill2 = add2(15, 60)
console.log(bill2);
console.log(bill, bill2);

function doMath(num1, num2) {
    const sum = num1 + num2;
    const sub = num1 - num2;
    const mul = num1 * num2;
    const div = num1 / num2;
    const modulo = num1 % num2;
    return sum + sub + mul + div + modulo;
}
let result = doMath(5, 6)
console.log(result);

function isEven(number) {
    if (number % 2 === 0) {
        return `${number} is even number.`;
    } else {
        return `${number} is odd number.`;
    }
}
let even1 = isEven(52);
let even2 = isEven(15);
console.log(even1);
console.log(even2);


//VDO-20-6:different types of parameter
/*for a given string tell me whether it has even charecter or not*/

function evenCharecterString(str) {
    console.log(str);
    console.log(str.length);
    let strLength = str.length;
    if (strLength % 2 === 0) {
        return `${str} has even number charecter & charecter quantity is ${strLength}`;
    } else {
        return `${str} has odd number charecter & charecter quantity is ${strLength}`;
    }
}
let quantityOfCharecter = evenCharecterString(`sohel`);
console.log(quantityOfCharecter);
let quantityOfCharecter2 = evenCharecterString(`sumi`);
console.log(quantityOfCharecter2);

function doDoubleOrTripple(number, doDouble) {
    if (doDouble) {
        const result = number * 2;
        return `double number of ${number} is ${result}`;
    } else {
        const result = number * 3;
        return `triple number of ${number} is ${result}`;
    }
}
let doubleTripplNumbr = doDoubleOrTripple(5);
console.log(doubleTripplNumbr);

let doubleTripplNumbr2 = doDoubleOrTripple(20, `doDouble`);
console.log(doubleTripplNumbr2);

// let doubleTripplNumbr3 = doDoubleOrTripple(30, one); //ReferenceError: one is not defined
// console.log(doubleTripplNumbr3);

let doubleTripplNumbr4 = doDoubleOrTripple(30, 1);
console.log(doubleTripplNumbr4);


let doubleTripplNumbr5 = doDoubleOrTripple(50, true);
console.log(doubleTripplNumbr5);


let doubleTripplNumbr6 = doDoubleOrTripple(60, false);
console.log(doubleTripplNumbr6);

function doDoubleOrTrippleAgain(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return `double number of ${number} is ${result}`;
    } else {
        const result = number * 3;
        return `triple number of ${number} is ${result}`;
    }
}

let doubleTripplNumbrTrueFalse = doDoubleOrTrippleAgain(69, false);
console.log(doubleTripplNumbrTrueFalse);

let doubleTripplNumbrTrueFalse2 = doDoubleOrTrippleAgain(69, true);
console.log(doubleTripplNumbrTrueFalse2);

function numberOfElement(numbr) {
    let len = numbr.length;
    return len;
}
let arr = numberOfElement([1, 2, 5, 1, 4, 5, 6]);
console.log(arr);

function getAge(persn) {
    let age = persn.age;
    return age;
}
let person = {
    name: `Sohel`,
    age: 32
}
let obj = getAge(person);
console.log(obj);

