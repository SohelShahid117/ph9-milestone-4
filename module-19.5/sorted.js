const person = [`akib`,'rakib','Sakib',"nokib",`dakib`];
console.log(person);

const person2 = person.sort();
console.log(person2);

const number = [5,1,3,7,2,8,4,9,6];
console.log(number);
number2 = number.sort();
console.log(number2);

const number3 = [5,1,53,7,12,8,4,9,6];
console.log(number3);
number4 = number3.sort();
console.log(number4);


const number5 = [5,1,53,7,12,8,4,9,6];
console.log(number5);
console.log(`number ascending`);
number6 = number5.sort(function(a,b){
    return (a-b);
});
console.log(number6);


const number7 = [5,1,53,7,12,8,4,9,6];
console.log(number7);
console.log(`number descending`);
number8 = number7.sort(function(a,b){
    return (b-a);
});
console.log(number8);


