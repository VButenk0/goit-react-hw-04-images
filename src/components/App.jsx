import { useState, useCallback, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getPhotoByQuery } from 'API/API';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import { Notify } from 'notiflix';

const PER_PAGE = 12;

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowLoadMore, setIsShowLoadMore] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const getDataFromApi = useCallback(async () => {
    try {
      setIsLoading(true);

      if (query === '') {
        setIsShowLoadMore(false);
        return;
      }

      const { hits } = await getPhotoByQuery(query, page, PER_PAGE);

      if (!hits.length) {
        setImages([]);
        setIsShowLoadMore(false);
        return Notify.failure(
          `No results for ${query}.
            But look at these random images!`
        );
      }

      hits.length < 12 ? setIsShowLoadMore(false) : setIsShowLoadMore(true);

      page > 1 ? setImages(prev => [...prev, ...hits]) : setImages(hits);
    } catch (error) {
      Notify.failure(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    getDataFromApi();
  }, [getDataFromApi]);

  const onSubmit = query => {
    setQuery(query);
    setPage(1);
  };

  const incrementPage = () => {
    setPage(prev => prev + 1);
  };

  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleClickImg = image => {
    setCurrentImg(image);
    setIsOpenModal(true);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery handleClickImg={handleClickImg} images={images} />
      {isLoading && <Loader />}
      {isShowLoadMore && !isLoading && <Button onClick={incrementPage} />}
      {isOpenModal && <Modal {...currentImg} closeModal={handleToggleModal} />}
    </>
  );
};
