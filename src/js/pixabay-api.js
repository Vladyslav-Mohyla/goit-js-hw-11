import axios from 'axios';

const API_KEY = '54239914-b8bb815315f9ce22f6479101b';

// query (пошукове слово, яке є рядком) здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
export const getImagesByQuery = query => {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(({ data }) => data)
    .catch(error => console.error('Помилка:', error));
};
