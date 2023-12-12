import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getPhotoByQuery = async (q, page, per_page) => {
  const axiosOptions = {
    params: {
      key: '40710961-6059c47a2227fd63de52df13c',
      image_type: 'photo',
      orientation: 'horizontal',
      q: q,
      page: page,
      per_page: per_page,
    },
  };
  return axios
    .get('', axiosOptions)
    .then(res => res.data)
    .catch(err => console.log(err));
};
