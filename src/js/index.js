import '../sass/common.scss';
import { inputEl, searchFormEl } from './refs';
import pixabayReq from './pixabayReq';

const MY_KEY = '31151048-14715764b2774648f52159790';

const onSubmit = async e => {
  e.preventDefault();
  const searchQuery = inputEl.value.replace(' ', '+').trim();
    const request = await pixabayReq(searchQuery);
};

searchFormEl.addEventListener('submit', onSubmit);
