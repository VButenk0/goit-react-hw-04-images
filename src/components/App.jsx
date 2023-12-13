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
  const [isNewSearch, setIsNewSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const getDataFromApi = useCallback(
    async query => {
      try {
        setIsLoading(true);
        !query &&
          Notify.failure(
            `No results for ${query}.
            But look at these random images!`
          );
        const { hits } = await getPhotoByQuery(query, page, PER_PAGE);

        hits.length < 12 ? setIsShowLoadMore(false) : setIsShowLoadMore(true);
        page > 1 ? setImages(prev => [...prev, ...hits]) : setImages(hits);
      } catch (error) {
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
        setIsNewSearch(false);
      }
    },
    [page]
  );

  useEffect(() => {
    if (isNewSearch) {
      getDataFromApi(query);
      console.log('Запит по значенню');
    } else if (page > 1) {
      getDataFromApi(query);
      console.log('Запит на ще 12 картинок');
    }
  }, [getDataFromApi, query, isNewSearch, page]);

  const onSubmit = query => {
    setQuery(query);
    setPage(1);
    setIsNewSearch(true);
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
