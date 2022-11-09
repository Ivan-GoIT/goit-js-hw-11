import '../sass/common.scss';
import { inputEl, searchFormEl, galleryEl } from './refs';
import pixabayReq from './pixabayReq';
import markup from './markup';
import Gallery from './Gallery';

const onSubmit = async e => {
  e.preventDefault();
  const searchQuery = inputEl.value.replace(' ', '+').trim();
  const gallery = new Gallery(searchQuery);
  const images = await gallery.getPicturePage();
  galleryEl.innerHTML = markup(images);
};
inputEl.focus();
searchFormEl.addEventListener('submit', onSubmit);
