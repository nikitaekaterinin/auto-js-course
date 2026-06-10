async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  if (!response.ok) {
    throw new Error(`Помилка запиту todo: ${response.status}`);
  }

  return response.json();
}

async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  if (!response.ok) {
    throw new Error(`Помилка запиту user: ${response.status}`);
  }

  return response.json();
}

async function runRequests() {
  try {
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    const raceResult = await Promise.race([fetchTodo(), fetchUser()]);

    console.log('Promise.all — todo:', todo);
    console.log('Promise.all — user:', user);
    console.log('Promise.race — результат:', raceResult);
  } catch (error) {
    console.error('Помилка:', error.message);
  }
}

runRequests();
