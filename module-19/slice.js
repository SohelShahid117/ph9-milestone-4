const address = `Bandorbon`;
const part = address.slice(2,7);
console.log(address);
console.log(part);

const sentence = `I am a good and hardworking person.`
console.log(sentence);
console.log(sentence.split());
console.log(sentence.split(""));

let splitSentence = sentence.split(" ")
console.log(splitSentence);
console.log(splitSentence.join(`|`));
console.log(sentence.split("a"));

const frndStr = `Karim,rahim,sahim,fahim`;
const frnd = frndStr.split(`,`);
console.log(frnd);
const frnd2 = frndStr.split(`im`);
console.log(frnd2);

const realFrnd = [ 'Karim', 'rahim', 'sahim', 'fahim' ];
console.log(realFrnd.join(`+`));
// console.log(realFrnd.split(`im`));