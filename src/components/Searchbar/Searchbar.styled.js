import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #383fa7;
  padding: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px black;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin-right: 10px;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const StyledSearch = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 100%;
    margin-left: -4px;
    margin-top: -4px;
    color: gray;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 8px;
    background: currentColor;
    transform: rotate(-45deg);
    top: 10px;
    left: 12px;
  }
  &:hover {
    color: #383fa7;
  }
`;
