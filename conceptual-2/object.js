const cat = {
    name:`travis`,
    age:2,
    isMale:true,
    food:`Fish`,
    color : "white",
    species:'holo biral',
    "is Married":false
}
console.log(cat);
console.log(cat.age);  //dot notation
console.log(cat.isMale);
console.log(cat[`name`]); //bracket notation

let clr = `color`;
console.log(cat[clr]); //bracket notation
console.log(cat[`is Married`]); //bracket notation
cat.color=`Black`;
cat[`age`]=3;
cat.sound = "meo meo meo";
console.log(cat);

delete cat.species;
delete cat[`is Married`];
console.log(cat);

for(item in cat){
    console.log(item);
    console.log(typeof(item));
    // console.log(cat[`item`]);
    console.log(cat[item]);
}

const student ={
    name:{
        firstName:`Sohel`,
        lastName:"Shahid"
    },
    "fav Subject":[`Math`,"physics",'ICT'],
    isMale:true,
    age:32
}
console.log(student);
console.log(student.name.firstName);
console.log(student[`fav Subject`][1]);
console.log(student.age);