import React from 'react';
import dayjs from 'dayjs';
import { Date, Flex } from './Header.styled';

export default function date() {
  return (
    <Flex>
      <Date data-test="dayComponent" color="#585be3" fontSize="2rem">
        {dayjs().format('dddd')}, {dayjs().format('DD')}th
      </Date>
      <Date data-test="monthComponent" color="#bbbed6" fontSize="1rem">
        {dayjs().format('MMMM')}
      </Date>
    </Flex>
  );
}
