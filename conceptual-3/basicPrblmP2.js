console.log(Array.isArray([10, 15, 1, 5]));

function findLargestNumber(nmbr) {
    if (!Array.isArray(nmbr)) {
        return `tiktak array number den`;
    }

    let maxNmbr = nmbr[0];
    for (let i = 0; i < nmbr.length; i++) {
        if (maxNmbr < nmbr[i]) {
            maxNmbr = nmbr[i];
        }
    }
    return maxNmbr;

}

let number = [5, 6, 7, 2, 8, 9, 4, 1, 3, 12, 15, 74, 12, 99, 87, 54, 23];

let maximumNumber = findLargestNumber(null);
console.log(`largest number from ${number} is,`, maximumNumber);

let maximumNumber2 = findLargestNumber(number);
console.log(`largest number from ${number} is,`, maximumNumber2);

console.log(`-------------------------`);


function findLowestNumber(nmbr) {
    if (!Array.isArray(nmbr)) {
        return `tiktak array den`;
    }
    let minNmbr = nmbr[0];
    for (let i = 0; i < nmbr.length; i++) {
        if (typeof nmbr[i] !== `number`) {
            return `tik tak array number den `
        } else {
            if (minNmbr > nmbr[i]) {
                minNmbr = nmbr[i];
            }
        }

    }
    return minNmbr;
}

let minimumNumber = findLowestNumber(undefined);
console.log(`lowest number from ${number} is,`, minimumNumber);


let minimumNumber2 = findLowestNumber(number);
console.log(`lowest number from ${number} is,`, minimumNumber2);

let minimumNumber3 = findLowestNumber([`sohel`, `shshid`]);
console.log(`lowest number from ${number} is,`, minimumNumber3);

let minimumNumber4 = findLowestNumber(number);
console.log(`lowest number from ${number} is,`, minimumNumber4);