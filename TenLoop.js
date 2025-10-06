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
    let largeCities = {};
    let worldCities = {
            "Sydney": 5000000,
            "Tokyo": 9000000,
            "Berlin": 3500000,
            "Paris": 2200000
        };

        for(city in worldCities){
            if(city[value] < 2000000) {
                
            }
        }

