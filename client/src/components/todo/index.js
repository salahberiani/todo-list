import React from 'react';
import Header from '../header';
import AddTodo from '../addTodo';
import List from '../list';
import { TodoContainer } from './TodoContainer.styled';

export default function Todo() {
  return (
    <TodoContainer>
      <Header></Header>
      <AddTodo></AddTodo>
      <List></List>
    </TodoContainer>
  );
}
