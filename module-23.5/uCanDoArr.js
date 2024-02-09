let products=[
    {name:`phone`,price:12000},
    {name:`laptop`,price:32000}
]
console.log(products);
let nmbr = [2,5,6,7];
console.log(nmbr);
console.log(nmbr[1]);
console.log(nmbr[2]);

// const nmbr2 = {
//     `0`:1,
//     `1`:3,
//     `2`:4,
// };
// console.log(nmbr2)

const nmbr2 = {
    '0':1,
    '1':3,
    '2':4
};
console.log(nmbr2);
console.log(nmbr2[1]);
console.log(nmbr2[2]);
console.log(`----------------------`);
console.log(Array.isArray(products));
console.log(Array.isArray(nmbr));
console.log(Array.isArray(nmbr2));