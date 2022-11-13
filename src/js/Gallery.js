import axios from 'axios';
const PIXABAY_KEY = '31151048-14715764b2774648f52159790';
const URL = 'https://pixabay.com/api/';
const params = {
  key: '',
  q: '',
  per_page: null,
  page: 1,
};
export default class Gallery {
  #URL = '';
  #params = params;
  constructor() {
    this.#URL = URL;
    this.#params.key = PIXABAY_KEY;
    this.#params.per_page = 20;
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
      .then(this.#transformResponse)
      .then(data => {
        this.#params.page++;
        return data;
      });
  }

  set query(searchQuery) {
    this.#params.q = searchQuery;
  }

  resetPage() {
    this.#params.page = 1;
  }
}
