const person = {
  firstName: 'Андрій',
  lastName: 'Шевченко',
  age: 28,
};

person.email = 'andriy.shevchenko@example.com';
delete person.age;

console.log(person);
