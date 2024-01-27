let salary = 25000;
const height = 75;
let isBCS = true;

if (salary > 25000 && height > 72) {
    console.log("eso baba kobul");
} else {
    console.log("vaag tui mokbul");
}

if (salary > 25000 || height > 72) {
    console.log("eso baba kobul");
} else {
    console.log("vaag tui mokbul");
}

if (salary > 25000 || height > 72 && isBCS == true) {
    console.log("eso baba kobul");
} else {
    console.log("vaag tui mokbul");
}

if ((salary > 25000 && height > 72) && isBCS == true) {
    console.log("eso baba kobul");
} else {
    console.log("vaag tui mokbul");
}

let age = 35;
let price = 500;

if (age <= 12) {
    console.log("you can eat free");
}
else if (age >= 60) {
    //50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age >= 50) {
    //40% discount
    const discount = price * 40 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age > 40) {
    //30% discount
    const discount = price * 30 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age > 30) {
    //20% discount
    const discount = price * 20 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age > 20) {
    //10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else {
    console.log(price);
}
//nested if else
const money = 5;
if (money > 300) {
    console.log("tui borolok");
} else {
    if (money > 100) {
        console.log("toi meduim level");
    } else {
        if (money > 10) {
            console.log("tui kola kha");
        } else {
            console.log("tui fakira");
        }
    }
}

//ternary
let boyos = 20;
boyos > 18 ? console.log("vote dao") : console.log("ghomie tako");

let aloPrice = 50;
// const isLeader = true;
const isLeader = false;

// aloPrice = isLeader = true?0 : aloPrice + 10;
// aloPrice = isLeader = false?0 : aloPrice + 10;
// aloPrice = isLeader ? 0 : aloPrice + 10;
console.log(aloPrice);

// if(isLeader === true){
//     if(price>1000){
//         price = price/2;
//         console.log(price);
//     }else{
//         price = 0;
//         console.log(price);
//     }
// }else{
//     price = price + 100;
//     console.log(price);
// }

// isLeader === true ? 0 : price+ 10;
isLeader === true ?
    price > 1000 ? console.log(price / 2) : console.log(0)
    : console.log(price + 100);

