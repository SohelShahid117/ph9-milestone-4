function add(num1,num2){
    console.log(num1,num2);
    console.log(arguments);
    console.log(arguments[3]);
    console.log(arguments[5]);
}
add(23,24);
console.log(`-------------------`)
add(23,24,26,87,88,97);