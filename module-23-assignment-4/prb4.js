/*
    <script>
const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};

document.getElementById("demo").innerHTML = person.firstname + " is " + person.age + " years old.";
</script>

input :  {name:“kolimuddin” ,birthYear:1999,siteName:“google”}
output : Google#kolimuddin@1999
*/

function password(obj){
    if(obj.birthYear.toString().length !==4  || Object.keys(obj).length !==3){
        return 'invalid'
    }
    let lwrCase = obj.siteName.toLowerCase();
    let capitalise = lwrCase.charAt(0).toUpperCase() + lwrCase.slice(1);
    let pw = capitalise + `#` + obj.name + `@` + obj.birthYear;
    return pw;
}
// let object =  {
//     name:"kolimuddin" ,
//     birthYear:1999,
//     siteName:"GOOGLE"
// }

// let object =  {
//     name:"rahat",
//     birthYear:2002,
//     siteName:"Facebook"
// }

// let object =  {
//     name:"toky",
//     birthYear:200,
//     siteName:"Facebook"
// }

let object =  {
    name:"maisha",
    birthYear:2002
}
console.log(password(object));