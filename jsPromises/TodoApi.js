class TodoApi {
  fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1').then(
      (response) => {
        if (!response.ok) {
          throw new Error(`Помилка запиту todo: ${response.status}`);
        }
        return response.json();
      },
    );
  }
}

export default TodoApi;
