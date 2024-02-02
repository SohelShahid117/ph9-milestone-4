/*
let i =1;
while(i<5){
    console.log("Aadil");
}
*/

let i =1;
let sum=0;
while(i<=5){
    console.log(i,".","Aadil");
    sum = sum + i;
    i++;
}
console.log(`total sum is -`,sum);


let mul = 1;
for(let i =1;i<=10;i++){
    console.log(mul,"*",i ,"=",mul = mul*i);
    // console.log(mul = mul*i);
}

let mul2 = 2;
for(let i =1;i<=10;i++){
    let x = 2*i;
    // console.log(2,"*",i ,"=",mul2 = 2*i);
    console.log(2,"*",i ,"=",x);
    // console.log(mul = mul*i);
}

const nums = [10,20,12,34,45,64,74,57,89];
// for(let j=0;j<nums.length;j++){
//     console.log(nums[j]);
// }
let evenSum = 0;
let oddSum = 0
for(let j=0;j<=nums.length-1;j++){
    // console.log(nums[j]);
    let x = nums[j];
    // if(nums[j]%2===0){
    if(x%2===0){
        // evenSum = evenSum + nums[j];
        evenSum = evenSum + x;
        console.log(`evenS=`,evenSum);
    }else{
        // oddSum = oddSum + nums[j];
        oddSum = oddSum + x;
        console.log(`oddS=`,oddSum);
    }
}

console.log("total even sum =",evenSum);
console.log("total odd sum =",oddSum);

let friends = [`karim`,`rahim`,`fahim`,'sahim','mahim'];
for(const frnd of friends){
    console.log(frnd);
}

let n = 7;
//do-while loop :condition false holeo print akbar dibe
do{
    console.log(n);
    n++;
}while(n>10);

let number = [10,3,20,34,65,70,58];
for(let nmbr of number){
    // console.log(nmbr); //akane-65 print hobe-->coz 65 print hoye then condition ache
    if(nmbr>=50){
        break;
    }
    console.log(nmbr);
}

for(let nmbr of number){
    if(nmbr%2===0){
        continue;//even hole abar for a fire jao,so console e jabena & even number print hobena
        //continue means skip
    }
    console.log(nmbr);
}

for(let nmbr of number){
    if(nmbr===65 || nmbr ===70){
        continue;//akane 65,70 print hobena
        //continue means skip
    }
    console.log(nmbr);
}

for(let nmbr of number){
    if(nmbr===65 && nmbr ===70){
        continue;  //akane sobgolo number print hobe
        //continue means skip
    }
    console.log(nmbr);
}