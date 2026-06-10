const car1 = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
};

const car2 = {
  brand: 'BMW',
  model: 'X5',
  owner: 2018,
};

const car3 = { ...car1, ...car2 };

console.log(car3);
