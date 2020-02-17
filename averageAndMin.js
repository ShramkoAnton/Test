// Написать функцию, принимающую массив чисел, и возвращающую
// минимальное и среднее арифметическое число из массива

let Array = [7, 3, 2, 5, 4];

// function arraySum(array){
//     let sum = 0;
//     for(let k = 0; k < array.length; k++){
//         sum += array[k];
//     }
//
//     let mid = sum/array.length;
//     return mid
// }
//
// function arrayMin(arr) {
//     for( let i=0; i<arr.length-1; i++ ){
//         for ( let j=0; j<arr.length-1-i; j++){
//             if(arr[j+1]<arr[j]) {
//                 let t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t;
//             }
//         }
//     }
//     return arr[0]
// }
//
// function midMin(a, b) {
//     return [a, b]
// }


function averageMin(arr) {
    for( let i=0; i<arr.length-1; i++ ){
        for ( let j=0; j<arr.length-1-i; j++){
            if(arr[j+1]<arr[j]) {
                let t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t;
            }
        }
    }// ставим по возрастанию все числа в массиве, чтобы вернуть наименьший элемент

    let sum = 0;
    for(let k = 0; k < arr.length; k++){
        sum += arr[k];
    }//Складываем все элементы массива

    let mid = sum/arr.length; // Делим на количество элементов массива

    return [arr[0], mid]
}

a = averageMin(Array);
console.log(a);