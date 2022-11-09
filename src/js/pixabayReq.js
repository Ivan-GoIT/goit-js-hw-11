import axios from 'axios';

const URL = 'https://pixabay.com/api/';

const transformResponse = res => {
  return res.data.hits.map(
    ({
      likes,
      views,
      comments,
      downloads,
      previewURL,
      tags,
      webformatURL,
      largeImageURL,
      fullHDURL,
    }) => ({
      likes,
      views,
      comments,
      downloads,
      previewURL,
      tags,
      webformatURL,
      largeImageURL,
      fullHDURL,
    })
  );
};

export default pixabayReq = (searchQuery) => {
  const params = {
    key: '31151048-14715764b2774648f52159790',
    q: searchQuery,
    per_page: 10,
  };

  return axios
    .get(URL, { params })
    .then(transformResponse);
};
