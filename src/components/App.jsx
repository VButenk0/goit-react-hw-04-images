import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getPhotoByQuery } from 'API/API';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    isShowLoadMore: false,
    isOpenModal: false,
    currentImg: null,
    isNewSearch: false,

    q: '',
    page: 1,
    per_page: 12,
  };

  componentDidMount() {}

  componentDidUpdate(_, prevState) {
    if (
      (prevState.page !== this.state.page || this.state.isNewSearch) &&
      !this.state.isLoading
    ) {
      this.getDataFromApi();
    }
  }

  getDataFromApi = async () => {
    const { q, page, per_page } = this.state;
    try {
      this.setState({
        isLoading: true,
        isShowLoadMore: true,
        isNewSearch: false,
      });
      const { hits } = await getPhotoByQuery(q, page, per_page);
      if (hits.length < 12) {
        this.setState({
          isShowLoadMore: false,
        });
      }
      this.setState(prev => ({ images: [...prev.images, ...hits] }));
    } catch (error) {
      alert(error.response.data);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChangeQuery = e => {
    this.setState({ q: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(() => ({ images: [], page: 1, isNewSearch: true }));
  };

  incrementPage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleToggleModal = () => {
    this.setState(prev => ({ isOpenModal: !prev.isOpenModal }));
  };

  handleClickImg = image => {
    this.setState({ currentImg: image, isOpenModal: true });
  };

  render() {
    const { images, isLoading, isShowLoadMore, isOpenModal } = this.state;

    return (
      <>
        <Searchbar
          handleChangeQuery={this.handleChangeQuery}
          handleSubmit={this.handleSubmit}
        />
        <ImageGallery handleClickImg={this.handleClickImg} images={images} />
        {isLoading && <Loader />}
        {isShowLoadMore && !isLoading && (
          <Button onClick={this.incrementPage} />
        )}
        {isOpenModal && (
          <Modal
            {...this.state.currentImg}
            closeModal={this.handleToggleModal}
          />
        )}
      </>
    );
  }
}
