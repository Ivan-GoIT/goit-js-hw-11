export default markup = imgList => {
  return imgList
    .map(
      ({ likes, views, comments, downloads, previewURL, tags }) => `   
      <div class="gallery-item">
        <img src="${previewURL}" alt="${tags}" class="gallery-item-img">
          <ul class="ul-zeroing">
            <li class="gallery-item-info">
              <strong>Likes</strong>
              <p>${likes}</p>
            </li>
            <li class="gallery-item-info">
              <strong>Views</strong>
              <p>${views}</p>
            </li>
            <li class="gallery-item-info">
              <strong>Comments</strong>
              <p>${comments}</p>
            </li>
            <li class="gallery-item-info">
              <strong>Downloads</strong>
              <p>${downloads}</p>
            </li>
          </ul>
      </div>
`
    )
    .join('');
};
