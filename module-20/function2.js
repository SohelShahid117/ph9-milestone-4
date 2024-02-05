//VDO-20-3:function work & arguments vs parameter
function doubleIt(nmbr) {  //here nmbr is parameter
    const dbl = nmbr * 2;
    console.log(`double number of ${nmbr} is`, dbl);
}
doubleIt(10); //here 10 is argument
doubleIt(29);
doubleIt('22');
doubleIt('25', 12);
doubleIt();
console.log(`-----------`);
let number = 35;
doubleIt(number);

console.log(`-----------`);
function difference(num1, num2) {
    const diff = num1 - num2;
    console.log(`difference of number ${num1} & ${num2} is`, diff);
}
difference(55, 75);

const fatherAge = 52;
const motherAge = 45;
difference(fatherAge, motherAge);

const sohelAge = 32;
const sumiAge = 33;
difference(sohelAge, sumiAge); //argument pass to the function

//VDO-20-4:function return & set return value to a variable

function tenTimes(number) {
    const result = number * 10;
    return result;
    // console.log(result);
}

tenTimes(15);//ata kono console e nai so O/P dekte pabena

function cutHalf(number) {
    const result = number / 2;
    return result;
}
const number2 = 5;
let tenGon = tenTimes(number2);
console.log(`ten times of ${number2} is`, tenGon);
console.log(`-----------`);
let half = cutHalf(15);
console.log(half);
