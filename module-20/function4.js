//VDO-20-7:sum of all nmbrs in an array
function sumOfNumbers(nmbr) {
    let sum = 0;
    for (x of nmbr) {
        sum = sum + x;
    }
    return sum;
}
const number = [5, 4, 6, 8, 7, 2]
const sum = sumOfNumbers(number);
console.log(`sum of ${number} is`, sum);


//VDO-20-8:return all the even numbers of an array
function evenNumber(nmbr) {
    console.log(nmbr);
    let even = [];
    for (x of nmbr) {
        if (x % 2 === 0) {
            // even.push(x);
            even.unshift(x);
        }
    }
    return even;
}
const number2 = [12, 13, 14, 15, 5, 4, 6, 8, 7, 2, 10, 20, 21, 22, 25];
let evenNmbr = evenNumber(number2)
console.log(`all even number of ${number2} is`, evenNmbr);

function sumOfEvenNumber(nmbr) {
    let sum = 0;
    for (x of nmbr) {
        if (x % 2 === 0) {
            sum = sum + x;
        }
    }
    return sum;
}
let sumOfEvenSonka = sumOfEvenNumber(number2);
console.log(`sum of all even number ${number2} is`, sumOfEvenSonka);


//VDO-20-9:function smry & practice task
//git clone https://github.com/ProgrammingHero1/js-function-practice-tasks.git