import axios from 'axios';

const API_KEY = '14561738-ab29105e8f3333960184e35c7';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios
    .get(`${BASE_URL}?${params}`)
    .then(response => response.data.hits) // повертаємо тільки масив зображень
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error; // прокидаю помилку дальше
    });
}
