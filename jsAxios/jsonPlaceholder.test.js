import { test } from 'node:test';
import assert from 'node:assert/strict';
import apiClient from './apiClient.js';

test('GET /posts/1 — повертає пост з коректною структурою', async () => {
  const response = await apiClient.get('/posts/1');

  assert.equal(response.status, 200);
  assert.equal(response.data.id, 1);
  assert.equal(response.data.userId, 1);
  assert.equal(typeof response.data.title, 'string');
  assert.ok(response.data.title.length > 0);
  assert.equal(typeof response.data.body, 'string');
  assert.ok(response.data.body.length > 0);
});

test('GET /users/1 — повертає користувача з очікуваними полями', async () => {
  const response = await apiClient.get('/users/1');

  assert.equal(response.status, 200);
  assert.equal(response.data.id, 1);
  assert.equal(response.data.name, 'Leanne Graham');
  assert.equal(response.data.username, 'Bret');
  assert.equal(response.data.email, 'Sincere@april.biz');
  assert.equal(typeof response.data.address, 'object');
  assert.equal(typeof response.data.company, 'object');
});

test('GET /comments?postId=1 — повертає коментарі лише для поста 1', async () => {
  const response = await apiClient.get('/comments', {
    params: { postId: 1 },
  });

  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.data));
  assert.ok(response.data.length > 0);

  for (const comment of response.data) {
    assert.equal(comment.postId, 1);
    assert.equal(typeof comment.id, 'number');
    assert.equal(typeof comment.name, 'string');
    assert.equal(typeof comment.email, 'string');
    assert.equal(typeof comment.body, 'string');
  }
});

test('POST /posts — створює пост і повертає 201 з id', async () => {
  const newPost = {
    title: 'Test post from axios',
    body: 'Homework test body',
    userId: 1,
  };

  const response = await apiClient.post('/posts', newPost);

  assert.equal(response.status, 201);
  assert.equal(response.data.title, newPost.title);
  assert.equal(response.data.body, newPost.body);
  assert.equal(response.data.userId, newPost.userId);
  assert.equal(response.data.id, 101);
});

test('POST /todos — створює todo і повертає 201 з id', async () => {
  const newTodo = {
    title: 'Finish axios homework',
    completed: false,
    userId: 1,
  };

  const response = await apiClient.post('/todos', newTodo);

  assert.equal(response.status, 201);
  assert.equal(response.data.title, newTodo.title);
  assert.equal(response.data.completed, newTodo.completed);
  assert.equal(response.data.userId, newTodo.userId);
  assert.equal(response.data.id, 201);
});
