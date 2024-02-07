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
function picnicBudget(picnicParticipants) {
    if (typeof picnicParticipants !== `number` || picnicParticipants < 0) {
        return `Participants should be valid a positive number`
    }
    let first100Cost = 0;
    let second101To200Cost = 0;
    let greater200Cost = 0;
    let unitCostForFirst100 = 5000;
    let unitCostFor101To200 = 4000;
    let unitCostForGreaterThan200 = 3000;
    if (picnicParticipants <= 100) {
        first100Cost = picnicParticipants * unitCostForFirst100;
        return first100Cost;
    }
    else if (picnicParticipants <= 200) {
        first100Cost = 100 * unitCostForFirst100;
        second101To200Cost = (picnicParticipants - 100) * unitCostFor101To200;
        const totalCost = first100Cost + second101To200Cost;
        return totalCost;
    }
    else {
        first100Cost = 100 * unitCostForFirst100;
        second101To200Cost = 100 * unitCostFor101To200;
        greater200Cost = (picnicParticipants - 200) * unitCostForGreaterThan200;
        const totalCost = first100Cost + second101To200Cost + greater200Cost;
        return totalCost;
    }
}
console.log(picnicBudget(201));


