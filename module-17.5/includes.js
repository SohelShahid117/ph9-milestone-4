const friends = ["balam", "kalam", "salam", "gelam", "pailam"];
console.log(friends.includes("kalam"));
console.log(friends.includes("alam"));
console.log(friends.includes("pailam"));

console.log(friends.indexOf("pailam"));
console.log(friends.indexOf("tometo"));

const num = [];
const food = 'roso gol la';
const age = 32;
console.log(Array.isArray(friends))
console.log(Array.isArray(num))
console.log(Array.isArray(food))
console.log(Array.isArray(age))
console.log(Array.isArray(friends))

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();
console.log(text);
const citrus = fruits.slice(1, 3);
console.log(citrus);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

const children = arr1.concat(arr2);
console.log(children);