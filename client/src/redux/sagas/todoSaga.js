import * as type from '../types';

import { put, takeEvery } from 'redux-saga/effects';
import { getTodos, addTodo, clearTodos, deleteTodo, updateTodo } from '../../api/tasks';

function* handleGetTodos() {
  try {
    const todos = yield getTodos();
    console.log(todos);
    yield put({ type: type.SET_TODOS, payload: todos });
  } catch (error) {
    console.log(error);
  }
}
function* handleAddTodo({ payload }) {
  try {
    yield addTodo(payload);
    yield put({ type: type.GET_TODOS_REQUESTED });
  } catch (error) {
    console.log(error);
  }
}
function* handleDeleteTodo({ payload }) {
  try {
    yield deleteTodo(payload);
    yield put({ type: type.GET_TODOS_REQUESTED });
  } catch (error) {
    console.log(error);
  }
}
function* handleEditTodo({ payload }) {
  const { id, todo } = payload;
  try {
    yield updateTodo(id, todo);
    yield put({ type: type.GET_TODOS_REQUESTED });
  } catch (error) {
    console.log(error);
  }
}
function* handleClearTodos() {
  try {
    yield clearTodos();
    yield put({ type: type.GET_TODOS_REQUESTED });
  } catch (error) {
    console.log(error);
  }
}
function* todoSaga() {
  yield takeEvery(type.GET_TODOS_REQUESTED, handleGetTodos);
  yield takeEvery(type.ADD_TODO_REQUESTED, handleAddTodo);
  yield takeEvery(type.UPDATE_TODO_REQUESTED, handleEditTodo);
  yield takeEvery(type.DELETE_TODO_REQUESTED, handleDeleteTodo);
  yield takeEvery(type.CLEAR_TODOS_REQUESTED, handleClearTodos);
}

export default todoSaga;
