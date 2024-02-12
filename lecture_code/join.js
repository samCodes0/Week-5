function cityStateJoin(cityName, stateAbreviation) {
  return `${cityName}, ${stateAbreviation.toUpperCase()}`;
}

console.log(cityStateJoin("Minneapolis", "mn"));
