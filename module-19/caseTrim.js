const school = `Uttar Pomra high school`;
console.log(school);
console.log(school.toLocaleLowerCase());
console.log(school.toLocaleUpperCase());


const subject = "Math";
const book = 'maTh';
if(subject===book){
    console.log("booth are same");
}else{
    console.log("booth are not same");
}

if(subject.toLocaleLowerCase()===book.toLocaleLowerCase()){
    console.log("booth are same");
}else{
    console.log("booth are not same");
}

const drink = `     water`;
const liquid = `water    `;
if(drink===liquid){
    console.log("panir opor nam jibon");
}else{
    console.log("somodrer pani khaite parina");
}

console.log(drink);
console.log(drink.trim());


if(drink.trim()===liquid.trim()){
    console.log("panir opor nam jibon");
}else{
    console.log("somodrer pani khaite parina");
}