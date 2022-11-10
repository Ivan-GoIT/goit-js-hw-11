import axios from 'axios';

export default class Gallery {
  #PIXABAY_KEY = '31151048-14715764b2774648f52159790';
  #URL = 'https://pixabay.com/api/';
  #page = 1;
  #params = {};
  constructor(searchQuery) {
    this.#params = {
      key: this.#PIXABAY_KEY,
      q: searchQuery,
      per_page: 10,
      page: this.#page,
    };
  }

  #transformResponse = res => {
    const imgArray = res.data.hits.map(
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
        totalHits,
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
        totalHits,
      })
    );
    return { totalHits: res.data.totalHits, images: imgArray };
  };

  getPicturePage() {
    return axios
      .get(this.#URL, { params: this.#params })
      .then(this.#transformResponse);
  }
}
