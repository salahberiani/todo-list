import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import * as type from '../../redux/types';
import { Wrapper, Input, Text, Span } from './list.styled';

export default function TodoList({ todo }) {
  const dispatch = useDispatch();
  console.log('todooo', todo);
  return (
    <Wrapper>
      <Wrapper>
        <Input
          onChange={() =>
            dispatch({
              type: type.UPDATE_TODO_REQUESTED,
              payload: {
                id: todo?._id,
                todo: {
                  completed: !todo?.completed,
                  dateOfComplete: todo?.completed ? null : dayjs(),
                },
              },
            })
          }
          type="checkbox"
          checked={todo?.completed}
        ></Input>
        <Text test-data="todoTilte" checked={todo?.completed}>
          {todo?.title}
        </Text>
      </Wrapper>
      <Wrapper>
        <Span>{todo?.dateOfComplete && dayjs(todo?.dateOfComplete).format('HH:mm A')}</Span>
        <Span onClick={() => dispatch({ type: type.DELETE_TODO_REQUESTED, payload: todo?._id })}>
          <AiFillDelete
            style={{ color: '#fb6f70', cursor: 'pointer', fontSize: 18 }}
          ></AiFillDelete>
        </Span>
      </Wrapper>
    </Wrapper>
  );
}

TodoList.propTypes = {
  todo: PropTypes.object,
};
