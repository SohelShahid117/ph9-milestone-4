//prblm -2
function pandaCost(singara, samucha, jilapi) {
    //validation check 
    if (typeof singara !== `number` || typeof samucha !== `number` || typeof jilapi !== `number`) {
        return `pls enter a number`;
    } else if (singara < 0 || samucha < 0 || jilapi < 0) {
        return `pls enter a +ve number or 0 `;
    }
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;
    const total = (singara * singaraPrice) + (samucha * samuchaPrice) + (jilapi * jilapiPrice);
    return total;
}
console.log(pandaCost(1, 1, 1))
console.log(pandaCost(2, 1, 2))
console.log(pandaCost(-2, 1, 2))

//prblm-3
//from-11 min