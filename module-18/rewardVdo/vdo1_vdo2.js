const fruits = ["apple","orange","mango","lychee","banana"];
for(let i = 0; i<fruits.length;i++){
    console.log(fruits[i]);
}

// reverse print the array element
for(let i = fruits.length-1; i>=0;i--){
    console.log(fruits[i]);
}


// sum of array element
const num = [10,20,30,40,50];
let sum = 0;
for(let i = 0;i<num.length;i++){
    console.log(num[i]);
    // sum = sum + num[i];
    let currentNumber = num[i];
    sum = sum + currentNumber;
    console.log("sum is -",sum);
}
console.log("total = ",sum);

// swap of array element
const num2 = [10,20,30,40,50];
let temporaryValue = num2[3];
num2[3] = num2[1];
num2[1] = temporaryValue;
console.log(num2);


//find array element
const fruits2 = ["apple","orange","mango","lychee","malta","banana"];
let targetElement = "mango";
// let targetElement = "jackfruit";
let foundIndex = -1;
for(let i=0;i<fruits2.length;i++){
    if(fruits2[i] == targetElement){
        foundIndex = i;
        console.log("target index = ",i);
        console.log("foundIndex",foundIndex,"is founded");
    }
    console.log("regular i = ",i);
}
if(foundIndex>-1){
    console.log("foundIndex",foundIndex,"is founded");
}else{
    console.log("foundIndex",foundIndex,"is not founded");
}


//find max-min number of array
const num3 = [22,23,24,5,6,7,8,100,11,12,13,14,15,10,20,30,40,50];
let maxNumber = num3[0];
let minNumber = num3[0];
for(let i=0;i<num3.length;i++){
    let currentNumber2 = num3[i]
    if(currentNumber2 >maxNumber){
        maxNumber = currentNumber2 ;
        console.log("max number is",maxNumber);
    }

    if(currentNumber2 < minNumber){
        minNumber = currentNumber2 ;
        console.log("min number is",minNumber)
    }
}
console.log("maximum number of array 3 = ",maxNumber);
console.log("minimum number of array 3 = ",minNumber);