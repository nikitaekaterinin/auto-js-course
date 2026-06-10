import TodoApi from './TodoApi.js';
import UserApi from './UserApi.js';

const todoApi = new TodoApi();
const userApi = new UserApi();

async function runRequests() {
  try {
    const [todo, user] = await Promise.all([
      todoApi.fetchTodo(),
      userApi.fetchUser(),
    ]);
    const raceResult = await Promise.race([
      todoApi.fetchTodo(),
      userApi.fetchUser(),
    ]);

    console.log('Promise.all — todo:', todo);
    console.log('Promise.all — user:', user);
    console.log('Promise.race — результат:', raceResult);
  } catch (error) {
    console.error('Помилка:', error.message);
  }
}

runRequests();
