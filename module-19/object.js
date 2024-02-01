const bottle = {
    brand :'N.Mohammad',
    price : 45,
    weight :200,
    isCleaned:true,
    color : "white",
    drinks : `Water`
}
console.log(bottle);
console.log(bottle.color);  // dot notation
console.log(bottle[`isCleaned`]); //bracket notation

const dam = bottle[`price`];
console.log(dam);

const person = {
    name : `Sohel Shahid`,
    age:32,
    profession:`developer`,
    salary:65000.00,
    married:true,
    'fav place':[`bandorbon`,`saintmartin`,`hoksobazar`,`Kua kata`]
}

console.log(person[`fav place`]);
console.log(person[`fav place`][2]);

person.profession=`Engineer`;
person[`salary`] = 80000.00;
person[`fav place`] = ['maldives',`Singapore`,"australia",'Canada'];
console.log(person);
console.log(person[`profession`]);
console.log(person[`fav place`]);

const professionName = `profession`;
person[professionName] = `devOps engr`;
console.log(person);
console.log(person[professionName]);