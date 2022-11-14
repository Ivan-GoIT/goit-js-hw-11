import '../sass/common.scss';
import { inputEl, searchFormEl, galleryEl, headerEl } from './refs';
import markup from './markup';
import Gallery from './Gallery';
import notifySender from './notifySender';
import SimpleLightbox from 'simplelightbox';

const clearGalleryContainer = () => {
  galleryEl.innerHTML = '';
};

const onSubmit = async e => {
  e.preventDefault();

  gallery.query = inputEl.value.replace(' ', '+').trim();
  gallery.resetPage();
  const response = await gallery.getPicturePage();
  if (notifySender(response.totalHits)) {
    clearGalleryContainer();
    galleryEl.insertAdjacentHTML('beforeEnd', markup(response.images));
  }


  
  //!!!!!!!!!!!!!!!!!InfiniteScroll
  //   console.log(' перед infScroll');
  // console.log(typeof response.image);
  //   const infScroll = new InfiniteScroll(galleryEl, {
  //     path: markup(response.images),
  //     append: '.photo-card',
  //   });

  //     console.log(' после infScroll');
};

const onClick = async () => {
  const response = await gallery.getPicturePage();
  if (notifySender(response.totalHits));
  galleryEl.insertAdjacentHTML('beforeEnd', markup(response.images));
};


document.body.style.paddingTop = getComputedStyle(headerEl).height;
const gallery = new Gallery();
inputEl.focus();
searchFormEl.addEventListener('submit', onSubmit);

const lightbox = new SimpleLightbox('.photo-card > .img-box', {
  captionDelay: 250,
});

galleryEl.addEventListener('click', e => lightbox.poen(e.target.parentNode));


// document.querySelector('.load-more').addEventListener('click', onClick);

//For testing TEST

// (async() => {
//   const searchQuery = 'cat';
//   inputEl.value = searchQuery;
//   const gallery = new Gallery(searchQuery);
//   const images = await gallery.getPicturePage();
//   galleryEl.innerHTML = markup(images);
// })()
