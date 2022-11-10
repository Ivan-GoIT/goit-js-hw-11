import '../sass/common.scss';
import {
  inputEl,
  searchFormEl,
  galleryEl,
  headerEl,
  galleryItemEl,
} from './refs';
import pixabayReq from './pixabayReq';
import markup from './markup';
import Gallery from './Gallery';
import notifySender from './notifySender';

const onSubmit = async e => {
  e.preventDefault();
  const searchQuery = inputEl.value.replace(' ', '+').trim();
  const gallery = new Gallery(searchQuery);
  const response = await gallery.getPicturePage();
  if (notifySender(response.totalHits));
  galleryEl.innerHTML = markup(response.images);
};

document.body.style.paddingTop = getComputedStyle(headerEl).height;

inputEl.focus();
searchFormEl.addEventListener('submit', onSubmit);

//For testing TEST

// (async() => {
//   const searchQuery = 'cat';
//   inputEl.value = searchQuery;
//   const gallery = new Gallery(searchQuery);
//   const images = await gallery.getPicturePage();
//   galleryEl.innerHTML = markup(images);
// })()
