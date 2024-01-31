const country = "Bangladesh";
const division = "chattogram";
const district = 'New khal e';
const thana = new String(`Rangunia`);
console.log(typeof country);
console.log(typeof division);
console.log(typeof district);
console.log(typeof thana);
// console.log(typeof);
console.log(district);
console.log(thana);

const numbers = [10,20,30,40,50];
console.log(typeof numbers)
console.log(numbers);
console.log(numbers.length);
console.log(numbers[0]);

// const capital = `Dhaka`;
const capital = `Dha   ka`;
console.log(capital);
console.log(capital.length);
console.log(capital[0]);

for(let i =0;i<capital.length;i++){
    console.log(capital[i]);
}

const numbers2 = [101,201,301,401,501];
console.log(numbers2);//output is : [101,201,301,401,501];
numbers2[1]=55;
console.log(numbers2);//output is :[101,55,301,401,501];

const capital2 = `Dhakkka`;
console.log(capital2);
capital2[0]="F";
console.log(capital2); //no change here-->Dhakkka is Dhakkka;
//string is immutable--not change the elements of string
//array is mutable--change the elemnts of array

