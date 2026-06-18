const users = [
  { name: 'Марія', email: 'maria@example.com', age: 22 },
  { name: 'Ігор', email: 'igor@example.com', age: 35 },
  { name: 'Софія', email: 'sofia@example.com', age: 19 },
];

for (const { name, email, age } of users) {
  console.log(name, email, age);
}
