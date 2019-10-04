console.log(process.argv);

let inputs = process.argv;

// Require conversion file before I can use
const convert = require('./conversion.js');

/* PART 1: Write a nodejs command line program that takes a hex color as an argument and returns the rbg CSS value. */

// Inputs is now an array with index 0 and 1 fixed
// The next argument that we need to pass in will be at index 2
let firstArgument = inputs[2]; // Function
let secondArgument = inputs[3]; // Hex color

// Get the function from conversion file
// Save it to a variable
let conversionFunct = convert[firstArgument];
console.log("Function is >>> " + conversionFunct);

// Call the function with the first argument passed in: \#FFFFFF
let red = conversionFunct(secondArgument);
let green = conversionFunct(thirdArgument);
let blue = conversionFunct(fourthArgument);

/* PART 2: functionality to put in 3 number values and get out the hex color*/

/*let processThisToRGB = convert.rgbToHex(parseInt(inputs[4]),parseInt(inputs[5]),parseInt(inputs[6]);*/

let processThisToRGB = convert.rgbToHex(red,green,blue);
console.log(rgbToHex(red, green, blue));

// Use componentToHex value to convert RGB

