function printDetails(name, age, addrs) {
    console.log(`My name is ${name}.My age is ${age}.My address is ${addrs}`);
}
printDetails(`Sohel`, 33, `Rangunia`);
printDetails(`Sumi`, 32, `Rangunia`);

function add(x, y) {
    const total = x + y;
    console.log(`inside function total is : ${total}`);
    return total
}
const z = add(65, 96);
console.log(`outside function total is : ${z}`);

function giveNumber() {
    console.log(5);  //5 print dibe 
    console.log(`inside function:15`);
    // return 120;
}

const x = giveNumber();
console.log(`outside function`, x);
/*undefine dibe-->karon function calling er somoi 5 print hoye gese but return na dewai x er value kono kiso set hoini*/