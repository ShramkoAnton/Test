// Написать функцию, принимающую массив объектов вида
// { name: "", age: 199}
// и возвращающую средний age, всех объектов старше 18

let peoples = [
    {name: 'Jhon', age: 20},
    {name: 'Sam', age: 18},
    {name: 'Rick', age: 70},
    {name: 'Morty', age: 15},
    {name: 'Sherri', age: 30}
];

function adult(p) {
    let sum = 0;
    let a = 0;
    let mid;
    for(let i =0; i< p.length; i++) {
        if(p[i].age > 18) {
            sum += p[i].age;
            a++;
        }
    }
    mid = sum/a;
    return mid
}

a = adult(peoples);
console.log(a);