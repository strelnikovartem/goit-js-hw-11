import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(evt) {
  evt.preventDefault();
  clearGallery();

  const searchQuery = evt.target.elements['search-text'].value.trim();
  evt.target.reset();
  if (!searchQuery) {
    iziToast.error({
      message: 'Enter valid query',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  getImagesByQuery(searchQuery)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          maxWidth: 432,
        });
        return;
      }

      createGallery(hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
}
