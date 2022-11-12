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
  gallery.query = inputEl.value.replace(' ', '+').trim();
  const response = await gallery.getPicturePage();
  if (notifySender(response.totalHits));
  galleryEl.insertAdjacentHTML('beforeEnd', markup(response.images));

};

const onClick = async() => { 
  const response = await gallery.getPicturePage();
  if (notifySender(response.totalHits));
  galleryEl.insertAdjacentHTML('beforeEnd', markup(response.images));

}

document.body.style.paddingTop = getComputedStyle(headerEl).height;
const gallery = new Gallery();
inputEl.focus();
searchFormEl.addEventListener('submit', onSubmit);
document.querySelector('.next').addEventListener('click',onClick)

//For testing TEST

// (async() => {
//   const searchQuery = 'cat';
//   inputEl.value = searchQuery;
//   const gallery = new Gallery(searchQuery);
//   const images = await gallery.getPicturePage();
//   galleryEl.innerHTML = markup(images);
// })()
