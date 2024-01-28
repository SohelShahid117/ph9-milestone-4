var numbers = [10,20,30,40,50];
var names = ["sohel","shahid","aadil","sumi"];
console.log(numbers);
console.log(numbers[4]);

numbers.push(99);
console.log(numbers);

numbers.push("5");
console.log(numbers);

numbers.push(14,15);
console.log(numbers);

console.log(names)
console.log(names[1]);

names.unshift("tuhin","shahin","kohinoor");
console.log(names);

names.pop();
console.log(names);

let x = names.pop();
console.log(x);
console.log(names);

names.shift();
console.log(names);

console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));
console.log(numbers.indexOf(40));

console.log(numbers.length);
console.log(numbers);
console.log(numbers[numbers.length]);
console.log(numbers[numbers.length-1]);

console.log(numbers);
let y = numbers.slice(1,5)
console.log(y);

let z = numbers.slice(4);
console.log(z);
console.log(numbers);

// splice() syntax : splice(start,deletecount,item1,item2,item3,...)

let spliceMethod = numbers.splice(2,5,"karim","rahim");
console.log(spliceMethod);
console.log(numbers);

let spliceMethod2 = numbers.splice(3,2);
console.log(spliceMethod2);
console.log(numbers);

let spliceMethod3 = numbers.splice(1,0,100,200);
console.log(spliceMethod3);
console.log(numbers);