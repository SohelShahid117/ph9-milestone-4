/*
const myString = "linto.yahoo.com.";
const stringLength = myString.length; // this will be 16
console.log('lastChar: ', myString.charAt(stringLength - 1)); // this will be the string

let nameLastChar=name.charAt(name.length-1)

if(nameLastChar! ==y || nameLastChar! =='u' ||...||...){
return good name}
else{
return 'bad name'}

function er sorotei takbe
if(typeof name! == 'string'){
return invalid}

typeof sellTicketQty! == 'number '
namer sheshe --> a,y,i,e,o ,u,w-->takle nam bengo kora jaina

*/

function checkName(strName){
    if(typeof strName !== 'string'){
        return `invalid`;
    }
    let strName2 = strName.toLowerCase();
    let nameLastChar=strName2.charAt(strName2.length-1);
    // console.log(nameLastChar);

    if(nameLastChar == `a` || nameLastChar == `y` || nameLastChar == `i` || nameLastChar == `e` || nameLastChar == `o` || nameLastChar == `u` || nameLastChar == `w`){
        return `good name`;
    }
    else{
        return 'bad name';
    }
}
/*akane check er bisoi hosse nam golo string symbol er modde na die sodo nam ta bosla kibabe O/P pawa jabe
    string chara bosale err ase
*/
// console.log(checkName(`Salman`));
// console.log(checkName(`RAFEE`));
// console.log(checkName(`Jhankar`));
// console.log(checkName(199));
console.log(checkName(`[“Rashed”]`));
