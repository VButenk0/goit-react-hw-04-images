import React from 'react';
import { StyledImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  handleClickImg,
}) => {
  const image = { webformatURL, largeImageURL, tags };
  return (
    <li>
      <StyledImg
        src={webformatURL}
        alt={tags}
        onClick={() => handleClickImg(image)}
      />
    </li>
  );
};
