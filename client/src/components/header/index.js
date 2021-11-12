import React from 'react';
import Date from './date';
import NumberOfTasks from './numberOfTasks';
import ClearList from './clearList';
import { HeaderContainer, Flex } from './Header.styled';

export default function TodoHeader() {
  return (
    <HeaderContainer>
      <Date></Date>
      <Flex>
        <NumberOfTasks></NumberOfTasks>
        <ClearList></ClearList>
      </Flex>
    </HeaderContainer>
  );
}
