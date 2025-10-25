'Async Nature in JS'
// console.log("hey");

// setTimeout(() => {
//     console.log("D");
// }, 2000)
// for(let i=0; i<10; i++){
//     console.log(i);
// }


'Closures'
// function outer(){
//     let counter = 0;
//     return function (){
//         counter++;
//         return counter;
        
//     };
// }
// let increment = outer();
// console.log(increment());

'Promises'
// function fetchData(){
//     return new Promise((resolve, reject) => {           // this is the way we create promise
//         setTimeout(() => {
//             let success = true;
//             if(success){
//                 resolve("Data fetched successfully");
//             } else {
//                 reject("Error");
//             }
//         }, 2000);
//     });
// }

// // This is the way we consume promise
// fetchData()
//     .then((data) => console.log(data))
//     .catch((data) => console.log(data));

'Prototypal Inheritance'
// function Person(name){
//     this.name = name;
// }

// Person.prototype.greet = function(){
//     console.log(`Hello ${this.name}`);
// };

// let check = new Person("Devang");
// console.log(check);

'This and Binding Context'
// const Person = {
//     name: "Dev",
//     greet(){
//         console.log(`Hey I am ${this.name}`);
//     },
// };

// Person.greet();     // Output: Hey I am Dev

// const newPerson = Person.greet; 
// newPerson();        // Output: Hey I am undefined

// const boundGreet = Person.greet.bind({ name: "Riya" });
// boundGreet()        // Hey I am Riya

/* Here, In these cases:
 * First, we provide a proper context.
 * Second, We did not provide any context
 * Third, we bind the object and provide a separte context.
 * 
 * Learn more about: bind, call, apply.
*/

'async-await and Promise-all'
function fetchUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(
                {
                    name: "chai",
                    url: "https://chaicode.com"
                }
            )
        }, 2000)
    })
}

async function getUserData(){
    try{
        console.log("Fetching data....")
        const userData = await fetchUser();
        console.log("Data Fetch Successfully..")
        console.log("userData", userData);
        
    } catch(error) {
        console.log("Error fetching data", error);
    }
}

getUserData()