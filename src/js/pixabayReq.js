import axios from 'axios';

const PIXABAY_KEY = '31151048-14715764b2774648f52159790';
const URL = 'https://pixabay.com/api/';

export default pixabayReq = (searchQuery,page) => {
  const params = {
    key: '31151048-14715764b2774648f52159790',
    url: 'https://pixabay.com/api/',
    q: searchQuery,
    per_page:10
  };
  axios.get(URL, { params }).then(res=>res.data.hits).then(console.log);
};
