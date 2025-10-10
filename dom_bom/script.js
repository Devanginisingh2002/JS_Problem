// console.log(document.firstChild);
// console.log(document.firstChild.firstChild);
// console.log(document.getElementsByTagName("h1"));

'Solving example 1'
// Example 1:
'Learnings:--'
'addEvent Listener takes two argument as what event it pass and what functionality should perform'
'In addEventListener, If we use function() {} (Normal fxn), it calls in current context, like who is calling'
'If we use arrow fxn here, then "this" points to global object & gives window object.'

'Programming Term'
/*
| Type of Function     | `this` refers to                              | Why                                                                                |
| -------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Arrow function**   | From **outer scope** (in this case, `window`) | Arrow functions **don’t have their own `this`**                                    |
| **Regular function** | The **element** that triggered the event      | Regular functions **get their `this` automatically** when called as event handlers |

*/

'Understanding way'
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


'Solving Example: 2'
let btn2 = document.getElementById("highlightFirstCity").addEventListener('click', function() {
    let changeList = document.getElementById("citiesList")
    changeList.onchange
})

