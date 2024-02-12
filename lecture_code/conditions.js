let age = 35;
let usCitizenTime = 35;
let stateOfResidence = "Wisconsin";
let stateWantToRepresent = "Minnesota";

// '==' will do type coersion. Use '===' when you dont want javascript to do type coersion
if (
  age >= 30 &&
  usCitizenTime >= 9 &&
  stateOfResidence == stateWantToRepresent
) {
  console.log("You can be a senator!");
} else {
  console.log("You cannot be a senator");
}
