//filter array elemnt
const priceRate = [100,150,200,250,300,350,400,450,500];
let filterPriceRate = [];
for(let i =0;i<priceRate.length;i++){
    let currentRate = priceRate[i];
    if(currentRate<=300){
        filterPriceRate.push(currentRate);
    }
    console.log("filtering array in every iteration = ",filterPriceRate);
}
console.log("total filtering item is : ",filterPriceRate);

const filterPriceRate2 = priceRate.filter(function(currentElement){
    return currentElement<=200;
})
console.log("filtering item uing function is :",filterPriceRate2);


//calculating discount 
let discountPrice = [];
for(let i =0;i<priceRate.length;i++){
    let currentRate = priceRate[i];
    if(currentRate>=300){
        currentRate = currentRate - currentRate*10/100;
        // discountPrice.push(currentRate);
    }
    discountPrice.push(currentRate);
    // console.log("filtering array in every iteration = ",discountPrice);
}
console.log("discount price is ", discountPrice);


//calculating discount using map:
const discountPrice2 = priceRate.map(function(currentElement){
    if(currentElement>=300){
        currentElement =currentElement -currentElement*10/100;
        // discountPrice.push(currentRate);
    }
    return currentElement
})
console.log(discountPrice2);