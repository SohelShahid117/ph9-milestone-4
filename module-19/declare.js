const pen = {brand : `Matador`,price:5,coloe:"black"};
const brandName = `brand`;
console.log(pen[brandName]);
const pencil = new Object();
console.log(pen);
console.log(Object.keys(pen));
console.log(Object.values(pen));
for(x in pen){
    console.log(x);
    console.log(pen[x]);
    console.log(x,":",pen[x]);
}
console.log(pencil);

const rubber = Object.create({});
console.log(rubber);