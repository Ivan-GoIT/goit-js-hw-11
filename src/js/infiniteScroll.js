export default (galleryEl, callback) => {
  if (
    galleryEl.offsetHeight + galleryEl.offsetTop - window.pageYOffset <=
    document.documentElement.clientHeight*1.5
  ) {
    callback();
  }
};
