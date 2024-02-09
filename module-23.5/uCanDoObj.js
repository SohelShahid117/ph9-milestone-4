const object = {
    a: 1, 
    b: 2,
    c: 3
};

for (const property in object) {
  console.log(object[property]);
  console.log(object.property); //undefined show korche keno?
}
console.log(`----------------`);

const nayok = {
    name : `Shakib khan`,
    age:35,
    id:121,
    address:`movie cinema`,
    isSingle:true,
    friends:[`apu`,`mahi`,`salman`,`jayed khan`],
    movie:[{name:`nmbr-1`,year:2015},{name:`nmbr-2`,year:2016},{name:`nmbr-3`,year:2018},{name:`nmbr-4`,year:2021}],
    act:function(){
        console.log(`acting like sakib khan`);
        for(i=1;i<=3;i++){
            console.log(`object er value function.abar function er bitore chalassi loop`);
        }
        return`object er key:value property function o hote pare`;
    },
    car:{
        brand:`tesla`,
        price:50000000,
        made:2025,
        manufacturer:{
            name:`Tesla`,
            ceo:`Elon Mask`,
            country:`USA`
        }
    }
}
console.log(nayok);
console.log(nayok.address);
console.log(nayok.age);
console.log(nayok.isSingle);
console.log(nayok.car);
console.log(nayok.friends);
console.log(nayok.act);
console.log(nayok.act());//nayok.act()--atatei function call hoye jabe,console e undefined dekabe.console e dekate hole function er return value lagbe
let z = nayok.act();//function er value paite hole tomar function e return dite hobe
console.log(z);

const std = {
    name :`Sohel`,
    age:32,
    profession:`business`
}
// for(let i=0;i<Object.keys(std).length;i++){
//     console.log(std[i]);
//     console.log(std.i);
// }

for(let item in std){
    console.log(std[item]);
    console.log(item + ":" + std[item]);
}
console.log(`----------------`);
console.log(Object.keys(std).length);
console.log(Object.keys(std));
console.log(Object.values(std));
console.log(Object.keys(std).length);