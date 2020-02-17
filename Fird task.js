// Написать функцию, принимающую массив объектов вида
// {...,
//     purchases: [23, 400, 34...]
// }
// и добавляющую свойство avgPurchase (среднее значение покупки) в каждый из объектов,
// и возвращающую среднее значение всех покупок в массиве

let objs = [
    {name: 'Morty', age: 15, purchases: [43, 25, 144]},
    {name: 'Rick', age: 70, purchases: [23, 400, 34]},
];

function Purch(p) {
    let sum = 0;
    let midd;
    for(let i=0; i<p.length; i++) {
        for(let j=0; j<p[i].purchases.length; j++) {
            sum += p[i].purchases[j];
        }
        midd = sum/p[i].purchases.length;
        console.log(midd);
        p.avgPurchase = midd;
        sum = 0;
    }
    return midd
}

a = Purch(objs);
console.log(a);
