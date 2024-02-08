/*
function(arr,livingCost){
let earnMoney=0;
for(i=0;i<=arr.length;i++){
earnMoney=earnMoney+arr[i]
}
let savings=earnMoney-livingCost;
return savings;
}

let arr2=[ ];
for(i=0;i<arr.length:i++){
if(arr[i]>=3000){
let x = arr[i]-arr[i]*(20/100);
arr2.push(x)
}
else{
arr2.push(arr[i])
}

console.log(arr2)
let arr[1000,2000,3000]
if(savings<0){
return 'earn more'}
else{
return savings }

earnMoney =0
for(let i=0;i<arr2.length;i++){
earnMoney = earnMoney + arr2[i]
}

*/

function monthlySavings(arr,livingCost){
    let arr2=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]>=3000){
            let x = arr[i]-arr[i]*(20/100);
        arr2.push(x)
    }
    else{
        arr2.push(arr[i])
    }
  }
    let earnMoney =0;
    for(let i=0;i<arr2.length;i++){
        earnMoney = earnMoney + arr2[i]
    }
    const savings = earnMoney - livingCost;
    return savings;
}
// let earn =  [1000,2000,3000];
// let cost = 5400;
let earn =  [1000,2000,2500];
let cost = 5000;
// let input =  [1000,2000,3000];
let z = monthlySavings(earn,cost);
// monthlySavings(earn,cost);
// console.log(z);
// console.log(monthlySavings(earn,cost));