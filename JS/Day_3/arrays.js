


let arr = [1,2,3, "huh"];
console.log(arr);
console.log(arr.length);

console.log('----------------------------');


arr.unshift(0);  // add element at the beginning of the array

arr.push(4);      // add element at the end of the array

arr.shift();      // remove element from the beginning of the array

arr.splice(2,0, "Meetha");    // add element at the specific index

console.log(arr);
console.log(arr.length);


let fruits = ["Banana", "Orange", "Apple", "Mango","kiwi"];

fruits.splice(2,1, "Lemon", "Kiwi");

console.log(fruits);
console.log(fruits.length);