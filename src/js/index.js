import { inputEl, searchFormEl, galleryEl, headerEl } from './refs';
import markup from './markup';
import Gallery from './Gallery';
import notifySender from './notifySender';
import 'lazysizes';
import SimpleLightbox from 'simplelightbox';
import infiniteScroll from './infiniteScroll';
import throttle from 'lodash.throttle';
import '../sass/common.scss';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'simplelightbox/dist/simple-lightbox.min.css';

const sLightbox = new SimpleLightbox(
  'section.gallery > .container > .photo-card > div',
  {
    sourceAttr: 'largeImageURL',
    alertError: false,
    history: false,
    animationSpeed: 300,
  }
);

const clearGalleryContainer = () => {
  galleryEl.innerHTML = '';
};

const connectSimpleLightbox = () => {
  return new SimpleLightbox(
    'section.gallery > .container > .photo-card > div',
    {
      sourceAttr: 'largeImageURL',
      alertError: false,
      history: false,
      animationSpeed: 300,
    }
  );
};

const uploadPicturesToGallery = async () => {
  const response = await gallery.getPicturePage();

  if (notifySender(response)) {
    galleryEl.insertAdjacentHTML('beforeEnd', markup(response.data.hits));
    sLightbox.refresh();
  }
};

function onScroll() {
  infiniteScroll(galleryEl, uploadPicturesToGallery);
}

const onSubmit = async e => {
  e.preventDefault();

  gallery.query = inputEl.value.replace(' ', '+').trim();
  gallery.resetPage();
  clearGalleryContainer();
  uploadPicturesToGallery();
};

//*****For the 'load-more' button */

// const onClick = async () => {
//   const response = await gallery.getPicturePage();
//   if (notifySender(response.totalHits));
//   galleryEl.insertAdjacentHTML('beforeEnd', markup(response.images));
// };

// document.querySelector('.load-more').addEventListener('click', onClick);

document.body.style.paddingTop = getComputedStyle(headerEl).height;
const gallery = new Gallery();
const simpleLightbox = {};
inputEl.focus();
searchFormEl.addEventListener('submit', onSubmit);
document.addEventListener('scroll', throttle(onScroll,300));

//плавнв=ая прокрутка

// const { height: cardHeight } = document
//   .querySelector('.gallery')
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: 'smooth',
// });

//For testing TEST
// (async () => {
//   gallery.query = 'cat';
//   inputEl.value = 'cat';
//   const response = await gallery.getPicturePage();
//   galleryEl.innerHTML = markup(response.images);
//   connectSimpleLightbox()
// })();
