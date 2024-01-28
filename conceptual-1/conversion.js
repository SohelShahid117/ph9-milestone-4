var number = 4.567;
var x = "55.2222";
var y = "21";
console.log(parseInt(number));

console.log(typeof (x));
console.log(parseFloat(x));
console.log(typeof (x));

console.log(typeof (y));
let num = parseInt(y)
console.log(num);
console.log(typeof (num));

console.log(3 + 4);
console.log(3 + "4" + 5);
console.log(3 + 4 + "5");

console.log(3 - 4);
console.log(3 * 4);
console.log(3 / 4);

let a = 4.5892758;
var convert = a.toFixed(3);  //toFixed korle number to string hoye jabe.tokon parseInt or parsefloat use kore number korte hobe.

console.log(convert);
console.log(typeof (convert));
console.log(5 + convert)

var convert2 = parseFloat(convert);
console.log(convert2);
console.log(typeof (convert2));
console.log(5 + convert2)

// isNan = not a number

console.log(isNaN(29)); //false
console.log(isNaN("29")); //false asbe karon 29 k number e convert kora jai
console.log(isNaN("abc")); //true

