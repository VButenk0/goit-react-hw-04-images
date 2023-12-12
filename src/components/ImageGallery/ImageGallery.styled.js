import styled from 'styled-components';

export const StyledImageGallery = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 13vw;
  gap: 15px;

  padding: 10px;
  margin: 0;
`;
