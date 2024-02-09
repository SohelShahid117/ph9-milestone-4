const number = [2,3,4,57,87,65];
for(let i =0;i<number.length;i++){
    console.log(number[i]);
}
console.log(`---------------------`);
for(item of number){
    console.log(item);
}
console.log(`---------------------`);

const products = [
    {id:1,name:`nokia phone`,price:12000},
    {id:2,name:`samsung phone`,price:22000},
    {id:3,name:`walton phone`,price:15000},
    {id:4,name:`iPhone`,price:112000},
    {id:5,name:`note book`,price:52000},
    {id:6,name:`dell laptop`,price:82000},
]
for(prdct of products){
    console.log(prdct);
}
console.log(`--------------------`);

function matchdProducts(prdct,search){
    console.log(prdct);
    console.log(`--------------------`);
    for(const item of prdct){
        console.log(item);
    }
}
matchdProducts(products,`phone`);
console.log(`--------------------`);

function matchdProducts2(prdct,search){
    for(const item of prdct){
        console.log(item.name);
        console.log(item.name.includes(search));
    }
}
matchdProducts2(products,`phone`);
console.log(`--------------------`);

function matchdProducts3(prdct,search){
    let matchedItem = [];
    for(const item of prdct){
        if(item.name.toLowerCase().includes(search.toLowerCase())){
            matchedItem.push(item);
        }
    }
    return matchedItem;
}
let resultMatchd = matchdProducts3(products,`phone`);
console.log(resultMatchd);
console.log(`--------------------`);