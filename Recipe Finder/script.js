const apiKey = 'API Key'; // Replace with your Spoonacular API key

async function getRecipes() {
    const query = document.getElementById("search").value;
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=6&apiKey=${apiKey}`);
    const data = await response.json();
    displayRecipes(data.results);
}

async function getRecipeLink(id) {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
    const data = await response.json();
    return data.sourceUrl;
}

async function displayRecipes(recipes) {
    const recipeContainer = document.getElementById("recipes");
    recipeContainer.innerHTML = '';

    for (let recipe of recipes) {
        const recipeLink = await getRecipeLink(recipe.id);
        
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe");
        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <a href="${recipeLink}" target="_blank">View Full Recipe</a>
        `;
        recipeContainer.appendChild(recipeElement);
    }
}
