console.log("Hello World!");

let color = "blue";
var size = "medium"; // not recommended
const language = "JavaScript"; // cannot change this value
// language = "C#"; This is an error

let quantity = 5;
let distance = 4.5;

let text = "Hello World";
let message = "Hi Programmers";

console.log("There are " + quantity + " programmers");

let todayTemp = 75;
console.log("Todays temp is: " + todayTemp + " degrees Farenheit");

let tempC = ((todayTemp - 32) * 5) / 9;
console.log("Todays temperature is " + tempC.toFixed(2) + "C");
console.log(
  `Todays temperature is ${tempC.toFixed(
    2
  )} celsius which is equal to ${todayTemp} farenheit`
);

let className = "Web Programming";
let classCode = 2560;
let department = "ITEC";

console.log(`This class is ${department} ${classCode} ${className}`);
