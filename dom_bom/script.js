// console.log(document.firstChild);
// console.log(document.firstChild.firstChild);
// console.log(document.getElementsByTagName("h1"));

"Solving example 1";
// Example 1:
"Learnings:--";
"addEvent Listener takes two argument as what event it pass and what functionality should perform";
"In addEventListener, If we use function() {} (Normal fxn), it calls in current context, like who is calling";
'If we use arrow fxn here, then "this" points to global object & gives window object.';

"Programming Term";
/*
| Type of Function     | `this` refers to                              | Why                                                                                |
| -------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Arrow function**   | From **outer scope** (in this case, `window`) | Arrow functions **don’t have their own `this`**                                    |
| **Regular function** | The **element** that triggered the event      | Regular functions **get their `this` automatically** when called as event handlers |

*/

"Understanding way";
/*
Think of it Like This (Kid-friendly Analogy):
Imagine you’re in a classroom:
A regular function says: “I’m responsible for myself — I’ll raise my own hand when I’m called.”
👉 So this refers to the button that gets clicked.
An arrow function says: “I don’t have my own hand — I’ll borrow whoever’s hand is above me.”
👉 So this refers to the outer environment (window here).
*/
// let btn = document.getElementById("changeTextButton").addEventListener('click', function() {
//     // console.log(this);
//     let para = document.getElementById("myParagraph")
//     para.textContent = "Hey";
//     // 'Further learn: difference b/w textContent & innerHTML'
// })

"Solving Example: 2";
/*
 * Learnings:
 * classList: It gives all the list of the classes are there.
 */
// let btn2 = document
//   .getElementById("highlightFirstCity")
//   .addEventListener("click", function () {
//     let changeList = document.getElementById("citiesList");
//     changeList.firstElementChild.classList.add("highlight");
//   });

"Solving Example: 3";
// let btn3 = document.getElementById("changeOrder")
//            .addEventListener("click", function(){
//             let changeCoffeeType = document.getElementById("coffeeType")
//             changeCoffeeType.textContent = "Espresso";
//             changeCoffeeType.style.backgroundColor = "brown";
//             changeCoffeeType.style.padding = "7px";
// })

"Solving Example: 4";
'Learning: 1. createElement: By this we can create any element like p, h1, h2, and more.'
'2. Processed Element known as Node.'
'3. appendChild'

// let btn4 = document.getElementById("addNewItem")
//            .addEventListener("click", function(){

//             let addNewItem = document.createElement("li");
//             addNewItem.textContent = "Icecream";
//             'These above sentences are processed HTMl, called as Nodes.'

//             document.getElementById("shoppingList").appendChild(addNewItem);
//            })

"Solving Example 5";
'Learning: lastElementChild property and remove'
// let btn5 = document.getElementById("removeLastTask")
//            .addEventListener("click", function(){
//             let taskList = document.getElementById("taskList")
//             taskList.lastElementChild.remove();
//            });

'Solving example 6'
'Learning: Events -> Click, mouseover, dblclick'
// let btn6 = document.getElementById("clickMeButton")
//            .addEventListener("dblclick", function(){
//             alert("hey")
//            })

'Solving example 7'
'Learning: Firstly, we console (event) then found many properties, so the console given the property (target), so we check'
'event.target.matches: Learnt about this'
'Here, we did (event.target.match(.teaItem) because in big project we have many li or ul'
// let btn7 = document.getElementById("teaList")
//            .addEventListener("click", function(event){
//                 if(event.target && event.target.matches(".teaItem")){
//                     alert(`Selected ${event.target.textContent}`);
//                 }
//            })

'Solving example 8'