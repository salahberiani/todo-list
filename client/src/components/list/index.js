import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleTodo from './singleTodo';
import * as type from '../../redux/types';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  useEffect(() => {
    dispatch({ type: type.GET_TODOS_REQUESTED });
  }, [dispatch]);
  return (
    <>
      {todos?.map((todo) => (
        <SingleTodo key={todo._id} todo={todo}></SingleTodo>
      ))}
    </>
  );
}
