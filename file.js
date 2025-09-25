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

let topCities = ["Berlin", "Singapore", "New york"];
let hardCopiesCities = [...topCities];     //Two methods: spread and slice topCities.slice()
topCities.pop();
console.log(hardCopiesCities);

