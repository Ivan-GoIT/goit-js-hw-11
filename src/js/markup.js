export default markup = imgList => {
  return imgList
    .map(
      ({
        likes,
        views,
        comments,
        downloads,
        previewURL,
        tags,
        largeImageURL,
      }) => `   
            <div class="photo-card">
              <a class="img-box" href=${largeImageURL}>
                <img src="${previewURL}" alt="${tags}" loading="lazy" />
              </a>
              <div class="info">
                <p class="info-item">
                  <b>Likes</b>
                  ${likes}
                </p>
                <p class="info-item">
                  <b>Views</b>
                  ${views}
                </p>
                <p class="info-item">
                  <b>Comments</b>
                  ${comments}
                </p>
                <p class="info-item">
                  <b>Downloads</b>
                  ${downloads}
                </p>
              </div>
            </div>`
    )
    .join('');
};
