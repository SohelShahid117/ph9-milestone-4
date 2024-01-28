let x = 30;
if (x === 30) {
    console.log("x equal to 30");
} else {
    console.log("x not equal to 30");
}


let y = 30
if (y !== 40) {
    console.log("y not equal to 40");
} else {
    console.log("y equal to 40");
}

var temp = 30;
if (temp > 30) {
    console.log("its a hot day")
} else if (temp > 20) {
    console.log("its a warm day")
} else if (temp > 10) {
    console.log("its a cool day")
} else {
    console.log("its a cold day")
}

var hour = 14;
if(hour>=6 && hour<=12){
    console.log("good morning");
}else if(hour > 12 && hour <= 18){
    console.log("good afternoon");
}else{
    console.log("good evening");
}

if(hour>=6 && hour<=12){
    console.log("good morning");
}else{
    if(hour > 12 && hour <= 18){
        console.log("good afternoon");
    }else{
        console.log("good evening");
    }
}

var a = 8;
if(a>5 || a >10){
    console.log("true");
}else{
    console.log("false");
}

// var b = 6;
var b = 3;
var message;
if(b>5){
    message = "b is bigger than 5";
}else{
    message = "b is less than 5";
}
console.log(message);

//ternary syntax
// condition?true block : false block

b>5 ? console.log("b is bigger than 5") : console.log("b is less than 5");

message = b>5 ? "b is bigger than 5" : "b is less than 5";
console.log(message);

// == compare only value  === compare value with data type
console.log(10==10);
console.log(10=="10");
console.log(10===10);
console.log(10==="10");

console.log(!(10==10));
