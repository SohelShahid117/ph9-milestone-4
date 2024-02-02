const numbr = [2,4,6,5,88,99,9,56,3];
console.log(numbr);

// numbr.reverse();
// console.log(numbr);

const rev_nmbr = [];
for(const n of numbr){
    console.log(n);
    // rev_nmbr.push(n);
    // rev_nmbr.shift(n);
    rev_nmbr.unshift(n);
    // unshift insert the new elements at the start of an array
    // push append the new elements at the end of an array

    // push & unshift is equal work but revesre dircetion
    // pop & shift is equal work but revesre dircetion
}
console.log(rev_nmbr);

console.log(`Entering revesed number using normal for loop method`);
const reversed_nmbr = [];
for(let i = 0;i<numbr.length;i++){
    let num = numbr[i];
    reversed_nmbr.unshift(num);
}
console.log(reversed_nmbr);

console.log("here use push method");
const reversed_nmbr2 = [];
for(let i = numbr.length-1;i>=0;i--){
    let num = numbr[i];
    reversed_nmbr2.push(num);
}
console.log(reversed_nmbr2);