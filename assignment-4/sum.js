function add(x,y){
    return x + y;
}
// console.log(add(2,3));
// console.log(Array.isArray([1,2]));
// console.log(Array.isArray(2));
console.log(isNaN(5));
console.log(isNaN(NaN));
console.log(`----------------------`);
console.log(isNaN(`6`));
console.log(isNaN(`a`));
console.log(`----------------------`);
console.log(isNaN({a:5}));
console.log(isNaN(true));
console.log(`----------------------`);
console.log(undefined);
console.log(typeof undefined);
console.log(`----------------------`);
console.log(isNaN([3,7]));
console.log(isNaN([`a`,`b`]));
console.log(`----------------------`);