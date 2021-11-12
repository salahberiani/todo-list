import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as type from '../../redux/types';

export default function useAdd() {
  const dispatch = useDispatch();
  const titleRef = useRef('');
  const onAdd = useCallback(() => {
    if (titleRef.current.value !== '') {
      dispatch({ type: type.ADD_TODO_REQUESTED, payload: { title: titleRef.current.value } });
      titleRef.current.value = '';
    }
  }, [dispatch]);

  const handleKeypress = (e) => {
    if (e.charCode === 13 && e.target.value !== '') {
      onAdd();
    }
  };

  return { handleKeypress, titleRef, onAdd };
}
