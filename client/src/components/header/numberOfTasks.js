import React from 'react';
import { useSelector } from 'react-redux';
import { NumOfTasks } from './Header.styled';

export default function NumberOfTasks() {
  const todos = useSelector((state) => state.todos.todos);

  return <NumOfTasks>{todos?.length} Tasks</NumOfTasks>;
}
