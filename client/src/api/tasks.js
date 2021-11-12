import api from './apiInstance';

export async function getTodos() {
  try {
    const res = await api.get('/tasks');
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function getTodo(todo) {
  const { _id } = todo;
  try {
    const res = await api.get(`/tasks/${_id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function addTodo(todo) {
  try {
    const res = await api.post('/tasks', todo);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(id) {
  try {
    const res = await api.delete(`/tasks/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function updateTodo(id, todo) {
  try {
    const res = await api.put(`/tasks/${id}`, todo);
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function clearTodos() {
  try {
    const res = await api.delete(`/clear`);
    return res;
  } catch (error) {
    console.log(error);
  }
}
