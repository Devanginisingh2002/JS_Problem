// let teaFlavors = ["green tea", "black tea", "oolang tea"];
// let firstTea = teaFlavors[2];
// console.log(firstTea);

// let teaTypes = ["herbal tea", "white tea", "masala chai"]
// // white tea = jasmine tea
// teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

// let visitedCities = ["Mumbai", "Sydney"];
// let addingCities = visitedCities.push("Berlin");
// console.log(visitedCities);

// let visitedCities = ["Mumbai", "Sydney"];
// visitedCities[visitedCities.length] = "Berlin";
// console.log(visitedCities);

// let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
// teaOrders.pop();
// console.log(teaOrders);

// let popularTea = ["green tea", "oolang tea", "chai"];
// let softCopyTeas = [...popularTea];  // memory is different
// popularTea.pop()
// console.log(popularTea);
// console.log(softCopyTeas);
// output:  
// [ 'green tea', 'oolang tea' ]
// [ 'green tea', 'oolang tea', 'chai'];

// let popularTea = ["green tea", "oolang tea", "chai"];
// let softCopyTeas = popularTea;
// popularTea.pop();
// console.log(softCopyTeas);   // here, memory allocation is same
// console.log(popularTea);
// output:
// [ 'green tea', 'oolang tea' ]
// [ 'green tea', 'oolang tea' ]

// let topCities = ["Berlin", "Singapore", "New york"];
// let hardCopiesCities = [...topCities];     //Two methods: spread and slice topCities.slice()
// topCities.pop();
// console.log(hardCopiesCities);

'Learn about hard and soft copies'

// Q8.
let city1 = ["mexico", "europe"]
let city2 = ["china", "england"];
// let mergeCity = city1 + city2;
// console.log(typeof mergeCity);  // turn out as string

// let mergeCity = [city1, city2];
// console.log(mergeCity);     // geeting array of array

// // concat method is better way:
// let mergeCity = city1.concat(city2)
// console.log(mergeCity); 


// Q9.
// let teaMenu = ["masala chai", "oolang chai", "green tea"];
// let menuLength = teaMenu.length;
// console.log(menuLength);

//Q10.
let cities = ["London", "kyoto", "capetown", "vancover"];
let isLondonList = cities.includes("London");
console.log(isLondonList);