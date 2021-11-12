import styled from 'styled-components';
export const AddInput = styled.input`
  padding: 0.8em;
  width: 100%;
  border: none;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.muted};
  font-weight: bold;

  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #bbbed6;
  }
`;
export const AddContainer = styled.div`
  padding: 0.2em 1em;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
export const AddButton = styled.button`
  font-size: 1.5em;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
