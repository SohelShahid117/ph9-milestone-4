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
