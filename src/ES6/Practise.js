// // Let and Const
// let a = 'nandha' // mutable
// a = 'raja'
// const b = 'nandha' // immutable
// b = 'raja' // throws error (Assignment to constant variable)
// console.log(a , b)

// // Traditional Function
// function sum(a,b){
//   return a+b
// }
// // ES6 Function or Arrow Functions
// const sumArrow = (a,b) => { return a+b }
// console.log(sum(4,2),sumArrow(2,4))

// // Object Destructuring
// // name - property // raja - value
// const object = {'name':'raja','age':25}
// //Values can be accessed with the help of properties only
// let { name , age } = object
// console.log(typeof(name),typeof(age))
// console.log(name,age)

// // Array Destructuring
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // Since each items in an array is an element, it is accessed via indexes
// let [ element3, element4 ] = fruits
// console.log(element3,element4)

// // For-Of loop
// const cars = ["BMW", "Volvo", "Mini"]; // Array of Strings/Names
// for(let car of cars){
//   // BMW
//   // Volvo
//   // Mini
//   console.log(car)
//   // BMW -> Volvo
//   // Volve -> Mini
// }
// const language = "JavaScript"; // String
// for(let letter of language){
//   console.log(letter)
// }

// // Map Objects
// const fruits = new Map([
// ["apples", 500],
// ["bananas", 300],
// ["oranges", 200]
// ]);
// console.log(typeof(fruits))
// console.log(fruits)
// console.log(fruits.get("apples"))

// Set Objects - Doesnt allow duplicates adding individually
// const cars = new Set()
// console.log(typeof(cars))
// cars.add("BMW")
// cars.add("BMW")
// cars.add(["cars","BMW"])
// cars.add(["cars","BMW"])
// cars.add(["cars","BMW"])
// console.log(cars)

// Spread Operator ...
// const duke200 = {
//   'brand' : 'KTM',
//   'model' : 'Duke',
//   'engine' : 200
// }

// const duke250 = {
//   'brand' : 'KTM',
//   'model' : 'Duke',
//   'engine' : 250
// }

// const duke390 = {
//   'brand' : 'KTM',
//   'model' : 'Duke',
//   'engine' : 390
// }

// const dukeBaseObject = {
//   'brand' : 'KTM',
//   'model' : 'Duke',
//   'color' : 'Black'
// }
// const duke200 = {
//   ...dukeBaseObject, //copy of an object and can be modified with new values
//   'engine' : 200,
//   'color' : 'Orange'
// }
// const duke250 = {
//   ...dukeBaseObject,
//   'engine' : 250,
//   'color' : 'Grey'
// }
// const duke390 = {
//   ...dukeBaseObject,
//   'engine' : 390
// }
// console.log(duke200)
// console.log(duke250)
// console.log(duke390)

// // array_name.slice(s, e) // it includes s but not e
// let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
// let new_cars = cars.slice(0,4) // returns a new array
// console.log(new_cars)

// // array_name.splice(i, n, item 1, item 2, .....item n)
// let newCars = cars.splice(0, 1, 'BMW');
// let newCars_ = cars.splice(2, 2, 'BMW' , 'Mini');// it wont return a new array it returns the operation
// console.log(newCars)
// console.log(newCars_)

// let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
// let newCars = cars.slice(1, -3);
// console.log(newCars);


// // String In-Built
// let a = 'helloworld'
// console.log(a.includes('h')) // return an boolean value
// console.log(a.startsWith('h')) // return an boolean value
// console.log(a.endsWith('d')) // return an boolean value

// // Array Methods
// // Entries - Converts to Key Valur Pair
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// for(let fruit of f){
//   console.log(fruit)
// }

// // from() - Creates an newArray from the data given inside
// let newArray = Array.from("raja")
// console.log(newArray)

// // keys() - Extracts keys of an array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// console.log(fruits, keys)
// for(let fruit of keys){
//   console.log(fruit)
// }

// // find() and findIndex()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.find(findOrange));
// console.log(fruits.findIndex(findOrange));

// //Traditional
// function findOrange(value){
//   return value.startsWith('O');
// }

// //ES6
// console.log(fruits.find( value => value.startsWith('A')))

// // Math In-Built Functions
// console.log(Math.trunc(4.9), Math.trunc(4.2), Math.trunc(-4.2))
// console.log(Math.sign(-4),Math.sign(0),Math.sign(4))
// console.log(Math.cbrt(8))
// console.log(Math.log2(2))
// console.log(Math.log10(10))

// // Number In-Built Functions
// console.log(Number.EPSILON)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.isInteger(10))
// console.log(Number.isSafeInteger(10))
// console.log(Number.isFinite(10))
// console.log(Number.isNaN('raja'))
// //Safe integers are all integers from -(253 - 1) to +(253 - 1). This is safe: 9007199254740991. This is not safe: 9007199254740992.

// // map()
// const numbers = [1,2,3,4,5]
// console.log(numbers.map( number => number * 2 ))

// // filter()
// console.log(numbers.filter( number => number % 2 === 0 ))
// // == equals // === equals with type

// // reduce() - Sum of Elements
// console.log(numbers.reduce( (prev,curr) => curr = prev + curr ))