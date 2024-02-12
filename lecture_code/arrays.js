let animals = ["lion", "tiger", "cheetah"];

console.log(animals);
console.log(animals[1]);
console.log(animals[1000]);

animals[3] = "giraffe";
console.log(animals);
console.log(animals[5]);

animals[1] = "zebra";
console.log(animals);

animals.push("elephant");
console.log(animals);

let lastAnimal = animals.pop();
console.log(lastAnimal);
console.log(animals);

animals.unshift("deer");
console.log(animals);

let firstAnimal = animals.shift();
console.log(firstAnimal);

animals.reverse();
console.log(animals);

animals.sort();
console.log(animals);

console.log(animals.indexOf("lion"));
