function monthlySavings(arr,livingCost){
    if(!Array.isArray(arr) && typeof livingCost !== `number`){
        return `Invalid Input`;
    }
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
    // console.log(earnMoney);
    const savings = earnMoney - livingCost;
    if(savings<0){
        return 'earn more';
    }
    else{
        return savings;
    }
    // console.log(savings);
    // return savings;
}
// let earn =  [1000,2000,3000];
// let cost = 5400;

// let earn =  [1000,2000,2500];
// let cost = 5000;

// let earn =  [900,2700,3400];
// let cost = 10000;

// let earn =  100;
// let cost = [900,2700,3400]

// let input =  [1000,2000,3000];
// let z = monthlySavings(earn,cost);
console.log(monthlySavings(earn,cost));