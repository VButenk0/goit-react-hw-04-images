import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, handleClickImg }) => {
  return (
    <StyledImageGallery>
      {images.map(image => (
        <ImageGalleryItem
          key={nanoid()}
          {...image}
          handleClickImg={handleClickImg}
        />
      ))}
    </StyledImageGallery>
  );
};
