/*
Prblm-1:
regularCost =500 + (8 * 50)
ticketSellEarning = sellTicketQty*ticketUnitPrice
profitLoss=ticketEarning-regularCost
return profitLoss

only sellTicketQty eta function parameter hisebe takbe,baki golo const die function er bitore takbe

function er vitore sorotei takbe-
if(sellTicketQty  !== number  || sellTicketQty <=0){
return give a +ve number for selling ticket qty}

return `Invalid Number `
*/

function  calculateMoney(sellTicketQty){

    if(typeof sellTicketQty  !== `number`  || sellTicketQty <=0){
        return `Invalid Number `;
    }
        
    const regularCost =500 + (8 * 50);
    const ticketUnitPrice = 120;
    const ticketSellEarning = sellTicketQty*ticketUnitPrice;
    const profitLoss=ticketSellEarning-regularCost;
    return profitLoss;

}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(10));
console.log(calculateMoney(-130));