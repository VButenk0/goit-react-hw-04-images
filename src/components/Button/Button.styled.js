import styled from 'styled-components';

export const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  border: none;
  color: white;
  background-color: #383fa7;
  padding: 5px 25px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px auto 20px;

  &:hover {
    background-color: #4d57e5;
  }
`;
