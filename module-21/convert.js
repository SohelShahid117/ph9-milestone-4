// vdo-21-2:inch to feet , miles to km-this vdo for sumi
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const shuvoHeight = inchToFeet(67);
console.log(shuvoHeight);

function inchToFeet2(inch) {
    const feet = parseInt(inch / 12);
    const inchee = inch % 12;
    return `shuvo is ${feet} feet & ${inchee} inch`;
}
const shuvoHeight2 = inchToFeet2(67);
console.log(shuvoHeight2);

//start from 8 min

// vdo-21-3
// vdo-21-4
// vdo-21-5
// vdo-21-6
// vdo-21-7
// vdo-21-8
// vdo-21-9