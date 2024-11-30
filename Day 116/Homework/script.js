import { fetchRecipes } from './recipeFetcher.js';

const searchBtn = document.getElementById('searchBtn');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click', async () => {
    const ingredient = document.getElementById('ingredient').value;
    resultsDiv.innerHTML = ''; // Clear previous results

    try {
        const recipes = await fetchRecipes(ingredient);
        if (recipes.length === 0) {
            resultsDiv.innerHTML = '<p>No recipes found.</p>';
        } else {
            recipes.forEach(recipe => {
                const recipeInfo = document.createElement('div');
                recipeInfo.innerHTML = `
                    <h3>${recipe.recipe.label}</h3>
                    <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}" />
                    <p>Ingredients: ${recipe.recipe.ingredientLines.join(', ')}</p>
                    <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
                `;
                resultsDiv.appendChild(recipeInfo);
            });
        }
    } catch (error) {
        resultsDiv.innerHTML = '<p>Error fetching recipes. Please try again.</p>';
    }
});
