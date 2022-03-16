// create a variable with the value of kelvin
const kelvin = 300

//calculate celcius and store it as a variable
let celsius = (kelvin - 273);

//calculate farenheit
let calcFaren = (celsius * (9/5) + 32)

// calculate farnheit from celsius

let fahrenheit = Math.floor(calcFaren);

let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, ${celsius} degrees celsius and ${newton} newton.`);
