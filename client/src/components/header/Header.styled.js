import styled from 'styled-components';

export const NumOfTasks = styled.span`
  color: ${({ theme }) => theme.colors?.muted};
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
`;

export const ClearButton = styled.button`
  background: ${({ theme }) => theme.colors?.secondary};
  color: white;
  padding: 0.25em 0.5em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const Date = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
`;

export const HeaderContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
