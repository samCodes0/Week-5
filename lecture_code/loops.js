let birds = ["Owl", "Robin", "Eagle"];
console.log(birds);

birds.forEach(function (bird, index) {
  // repeat once for each object in the array
  // function will be called for each object in the array
  console.log(index, bird.toUpperCase());
});

// traditional for loop
for (let i = 0; i < birds.length; i++) {
  console.log(i, birds[i]);
}
