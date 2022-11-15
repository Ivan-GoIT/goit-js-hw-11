import '../sass/common.scss';
import { inputEl, searchFormEl, galleryEl, headerEl } from './refs';
import markup from './markup';
import Gallery from './Gallery';
import notifySender from './notifySender';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const clearGalleryContainer = () => {
  galleryEl.innerHTML = '';
};

const connectSimpleLightbox = () => {
    const simpleLightbox = new SimpleLightbox(
      'section.gallery > .container > .photo-card > div',
      {
        sourceAttr: 'largeImageURL',
        alertError: false,
        history: false,
        animationSpeed:300,
      }
    );
}


const uploadPicturesToGallery = async () => {
  const response = await gallery.getPicturePage();
  if (notifySender(response.totalHits)) {
    clearGalleryContainer();
    galleryEl.insertAdjacentHTML('beforeEnd', markup(response.images));
  }
  connectSimpleLightbox()
};

const onSubmit = async e => {
  e.preventDefault();

  gallery.query = inputEl.value.replace(' ', '+').trim();
  gallery.resetPage();
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
inputEl.focus();
searchFormEl.addEventListener('submit', onSubmit);


//For testing TEST
// (async () => {
//   gallery.query = 'cat';
//   inputEl.value = 'cat';
//   const response = await gallery.getPicturePage();
//   galleryEl.innerHTML = markup(response.images);


//   connectSimpleLightbox()
// })();
