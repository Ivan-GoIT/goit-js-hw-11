import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default notifySender = length => {
  if (length) {
    Notify.success(`Hooray! We found ${length} images`);
    return true;
  } else {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
      return false;
  }
};
