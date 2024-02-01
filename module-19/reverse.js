const sentence = `I am learnig web dev`;
// let reverse = [``];
let reverse = ` `;
for(let item of sentence){
    // console.log(item);
    // reverse.push(item);
    // reverse = reverse + item;
    reverse = item + reverse;
}
console.log(reverse);

let rev = ` `;
for(let i = 0;i<sentence.length;i++){
    // rev = rev + sentence[i];
    rev = sentence[i] + rev;
}
console.log(rev);

const reversed = sentence.split(``);
console.log(reversed);

const reversed2 = sentence.split(``).reverse();
console.log(reversed2);

const reversed3 = sentence.split(``).reverse().join('|');
console.log(reversed3);

const reversed4 = sentence.split(``).reverse().join('');
console.log(reversed4);