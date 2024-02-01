const firstName = `Sohel`;
const lastName = `Shahid`;
const fullName = firstName +" " + lastName;
console.log(fullName);

const fullName2 = firstName.concat(lastName);
console.log(fullName2);

const fullName3 = firstName.concat(` `).concat(lastName);
console.log(fullName3);
console.log(fullName2.includes(`d`));
console.log(fullName3.includes(`x`));