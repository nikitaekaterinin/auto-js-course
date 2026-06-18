class UserApi {
  fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1').then(
      (response) => {
        if (!response.ok) {
          throw new Error(`Помилка запиту user: ${response.status}`);
        }
        return response.json();
      },
    );
  }
}

export default UserApi;
