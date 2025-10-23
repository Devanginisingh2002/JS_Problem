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
function fetchData(){
    return new Promise((resolve, reject) => {           // this is the way we create promise
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data fetched successfully");
            } else {
                reject("Error");
            }
        }, 2000);
    });
}

// This is the way we consume promise
fetchData()
    .then((data) => console.log(data))
    .catch((data) => console.log(data));