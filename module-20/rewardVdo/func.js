function hello(){
    console.log(`hello`);
}
hello();

function hello2(){
    // console.log(`hello again`);
    return `hello dear`;
}
let x = hello2();
console.log(x);

function hello3(){
    console.log(`hello before`);
    return `hello jan pakhi`;
    console.log(`hello after`);
}
let x2 = hello3();
console.log(x2);

function hello4(){
    console.log(`hello before`);
    return //undefine dekabe coz akane kisoi nai
    return `hello amar jan pakhi`;  //function e return takbe akti-->2t takle 1st return kaj korbe only
    console.log(`hello after`);
}
let x4 = hello4();
console.log(x4);

function name(myName){
    return `hello ` + myName;
}

console.log(name());

function name2(myName){
    // return `hello ` + myName;
    return `hello ${myName}`;
}

console.log(name2(`Sohel`));
console.log(name2(`Shahid`));
console.log(name2(`Aadil`));

const course = {
    subject :`Javascript`,
    duration:"2 month",
    credit:1.5
}

function courseDetails(obj){
    return obj;
}
console.log(courseDetails({a:34}));
console.log(courseDetails(course));

course.price =`$100`;
function courseDetails2(obj){
    return `my subject name is ${obj.subject}.Its course duration ${obj.duration}.If u take this 
    course u will earn ${obj.price} per day.`;
}
console.log(courseDetails2(course));

// function courseDetails3(obj){
//     console.log(obj);
//     return `my subject name is ${obj.subject}.Its course duration ${obj.duration}.If u take this 
//     course u will earn ${obj.price} per day.`;
// }
// console.log(courseDetails3());

function courseDetails4(obj){
    console.log(obj);
    return `my subject name is ${obj?.subject}.Its course duration ${obj?.duration}.If u take this 
    course u will earn ${obj?.price} per day.`;
}
console.log(courseDetails4());

function courseDetails5(obj){
    console.log(obj);
    return `my subject name is ${obj?.subject}.Its course duration ${obj?.duration}.If u take this 
    course u will earn ${obj?.price} per day.`;
}
console.log(courseDetails5(course));

function courseDetails6(obj){
    if(typeof obj === `object`){
        console.log(`valid input`)
    }else{
        return `invalid input`
    }
    console.log(obj);
    return `my subject name is ${obj?.subject}.Its course duration ${obj?.duration}.If u take this 
    course u will earn ${obj?.price} per day.`;
}
console.log(courseDetails6(course));
console.log(courseDetails6(3333));
console.log(courseDetails6(`3333`));
console.log(courseDetails6({a:34}));
console.log(courseDetails6([40,50]));  //sob array object but sob object array na

let arr = [10,20];
console.log(typeof arr);
console.log(typeof course);
console.log(typeof 5);
console.log(typeof `5`);

function courseDetails7(obj){
    if(typeof obj === `object` && !Array.isArray(obj)){
        console.log(`valid input`)
    }else{
        return `invalid input`
    }
    console.log(obj);
    return `my subject name is ${obj?.subject}.Its course duration ${obj?.duration}.If u take this 
    course u will earn ${obj?.price} per day.`;
}
console.log(Array.isArray([2,3]));
console.log(typeof([2,3]));

console.log(Array.isArray({a:2}));
console.log(typeof({a:2}));

console.log(courseDetails7([40,50]));
console.log(courseDetails7(course));