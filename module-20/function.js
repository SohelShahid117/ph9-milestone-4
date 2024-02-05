//VDO-20-1:function & function syntax
function chotoBhai() {
    console.log("I am an expert React Developer");
}
chotoBhai(); //function call

const nmbr = 45;
function fanOffKor() {
    console.log(`fan off kor`)
}
fanOffKor()

function brushTeeth() {
    console.log("teeth your brush regularly");
}
brushTeeth();
console.log('--------------------');
fanOffKor();

//VDO-20-2:add function parameter - multiple parameter
function vaatKhao() {
    console.log(`hand wash koro`);
    console.log('vaat khao');
}
vaatKhao();

function square(number) {
    console.log(number);
    console.log('value of the parameter nmbr is', number);
    const sqr = number * number;
    console.log(`square of the number ${number} is`, sqr);
}
square(5);
square(6);
square(66);
square(6969);

function add(num1, num2) {
    const sum = num1 + num2;
    console.log(`sum of ${num1} & ${num2} is`, sum);
}
add(6, 9);

function addAll(a, b, c, d) {
    const sum = a + b + c + d;
    console.log(`sum of ${a},${b},${c},${d} is`, sum);
}
addAll(6, 9, 55, 4);
addAll(6, 9, 55, 4, 5);/*number beshi hole parameter jototi takbe tototi porjonto sum kore O/P disse*/
addAll(6, 9, 55);//nuber kom hole undefined is NaN disse

