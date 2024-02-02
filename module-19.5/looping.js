/*looping technique
1.while loop
2.for loop
3.do while loop
4.for of loop-array
5.for in loop-object
*/

const friends = [`Waren`,`Mark`,`Bill`,`Gates`];
for(const frnd of friends){
    console.log(frnd);
}

for(let i=0;i<10;i++){
    console.log(i);
    console.log(friends[i]);
}


for(let i=0;i<friends.length;i++){
    console.log(i);
    console.log(friends[i]);
}

const numbers = [10,11,23,45,46,75,78,98,908];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

console.log(`again number print using while loop`);

let j =0;
while(j<numbers.length){
    console.log(numbers[j]);
    j++;
}
