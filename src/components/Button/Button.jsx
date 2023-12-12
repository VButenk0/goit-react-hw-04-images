import React from 'react';
import { StyledButton, StyledButtonDiv } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <StyledButtonDiv>
      <StyledButton onClick={onClick}>Load more</StyledButton>
    </StyledButtonDiv>
  );
};
