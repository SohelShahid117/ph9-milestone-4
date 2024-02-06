//validation check of number
function add(x, y) {
    if (typeof x !== `number` || typeof y !== `number`) {
        return `tik tak number den`;
    }
    // } else {
    //     return x + y;
    // }
    return x + y;

}
console.log(add(10, 15));
console.log(add('10', 15));
console.log(add(null, 15));
console.log(add(4, 5));
console.log(add(4));
console.log(add(undefined, 9));
console.log(add(40, 50));


// function details(info) {
//     //part2-3min teke soro hobe
// }