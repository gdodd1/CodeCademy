// Challenge 1, exporting a module

/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below

function circleArea(radiusLength){
  return PI * raduisLength * radiusLength
}

function squareArea(sideLength){
  return sideLength*sideLength
}

module.exports.circleArea = circleArea
module.exports.squareArea = squareArea


//Challenge 2, importing a module

/* app.js */ 

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.
// const shape = require('shape-area.js')
// const areaFunctions = 'replace_me';

// Option 2: import circleArea and squareArea with object destructuring

const { circleArea, squareArea } = require("./shape-area.js")

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = circleArea(radius);

const areaOfSquare = squareArea(sideLength);
