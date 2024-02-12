function isGPA(gpa) {
  return gpa >= 0 && gpa <= 4 ? true : false;
}

console.log(isGPA(-1));
console.log(isGPA(3.2));
console.log(isGPA(300423042));
console.log(isGPA(1));
