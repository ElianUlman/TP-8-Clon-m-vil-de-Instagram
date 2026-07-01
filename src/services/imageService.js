import axios from 'axios';

const PEXELS_API_KEY = "e4AYDImL8PLLj104MN2Epy36HgB1C6PzBwjCcbbQ5QvzQedPyuY1Mxtq";

const api = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    Authorization: PEXELS_API_KEY,
  },
});

export async function fetchImages(query = 'nature', count = 10) {
  if(!query){query="URSS"}
  try {
    const response = await api.get('/search', {
      params: {
        query,
        per_page: count,
      },
    });
    
    return response.data.photos.map((photo) => ({
      id: photo.id,
      url: photo.src.medium,
      urlFull: photo.src.large,
      photographer: photo.photographer,
      description: photo.alt
    }));
  } catch (error) {
    console.log('Error al traer imágenes:', error);
    throw error;
  }
}