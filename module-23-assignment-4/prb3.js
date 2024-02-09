/*
Prblm-3 te for of loop chalte hobe & jei elemnt er type number hobe seti  sodo blank array te push kora hobe,pore sei blank array te push kora shesh hole array t return dite hobe
if(typeof arrElmnt === number){
arr.push(arrElmnt)
}
return arr;
for of cholbe,er bitore uporer if condition t die elemnt dokabo
Function er sorotei takbe validation check
if ( typeof arr! == array){
return 'invalid'
}
Or
if(!Array.isArray(arr)){
return 'invalid'}

*/

function deleteInvalids(arr){
    if(!Array.isArray(arr)){
        return `Invalid`;
    }
    let arr2 = [];
    // for(let i =0;i<arr.length;i++){
    //     if(typeof arr[i] === `number` && arr[i] !== NaN  !isNaN(arr[i])){
    //         arr2.push(arr[i]);
    //     }
    // }
    for(let i =0;i<arr.length;i++){
        if(typeof arr[i] ===`number` && (!isNaN(arr[i]))){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
// let mixArray = [1,null,undefined,18,-19,NaN,"12",[1,2],{ob:"lala"}];
// let mixArray =  ['1',{num:2},NaN];
// let mixArray =   [1,2,-3];
// let mixArray =   {num:[1,2,3]};
let z = deleteInvalids(mixArray);
console.log(z);