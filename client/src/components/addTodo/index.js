import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import useAdd from './useAdd';
import { AddContainer, AddButton, AddInput } from './Add.styled';

export default function AddTodo() {
  const { handleKeypress, titleRef, onAdd } = useAdd();

  return (
    <AddContainer>
      <AddButton onClick={onAdd}>
        <AiOutlinePlus
          style={{ color: '#bbbed6', strokeWidth: '6%', marginTop: 8 }}
        ></AiOutlinePlus>
      </AddButton>
      <AddInput
        onKeyPress={handleKeypress}
        ref={titleRef}
        type="text"
        placeholder="Type your task"
      ></AddInput>
    </AddContainer>
  );
}
