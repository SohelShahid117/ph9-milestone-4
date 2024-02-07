//validation check of number
function add(x, y) {
    if (typeof x !== `number` || typeof y !== `number`) {
        return `tik tak number den`;
    }
    // } else {
    //     return x + y;
    // }
    return x + y;

}
console.log(add(10, 15));
console.log(add('10', 15));
console.log(add(null, 15));
console.log(add(4, 5));
console.log(add(4));
console.log(add(undefined, 9));
console.log(add(40, 50));


function details(info) {
    return `My name is ${info.name}.My age is ${info.age}`
}
console.log(details({ name: `Sohel`, age: 32 }));
console.log(details({ name: `Sohel` }));
console.log(details({ name: `32`, age: `sohel` }));
console.log(`-------------------`);

function details2(info) {
    //info validation check
    if (typeof info !== `object`) {
        return `tik tak object dao.`
    } else if (!info.name || !info.age) {
        return `tik tak name & age dao.`
    }
    else if (typeof info.name !== `string` || typeof info.age !== `number`) {
        return `name string den r age number den`
    } else if (info.age < 12) {
        return `age must be greater den or equal 12`
    }
    return `My name is ${info.name}.My age is ${info.age}`
}
console.log(details2({ name: `Sumi`, age: 31 }));
console.log(details2({ name: 20, age: `tuhin` }));
console.log(details2({ age: 31 }));
console.log(details2({ name: `Sumi`, age: -31 }));
console.log(details2({ name: `tuhin`, age: 20 }));