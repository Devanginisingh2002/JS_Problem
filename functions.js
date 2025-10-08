/*Q1. Write a function named 'makeTea' that takes one parameter, 'typeOfTea' and returns a string like "Making green tea" when called with 
"green tea". Store the result in a variable named 'teaOrder'.
*/
// function makeTea(typeOfTea) {
//    return `Making: ${typeOfTea}`
// }

// let teaOrder = makeTea("green Tea");
// console.log(teaOrder);


/*Q2. Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this fxn, create another fxn named 'confirmOrder'
that returns a message like "Order confirmed for chai". Call ConfirmOrder from within 'orderTea' and return the result.
*/

// function orderTea(teaType){
//     function confirmOrder(){
//         return 'order confirmed for chai';
//     }
//     return confirmOrder();
// }
// let checkTea = orderTea();
// console.log(checkTea);

/*Q3. Write an arrow fxn named 'calculateTotal' that takes two parameters: `price` and `quantity`.
      The fxn should return the total cost by multiplying the 'price' and 'quantity'.
      Store the result in a variable named 'totalCost'.
*/

// const calculateTotal = (price, quantity) => {
//     let totalCost = price * quantity;
//     return totalCost;
// }

// In second-way:
// const calculateTotal = (price, quantity) => price * quantity;
// console.log(calculateTotal(2, 4));

/*Q4. Write a fxn named 'processTeaOrder' that takes another fxn. 'makeTea' as a parameter and calls it with the argument 'earl grey'.
      Return the result of calling 'makeTea'.   // e.g: HigherOrder Fxn
*/
// function makeTea(type){
//       return `Making ${type} tea`;
// }
// function processTeaOrder(makeTea){
//       return makeTea("earl grey");
// }
// console.log(processTeaOrder(makeTea));

/*Q5. Write a fxn named 'createTeaMaker' that returns another fxn. The returned fxn should take one parameter, 'teaType', and return a message like 'Making green tea'. 
      Store the returned fxn in a variable named 'tea Maker' and call it with 'green tea'.
*/
// function anotherFxn(teaType){
//       return `making ${teaType}`
// }

// function createTeaMaker(){
//       return anotherFxn;
// }

// let teaMaker = createTeaMaker("green tea");
// console.log(teaMaker);

function createTeaMaker(){
      return function(teaType){
            return `Making ${teaType}`
      };
}
let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));