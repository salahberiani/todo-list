import styled from 'styled-components';

export const Input = styled.input`
  transform: scale(1.6);
  cursor: pointer;
  filter: hue-rotate(150deg);
`;
export const Text = styled.p`
  font-size: 1em;
  margin-left: 0.5em;
  font-weight: 500;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  color: ${(props) => (props.checked ? props.theme.colors.muted : props.theme.colors.semimuted)};
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.8em;
  font-weight: 500;
  margin-left: 0.5em;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.1em 0.7em;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;
