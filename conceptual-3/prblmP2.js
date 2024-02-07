//prblm -1

function AnaToVori(Ana) {
    if (typeof Ana !== `number` || Ana < 0) {
        return `pls provide a valid integer number`;
    }
    const Vori = Ana * 0.0625;
    return Vori;
}

console.log(AnaToVori(-16));
console.log(AnaToVori('16'));
console.log(AnaToVori(16));

