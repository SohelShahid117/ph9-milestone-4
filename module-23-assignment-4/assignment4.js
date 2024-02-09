// console.log(`-------------Prblm-1------------------`);

function  calculateMoney(sellTicketQty){

    if(typeof sellTicketQty  !== `number`  || sellTicketQty <0){
        return `Invalid Number `;
    }
    const securityCost = 500;
    const staffQty = 8
    const staffCost = 50;
    const regularCost =securityCost + (staffQty * staffCost);
    const ticketUnitPrice = 120;
    const ticketSellEarning = sellTicketQty*ticketUnitPrice;
    const profitLoss=ticketSellEarning-regularCost;
    return profitLoss;
}
/*
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(10));
console.log(calculateMoney(-130));
*/

// console.log(`-------------Prblm-2------------------`);

function checkName(strName){
    if(typeof strName !== 'string'){
        return `invalid`;
    }
    let strName2 = strName.toLowerCase();
    let nameLastChar=strName2.charAt(strName2.length-1);
    // console.log(nameLastChar);

    if(nameLastChar === `a` || nameLastChar === `y` || nameLastChar === `i` || nameLastChar === `e` || nameLastChar === `o` || nameLastChar === `u` || nameLastChar === `w`){
        return `good name`;
    }
    else{
        return 'bad name';
    }
}
/*
console.log(checkName(`Salman`));
console.log(checkName(`RAFEE`));
console.log(checkName(`Jhankar`));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
*/

// console.log(`-------------Prblm-3------------------`);

function deleteInvalids(arr){
    if(!Array.isArray(arr)){
        return `Invalid Array`;
    }
    let arr2 = [];
    for(let i =0;i<arr.length;i++){
        if(typeof arr[i] ===`number` && (!isNaN(arr[i]))){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
/*
let mixArray = [1,null,undefined,18,-19,NaN,"12",[1,2],{ob:"lala"}];
let mixArray =  ['1',{num:2},NaN];
let mixArray =   [1,2,-3];
let mixArray =   {num:[1,2,3]};
let z = deleteInvalids(mixArray);
console.log(z);
*/

// console.log(`-------------Prblm-4------------------`);

function password(obj){
    if(obj.birthYear.toString().length !==4  || Object.keys(obj).length !==3){
        return 'invalid'
    }
    let lwrCase = obj.siteName.toLowerCase();
    let capitalise = lwrCase.charAt(0).toUpperCase() + lwrCase.slice(1);
    // let pw = capitalise + `#` + obj.name.slice(0,3) + `@` + obj.birthYear;
    let pw = capitalise + `#` + obj.name + `@` + obj.birthYear;
    return pw;
}

/*
let object =  {
    name:"kolimuddin" ,
    birthYear:1999,
    siteName:"GOOGLE"
}
//
let object =  {
    name:"rahat",
    birthYear:2002,
    siteName:"Facebook"
}
//
let object =  {
    name:"toky",
    birthYear:200,
    siteName:"Facebook"
}
//
let object =  {
    name:"maisha",
    birthYear:2002
}
console.log(password(object));
*/

// console.log(`-------------Prblm-5------------------`);

function monthlySavings(arr,livingCost){
    if(!Array.isArray(arr) && typeof livingCost !== `number`){
        return `Invalid Input`;
    }
    let arr2=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]>=3000){
            let x = arr[i]-arr[i]*(20/100);
        arr2.push(x);
    }
    else{
        arr2.push(arr[i]);
    }
  }
    let earnMoney =0;
    for(let i=0;i<arr2.length;i++){
        earnMoney = earnMoney + arr2[i];
    }
    const savings = earnMoney - livingCost;
    if(savings<0){
        return 'earn more';
    }
    else{
        return savings;
    }
}
/*
//
let earn =  [1000,2000,3000];
let cost = 5400;
//
let earn =  [1000,2000,2500];
let cost = 5000;
//
let earn =  [900,2700,3400];
let cost = 10000;
//
let earn =  100;
let cost = [900,2700,3400];
//
let input =  [1000,2000,3000];
let z = monthlySavings(earn,cost);
console.log(monthlySavings(earn,cost));
*/