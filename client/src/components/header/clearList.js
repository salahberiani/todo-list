import React from 'react';
import { useDispatch } from 'react-redux';
import { ClearButton } from './Header.styled';
import * as type from '../../redux/types';

export default function NumberOfTasks() {
  const dispatch = useDispatch();
  return (
    <ClearButton onClick={() => dispatch({ type: type.CLEAR_TODOS_REQUESTED })}>
      Clear List
    </ClearButton>
  );
}
