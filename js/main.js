//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let i = 0; i < Object.keys(person3).length; i++) {
    console.log(Object.keys(person3)[i])
}

function listFood(person3) {
    let pizza = person3.pizza
    let tacos = person3.tacos
    let burgers = person3.burgers
    let ice_cream = person3.ice_cream
    let shakes = person3.shakes[0]

    console.log(`${pizza}, ${tacos}, ${burgers}, ${ice_cream}`)
    console.log(shakes)
}

listFood(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person (name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`${this.name} is ${this.age} years old`)
    }

    this.ageUp = (age) => {
        this.age++
        console.log(`${this.name} is now ${this.age} years old`)
    }
}

let personA = new Person('Joe Ramsy', 29)
let personB = new Person('Hailey Parker', 32)

personA.printInfo()
personB.printInfo()

personB.ageUp()
personB.ageUp()
personB.ageUp()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if 
    it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
// */

const stringLength = (words) => {
  return new Promise((resolve, reject) => {
    if (words.length > 10) {
      resolve("It's a BIG word");
    } else {
      reject("It's a short word");
    }  
  })
}

stringLength("haldoelwoosdfasdf")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error)
  })
  

// CodeWars Problem #1
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc 
// You are given an array (which will have a length of at least 3, 
//     but could be very large) containing integers. The array is either entirely 
//     comprised of odd integers or entirely comprised of even integers except 
//     for a single integer N. Write a method that takes the array 
//     as an argument and returns this "outlier" N.

function findOutlier(integers){
    let evenNums = []
    let oddNums = []
    
    for (let num of integers) {
      if (num % 2 == 0) {
        evenNums.push(num)
      } else {
        oddNums.push(num)
      }
    }
    
    if (evenNums.length == 1) {
      return evenNums[0]
    } else {
      return oddNums[0]
    }
  }

// Codewars Problem #2
//  https://www.codewars.com/kata/5ab6538b379d20ad880000ab/javascript 
// You are given the length and width of a 4-sided polygon. The polygon can 
// either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    if (l == w) {
      return l * w
    } else {
      return (l * 2) + (w * 2)
    }
  };




