// Q1. Write a 'for' loop that loops through the array ["green tea", "black tea", "chai", "oolang tea"] and stops the loop when it finds "chai". Store all teas before "chai" in a new array named 'selected Teas'.
// let chai = ["green tea", "black tea", "chai", "oolang tea"];
// let selectedTea = [];

// for (let i = 0; i < chai.length; i++) {
//   if (chai[i] === "chai") {
//     break;
//   }
//   selectedTea.push(chai[i]);
// }
// console.log(selectedTea);

// Q2. Write a 'for' loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris". Store the other cities in the new array named 'visitedCities'.

// let cities = ["London", "New York", "Paris", "Berlin"];
// let visitedCities = [];
// for (let i = 0; i < cities.length; i++) {
//   if (cities[i] === "Paris" || cities[i] === "paris") {
//     continue;
//   }
//   visitedCities.push(cities[i]);
// }
// console.log(visitedCities);

// Q3. Use a 'for-of' loop to iterate through the array '[1, 2, 3, 4, 5]' and stop when the number '4' is found. Store the numbers before '4' in an array named 'smallNumbers'.

// let arr = [1, 2, 3, 4];
// let smallNumbers = [];
// for (let num of arr) {
//     if(num === 4){
//         break;
//     }
//     smallNumbers.push(num);
// }
// console.log(smallNumbers);

// Q4. Use a 'for-of' loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea", store the other teas in an array named 'prefered teas'.

// let teas = ["chai", "green tea", "herbal tea", "black tea"];
// let preferedTea = [];

// for(let tea of teas){
//     if(tea === "herbal tea"){
//         continue;
//     }
//     preferedTea.push(tea);
// }
// console.log(preferedTea);

/* Q5. Use a 'for-in' loop to loop through an object containing city populations. 
    Stop the loop when the population of "Berlin" is found and store all previous
    cities populations in a new object named 'cityPopulations'.

    let citiesPopulation = {
        "London": 8900000,
        "Newyork": 8400000,
        "Paris": 2200000,
        "Berlin": 350000
    
    }
*/
// let citiesPopulation = {
//     "London": 8900000,
//     "Newyork": 8400000,
//     "Paris": 2200000,
//     "Berlin": 350000
// }
// let cityPopulations = {};

// for(let city in citiesPopulation){
//     if(city === "Berlin"){
//         break;
//     }
//     cityPopulations[city] = citiesPopulation[city];
// }
// console.log(cityPopulations);
// console.log(Object.keys(citiesPopulation))     // keys: London, Newyork, Paris, Berlin
// console.log(Object.values(citiesPopulation))   // values: 8900000, 8400000, 2200000, 3500000

/* Q6. Use a `for-in` loop to loop through an object containing city populations.
        Skip any city with a population below 2 million and store the rest in a new object named 'largeCities'.
        
        let worldCities = {
            "Sydney": 5000000,
            "Tokyo": 9000000,
            "Berlin": 3500000,
            "Paris": 2200000
        }; 
*/
// let largeCities = {};
// let worldCities = {
//         "Sydney": 5000000,
//         "Tokyo": 9000000,
//         "Berlin": 3500000,
//         "Paris": 2200000
//     };

//     for(city in worldCities){
//         if(worldCities[city] >= 2000000) {
//             continue;
//         }
//     largeCities[city] = worldCities[city];
//     }
//     console.log(largeCities);

/* Q7. Write a 'forEach' loop that iterates through the array ["earl grey", "green tea", "chai", "oolang tea"]. Stop the loop when "chai"
is found, and store all previous tea types in an array named 'availableTeas'.
*/

// let teas = ["earl grey", "green tea", "chai", "oolang tea"];
// let availableTeas = [];

// teas.forEach((tea) => {
//     if(tea === "chai"){
//         return;      // we dont use 'break' & 'return' keyword inside a fxn, we return from there.
//     }
//     availableTeas.push(tea);
// });

// console.log(availableTeas);

/* Q8. Write a 'forEach' loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
Skip "Sydney" and store the other cities in a new array named 'traveledCities'.
*/

// let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
// let traveledCities = [];

// cities.forEach((city) => {
//     if(city === "Sydney"){
//         return;
//     }
//     traveledCities.push(city);
// })
// console.log(traveledCities);

/*Q9. Write a 'for' loop that iterates through the array [2, 5, 7, 9]. Skip the value '7' and multiply the rest by 2. 
      Store the results in a new array named 'doubledNumbers'.
*/

// let arr = [2, 5, 7, 9];
// let doubledNumbers = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 7) {
//     continue;
//   }
//   doubledNumbers.push(arr[i] * 2);
// }
// console.log(doubledNumbers);

/*Q10. Use a 'for-of loop to iterate through the array ["chai", "black tea", "jasmine tea", "herbal tea"]
    and stop when the length of the current tea name is greater than 10. Store the teas iterated over in an array named 'shortTeas'.
*/

let teas = ["chai", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (let tea of teas) {
    if(tea.length > 10){
        break;
    }
    shortTeas.push(tea);
}

console.log(shortTeas);
