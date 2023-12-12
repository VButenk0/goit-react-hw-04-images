import styled from 'styled-components';

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  cursor: zoom-in;

  &:hover {
    transform: scale(1.03);
  }
`;
