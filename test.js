const arr = [{ a: 1, b: 1 }, { c: 3, d: 4 }];

// arr.forEach((item, index, arr) => {
//     console.log('Текущий элемент ' + item)
//     console.log('Исходный массив ' + arr[index])
//   })

// let iterateAndReturnAllObjectsInArray = (array) =>
// Array.from(array, (obj) => obj);

// console.log(iterateAndReturnAllObjectsInArray(arr));

function iterateObjectsInArray(array) {
    for (let i=0; i < array.length; i++) {
        console.log(array[i].c);
    }
   
}

console.log(iterateObjectsInArray(arr));

// let aa = iterateObjectsInArray(arr);

// console.log(aa)




// const numbers = [1, 2, 3, 4]

// numbers.forEach((num) => {
//   const square = num * num
//   console.log('Квадрат числа равен: ' + square)
// })

const arr1 = [{ a: 1, b: 1 }, { c: 3, d: 4 }];
function returnObjects (someArray) {
    for( let item of arr1 ) {
        console.log(item)
        console.log(item.a)
      }  
}
returnObjects(arr1);

