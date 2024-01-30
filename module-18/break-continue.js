// for (let i = 1; i <= 10; i++) {
//     if (i >= 5) {
//         break;
//     }
//     console.log(i);
// }

// let n = 50;
// while (n >= 40) {
//     if (n <= 45) {
//         break;
//     }
//     console.log(n);
//     // if (n <= 45) {
//     //     break;
//     // }
//     n--;
// }

// continue--->skip this iteration;
//continue--->je condition e continue takbe sei value golo skip hobe
// break--->i am done with this loop,loop end

for (let i = 1; i <= 10; i++) {
    if (i === 5 || i === 6) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i <= 5) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// let n = 0;
// while (n < 50) {
//     n++;
//     if (n % 5 === 0) {
//         continue;
//     }
//     console.log(n);
// }

let n = 0;
while (n < 50) {
    n++;
    if (n % 5 !== 0) {
        continue;
    }
    console.log(n);
}

