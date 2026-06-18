function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    (response) => {
      if (!response.ok) {
        throw new Error(`Помилка запиту todo: ${response.status}`);
      }
      return response.json();
    },
  );
}

function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1').then(
    (response) => {
      if (!response.ok) {
        throw new Error(`Помилка запиту user: ${response.status}`);
      }
      return response.json();
    },
  );
}

const allResults = Promise.all([fetchTodo(), fetchUser()]);
const raceResult = Promise.race([fetchTodo(), fetchUser()]);

allResults
  .then(([todo, user]) => {
    console.log('Promise.all — todo:', todo);
    console.log('Promise.all — user:', user);
  })
  .catch((error) => {
    console.error('Promise.all — помилка:', error.message);
  });

raceResult
  .then((result) => {
    console.log('Promise.race — результат:', result);
  })
  .catch((error) => {
    console.error('Promise.race — помилка:', error.message);
  });
