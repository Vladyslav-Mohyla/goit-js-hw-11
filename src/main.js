import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api'; // импорт функции запроса на Pixabay
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-function';

const form = document.querySelector('.form');
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' });

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const searchValue = event.target.elements['search-text'].value.trim();

  if (!searchValue) {
    alert('Введіть пошукове значення');
    return;
  }
  showLoader();
  getImagesByQuery(searchValue)
    .then(({ hits }) => {
      clearGallery();
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }

      createGallery(hits);
      lightbox.refresh();
    })
    .catch()
    .finally(() => {
      hideLoader();
    });
}
