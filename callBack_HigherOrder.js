/* Eg: for CallBack
You tell your mom:
“Mumma, I’ll finish my homework. When I’m done, call me for dinner.”
Now:
You’re doing your homework.
But you also gave your mom a function — “call me for dinner” — to run later, when homework is done.
That’s exactly how callbacks work in JavaScript!

A callback is simply a function passed as an argument to another function, and that function is called later (or back) when a task is done.
*/

function doHomework(callback) {
  console.log("Doing homework...");
  callback(); // calling it later
}

function callForDinner() {
  console.log("Mumma: Dinner is ready!");
}

doHomework(callForDinner);

/*
Here:
doHomework = main function
callForDinner = callback function (passed as argument)
When doHomework finishes, it calls back callForDinner.
*/

("Higher Order Function");

/*
    What is a Higher-Order Function (HOF)?
    A higher-order function is any function that either:
    Takes another function as an argument, OR
    Returns a function.
    So basically, HOFs love other functions! 
*/
function greet(name) {
  return function () {
    console.log("Hello, " + name + "!");
  };
}

let sayHello = greet("Devangini");
sayHello(); // "Hello, Devangini!"

/*
| Feature           | Callback Function                                                                                      | Higher-Order Function                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Meaning           | Function that is **passed into another function**                                                      | Function that **takes another function** (or returns one)                                      |
| Who calls it?     | **Another function** calls it later                                                                    | **You** define it to accept or return functions                                                |
| Example           | `setTimeout(() => console.log("Done!"), 1000)` → the arrow function is a callback                      | `setTimeout` itself is a **higher-order function**                                             |
| Real-life example | You say, “Mom, call me when dinner is ready.” → you are giving callback (your mom will call you later) | Your mom is the **higher-order function** — she accepts your instruction and executes it later |
*/
