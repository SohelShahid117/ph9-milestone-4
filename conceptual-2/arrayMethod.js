const x = `My name Is sahidul Islam sohel`;
const letterAll = x.split();
console.log(letterAll);
const letterSingle = x.split(``);
console.log(letterSingle);
for(ltr of letterSingle){
    console.log(ltr);
}

const word = x.split(" ");
console.log(word);
for(w of word){
    console.log(w);
}
for(let i = 0;i<word.length;i++){
    console.log(i,".",word[i]);
}
console.log(word)
let y = word.join(`|`);
console.log(y);