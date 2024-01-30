// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log("even number is-", i);
//     }
// }

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 !== 1) {
//         console.log("even number is-", i);
//     }
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log("even number is-", i)
// }

// for (let i = 0; i <= 30; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 0; i <= 30; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 0; i <= 30; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 0; i <= 30; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }
let sum = 0
for (let i = 0; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
        sum = sum + i;
        console.log("sum is-", sum);
    }
}
console.log(sum);

let total = 0
for (let i = 0; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(i);
        total = total + i;
        console.log("total is-", total);
    }
}
console.log("total=", total);


// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 1) {
//         console.log("odd number is-", i);
//     }
// }