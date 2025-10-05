// Q2. 5 to 1 loop using while
// let countDown = [];
// let j = 5;
// while(j >= 1){
//     countDown.push(j);
//     j--;
// }
// console.log(countDown);

// Q3: Use do-while loop, that prompts a user to enter their favorite tea type until they enter "stop", store each tea type in array names "teaCollection".
// let teaCollections = [];
// let tea;
// do{
//     tea = prompt("Enter favt tea: (type stop to finish) ");
//     if(tea !== "stop"){
//         teaCollections.push(tea);
//     }
// }
// while(tea !== "stop");
// console.log(teaCollections); 

// Q4: Write a 'do-while' loop that adds numbers from 1 to 3 and stores the result in a variable name 'total'.
// let total = 0;
// let num = 1;

// do{
//     total = total + num;
//     num++;
// }
// while(num <= 3);
// console.log(total);

// Q5: Write a for loop that multiplies each element in the array '[2, 4, 6]' by 2 and stores the result in a new array named 'multipliedNumbers'.
// let multipliedArr = [];
// let arr = [2, 4, 6];

// for(let i=0; i < arr.length; i++){
//     multipliedArr.push(arr[i] * 2);
// }

// console.log(multipliedArr);

// Q6:
let arr = ["paris", "london", "tokyo"];
let newArr = [];

for(let i=0; i<arr.length; i++){
    newArr.push(arr[i]);
}
console.log(newArr);