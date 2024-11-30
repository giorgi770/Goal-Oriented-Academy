import axios from 'axios';

const appId = '6bb1a9dd';
const appKey = 'YOUR_APP_KEY';
const apiUrl = 'https://api.edamam.com/search';

export async function fetchRecipes(ingredient) {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: ingredient,
        app_id: appId,
        app_key: appKey,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
}
